import { useMemo, useState } from 'react'
import type { QuizItem } from '../content/types'
import { speak } from '../lib/tts'

// Normaliza para comparar respostas digitadas com tolerância
function norm(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.!?]$/, '')
}

type ItemState = 'idle' | 'correct' | 'wrong'

function ChoiceItem({ item, onDone }: { item: Extract<QuizItem, { kind: 'choice' }>; onDone: (ok: boolean) => void }) {
  const [picked, setPicked] = useState<number | null>(null)
  const done = picked !== null
  return (
    <div>
      <p className="quiz-prompt">{item.prompt}</p>
      <div className="quiz-options">
        {item.options.map((opt, i) => {
          let cls = 'quiz-option'
          if (done && i === item.answer) cls += ' correct'
          else if (done && i === picked && i !== item.answer) cls += ' wrong'
          return (
            <button
              key={i}
              className={cls}
              disabled={done}
              onClick={() => {
                setPicked(i)
                onDone(i === item.answer)
              }}
            >
              {opt}
            </button>
          )
        })}
      </div>
      {!done && item.hint && <p className="quiz-hint">Dica: {item.hint}</p>}
      {done && picked !== item.answer && (
        <p className="quiz-feedback">✗ Resposta certa: <span className="de-word">{item.options[item.answer]}</span></p>
      )}
    </div>
  )
}

function GapItem({ item, onDone }: { item: Extract<QuizItem, { kind: 'gap' }>; onDone: (ok: boolean) => void }) {
  const [value, setValue] = useState('')
  const [state, setState] = useState<ItemState>('idle')

  const check = () => {
    if (state !== 'idle' || !value.trim()) return
    const ok = item.answer.some((a) => norm(a) === norm(value))
    setState(ok ? 'correct' : 'wrong')
    onDone(ok)
  }

  return (
    <div>
      <p className="gap-sentence">
        {item.before}
        <input
          className={`gap-input ${state !== 'idle' ? state : ''}`}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && check()}
          disabled={state !== 'idle'}
          placeholder="…"
          autoFocus
        />
        {item.after}
      </p>
      {state === 'idle' && (
        <>
          {item.hint && <p className="quiz-hint">Dica: {item.hint}</p>}
          <div className="quiz-actions">
            <button className="btn btn-blau btn-sm" onClick={check}>Verificar</button>
          </div>
        </>
      )}
      {state === 'wrong' && (
        <p className="quiz-feedback">✗ Resposta: <span className="de-word">{item.answer[0]}</span></p>
      )}
      {state === 'correct' && <p className="quiz-feedback">✓ Richtig!</p>}
    </div>
  )
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function OrderItem({ item, onDone }: { item: Extract<QuizItem, { kind: 'order' }>; onDone: (ok: boolean) => void }) {
  // baralha garantindo que não comece já resolvido
  const initial = useMemo(() => {
    let s = shuffle(item.words)
    if (s.join(' ') === item.answer && item.words.length > 1) s = [...s.slice(1), s[0]]
    return s
  }, [item])
  const [pool, setPool] = useState<string[]>(initial)
  const [slot, setSlot] = useState<string[]>([])
  const [state, setState] = useState<ItemState>('idle')

  const pick = (i: number) => {
    if (state !== 'idle') return
    setSlot([...slot, pool[i]])
    setPool(pool.filter((_, j) => j !== i))
  }
  const unpick = (i: number) => {
    if (state !== 'idle') return
    setPool([...pool, slot[i]])
    setSlot(slot.filter((_, j) => j !== i))
  }
  const check = () => {
    if (state !== 'idle' || pool.length > 0) return
    const ok = norm(slot.join(' ')) === norm(item.answer)
    setState(ok ? 'correct' : 'wrong')
    if (ok) speak(item.answer)
    onDone(ok)
  }
  const reset = () => {
    setPool(shuffle(item.words))
    setSlot([])
  }

  return (
    <div>
      <p className="quiz-prompt">Monte a frase na ordem certa:</p>
      <div className={`order-slot ${state !== 'idle' ? state : ''}`}>
        {slot.length === 0 && <span style={{ color: 'var(--grau)', fontSize: 14 }}>clique nas palavras abaixo…</span>}
        {slot.map((w, i) => (
          <button key={`${w}-${i}`} className="word-chip" onClick={() => unpick(i)}>{w}</button>
        ))}
      </div>
      <div className="order-pool">
        {pool.map((w, i) => (
          <button key={`${w}-${i}`} className="word-chip" onClick={() => pick(i)}>{w}</button>
        ))}
      </div>
      {state === 'idle' && (
        <>
          {item.hint && <p className="quiz-hint">Dica: {item.hint}</p>}
          <div className="quiz-actions">
            <button className="btn btn-blau btn-sm" onClick={check} disabled={pool.length > 0}>Verificar</button>
            <button className="btn btn-sm" onClick={reset}>Recomeçar</button>
          </div>
        </>
      )}
      {state === 'wrong' && (
        <p className="quiz-feedback">✗ Ordem certa: <span className="de-word">{item.answer}</span></p>
      )}
      {state === 'correct' && <p className="quiz-feedback">✓ Genau!</p>}
    </div>
  )
}

// ── Quiz completo (sequência de itens + placar) ──────────────────────
export default function Quiz({
  items,
  onFinish,
  onItemResult,
}: {
  items: QuizItem[]
  onFinish?: (score: number) => void
  onItemResult?: (item: QuizItem, ok: boolean) => void
}) {
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<boolean[]>([])
  const [answered, setAnswered] = useState(false)
  const finished = index >= items.length

  const handleDone = (ok: boolean) => {
    if (answered) return
    setAnswered(true)
    setAnswers((a) => [...a, ok])
    onItemResult?.(items[index], ok)
  }

  const next = () => {
    const ni = index + 1
    setIndex(ni)
    setAnswered(false)
    if (ni >= items.length && onFinish) {
      const hits = answers.filter(Boolean).length
      onFinish(hits / items.length)
    }
  }

  const retry = () => {
    setIndex(0)
    setAnswers([])
    setAnswered(false)
  }

  if (finished) {
    const hits = answers.filter(Boolean).length
    const pct = Math.round((hits / items.length) * 100)
    return (
      <div className="quiz-box">
        <div className="quiz-head">
          <span className="display">Ergebnis</span>
        </div>
        <div className="quiz-result">
          <div className="score-display" style={{ color: pct >= 70 ? 'var(--blau)' : 'var(--rot)' }}>
            {pct}%
          </div>
          <p style={{ marginTop: 10, fontWeight: 700 }}>
            {hits} de {items.length} — {pct >= 90 ? 'Ausgezeichnet! 🏆' : pct >= 70 ? 'Sehr gut!' : 'Weiter üben — refaça o quiz.'}
          </p>
          <div className="quiz-actions" style={{ justifyContent: 'center' }}>
            <button className="btn btn-gelb" onClick={retry}>Refazer quiz</button>
          </div>
        </div>
      </div>
    )
  }

  const item = items[index]
  return (
    <div className="quiz-box">
      <div className="quiz-head">
        <span className="display">Quiz</span>
        <span className="quiz-progress">
          {index + 1} / {items.length} · ✓ {answers.filter(Boolean).length}
        </span>
      </div>
      <div className="quiz-body" key={index}>
        {item.kind === 'choice' && <ChoiceItem item={item} onDone={handleDone} />}
        {item.kind === 'gap' && <GapItem item={item} onDone={handleDone} />}
        {item.kind === 'order' && <OrderItem item={item} onDone={handleDone} />}
        {answered && (
          <div className="quiz-actions">
            <button className="btn btn-ink" onClick={next}>
              {index + 1 < items.length ? 'Próxima →' : 'Ver resultado'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
