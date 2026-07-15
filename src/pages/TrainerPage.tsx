import { useMemo, useState } from 'react'
import { allVocab, VERBS, VERB_TYPES, VOCAB } from '../content'
import type { VerbType } from '../content/types'
import { PERSONS } from '../content/types'
import { touchActivity } from '../lib/storage'
import { speak } from '../lib/tts'

function norm(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/…/g, '').replace(/\s+/g, ' ').trim()
}
function rnd<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ═══ 1) Treinador de conjugação ══════════════════════════════════════
type VerbMode = 'praesens' | 'partizip'

function VerbTrainer() {
  const [types, setTypes] = useState<VerbType[]>(['modal'])
  const [mode, setMode] = useState<VerbMode>('praesens')
  const [task, setTask] = useState(() => makeTask(['modal'], 'praesens'))
  const [answer, setAnswer] = useState('')
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [score, setScore] = useState({ ok: 0, total: 0, streak: 0 })

  function makeTask(ts: VerbType[], m: VerbMode) {
    const pool = VERBS.filter((v) => ts.includes(v.type) && (m === 'praesens' || v.partizip))
    const verb = rnd(pool.length ? pool : VERBS)
    const person = Math.floor(Math.random() * 6)
    return { verb, person }
  }

  const expected =
    mode === 'praesens'
      ? task.verb.praesens[task.person]
      : `${task.verb.aux === 'sein' ? 'ist' : 'hat'} ${task.verb.partizip}`

  const check = () => {
    if (state !== 'idle' || !answer.trim()) return
    const ok =
      norm(answer) === norm(expected) ||
      (mode === 'partizip' && norm(answer) === norm(task.verb.partizip ?? ''))
    setState(ok ? 'correct' : 'wrong')
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1, streak: ok ? s.streak + 1 : 0 }))
    touchActivity(ok ? 4 : 1)
    if (ok) speak(mode === 'praesens' ? `${PERSONS[task.person].split('/')[0]} ${expected.replace('…', '')}` : expected)
  }

  const next = () => {
    setTask(makeTask(types, mode))
    setAnswer('')
    setState('idle')
  }

  const toggleType = (t: VerbType) => {
    const nt = types.includes(t) ? types.filter((x) => x !== t) : [...types, t]
    if (nt.length === 0) return
    setTypes(nt)
    setTask(makeTask(nt, mode))
    setAnswer('')
    setState('idle')
  }

  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16, justifyContent: 'center' }}>
        {VERB_TYPES.map((t) => (
          <button
            key={t.id}
            className={`btn btn-sm ${types.includes(t.id) ? 'btn-blau' : ''}`}
            title={t.desc}
            onClick={() => toggleType(t.id)}
          >
            {t.label}
          </button>
        ))}
        <button
          className={`btn btn-sm ${mode === 'partizip' ? 'btn-rot' : ''}`}
          onClick={() => {
            const m = mode === 'praesens' ? 'partizip' : 'praesens'
            setMode(m)
            setTask(makeTask(types, m))
            setAnswer('')
            setState('idle')
          }}
        >
          {mode === 'praesens' ? 'Präsens' : 'Perfekt'} ⇄
        </button>
      </div>

      <div className="trainer-stage">
        <p className="trainer-prompt">
          {mode === 'praesens' ? (
            <>Conjugue no Präsens para <strong className="de-word">{PERSONS[task.person]}</strong>:</>
          ) : (
            <>Perfekt (er/sie/es): <strong>auxiliar + Partizip II</strong> de:</>
          )}
        </p>
        <div className="trainer-word">{task.verb.inf}</div>
        <p style={{ marginTop: -12, marginBottom: 18, color: 'var(--grau)' }}>{task.verb.pt}</p>
        <div className="trainer-input-row">
          <input
            className={`gap-input ${state !== 'idle' ? state : ''}`}
            style={{ minWidth: 220 }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (state === 'idle' ? check() : next())}
            placeholder={mode === 'praesens' ? `${PERSONS[task.person]} …` : 'hat/ist + ge…'}
            autoFocus
          />
          {state === 'idle' ? (
            <button className="btn btn-blau" onClick={check}>Verificar</button>
          ) : (
            <button className="btn btn-ink" onClick={next}>Próximo →</button>
          )}
        </div>
        {state === 'wrong' && (
          <p className="quiz-feedback" style={{ justifyContent: 'center' }}>
            ✗ Certo: <span className="de-word">{expected}</span>
          </p>
        )}
        {state === 'correct' && <p className="quiz-feedback" style={{ justifyContent: 'center' }}>✓ Richtig!</p>}
        {task.verb.note && state !== 'idle' && (
          <p className="quiz-hint" style={{ marginTop: 8 }}>{task.verb.note}</p>
        )}
        {state === 'wrong' && (
          <div className="tbl-wrap" style={{ marginTop: 16, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', border: 'var(--line)' }}>
            <table className="tbl">
              <thead>
                <tr><th colSpan={2}>{task.verb.inf} — conjugação completa</th></tr>
              </thead>
              <tbody>
                {PERSONS.map((p, i) => (
                  <tr key={p}>
                    <td>{p}</td>
                    <td style={{ fontFamily: 'var(--font-mono)', fontWeight: i === task.person && mode === 'praesens' ? 700 : 400 }}>
                      {task.verb.praesens[i]}
                    </td>
                  </tr>
                ))}
                {task.verb.partizip && (
                  <tr>
                    <td>Perfekt</td>
                    <td style={{ fontFamily: 'var(--font-mono)' }}>
                      {task.verb.aux === 'sein' ? 'ist' : 'hat'} {task.verb.partizip}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
        <div className="trainer-score">
          <span>acertos: <b>{score.ok}</b></span>
          <span>total: <b>{score.total}</b></span>
          <span>sequência: <b style={{ color: score.streak >= 5 ? 'var(--rot)' : undefined }}>{score.streak}{score.streak >= 5 ? ' 🔥' : ''}</b></span>
        </div>
      </div>
    </>
  )
}

// ═══ 2) Artikel-Blitz (der/die/das) ══════════════════════════════════
function ArtikelBlitz() {
  const nouns = useMemo(() => allVocab().filter((c) => c.artikel), [])
  const [card, setCard] = useState(() => rnd(nouns))
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ ok: 0, total: 0, streak: 0 })

  const pick = (a: string) => {
    if (picked) return
    setPicked(a)
    const ok = a === card.artikel
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1, streak: ok ? s.streak + 1 : 0 }))
    touchActivity(ok ? 2 : 1)
    if (ok) speak(`${card.artikel} ${card.de}`)
    // avança sozinho após o feedback
    setTimeout(() => {
      setCard(rnd(nouns))
      setPicked(null)
    }, 900)
  }

  return (
    <div className="trainer-stage">
      <p className="trainer-prompt">Qual é o artigo?</p>
      <div className="trainer-word" style={{ textTransform: 'none' }}>{card.de}</div>
      <p style={{ marginTop: -12, marginBottom: 20, color: 'var(--grau)' }}>{card.pt}</p>
      <div className="artikel-btns">
        {(['der', 'die', 'das'] as const).map((a) => {
          let cls = 'artikel-btn'
          if (picked && a === card.artikel) cls += ' correct'
          else if (picked === a && a !== card.artikel) cls += ' wrong'
          return (
            <button key={a} className={cls} onClick={() => pick(a)}>{a}</button>
          )
        })}
      </div>
      <div className="trainer-score">
        <span>acertos: <b>{score.ok}</b></span>
        <span>total: <b>{score.total}</b></span>
        <span>sequência: <b style={{ color: score.streak >= 8 ? 'var(--rot)' : undefined }}>{score.streak}{score.streak >= 8 ? ' 🔥' : ''}</b></span>
      </div>
    </div>
  )
}

// ═══ 3) Die Uhr — relógio alemão informal ════════════════════════════
const HOUR_WORDS = ['zwölf', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf']
const MIN_WORDS: Record<number, string> = { 5: 'fünf', 10: 'zehn', 20: 'zwanzig', 25: 'fünf', 35: 'fünf', 40: 'zwanzig', 50: 'zehn', 55: 'fünf' }

function hourWord(h: number): string {
  return HOUR_WORDS[((h % 12) + 12) % 12]
}

// regra da aula 13: nach / vor / halb / Viertel
function germanTime(h: number, m: number): string {
  const next = h + 1
  if (m === 0) return `${hourWord(h)} Uhr`
  if (m === 15) return `Viertel nach ${hourWord(h)}`
  if (m === 30) return `halb ${hourWord(next)}`
  if (m === 45) return `Viertel vor ${hourWord(next)}`
  if (m === 25) return `fünf vor halb ${hourWord(next)}`
  if (m === 35) return `fünf nach halb ${hourWord(next)}`
  if (m < 30) return `${MIN_WORDS[m]} nach ${hourWord(h)}`
  return `${MIN_WORDS[m]} vor ${hourWord(next)}`
}

function makeClockTask() {
  const h = Math.floor(Math.random() * 12) + 1
  const mins = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55]
  const m = rnd(mins)
  const correct = germanTime(h, m)
  // distratores: erros clássicos (halb da hora errada, vor/nach trocados)
  const wrongs = new Set<string>()
  const candidates = [
    germanTime(h, (m + 30) % 60),
    germanTime((h % 12) + 1, m),
    germanTime(h === 1 ? 12 : h - 1, m),
    m < 30 ? germanTime(h, 60 - m === 60 ? 0 : 60 - m) : germanTime(h, 60 - m),
    `halb ${hourWord(h)}`,
  ]
  for (const cnd of candidates) {
    if (cnd !== correct) wrongs.add(cnd)
    if (wrongs.size === 3) break
  }
  return { h, m, correct, options: shuffle([correct, ...[...wrongs].slice(0, 3)]) }
}

function ClockFace({ h, m }: { h: number; m: number }) {
  const minAngle = m * 6
  const hourAngle = (h % 12) * 30 + m * 0.5
  return (
    <div className="clock-face-wrap">
      <svg className="clock-svg" width="200" height="200" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="92" fill="var(--paper)" stroke="var(--ink)" strokeWidth="4" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180
          const x1 = 100 + Math.sin(a) * 80
          const y1 = 100 - Math.cos(a) * 80
          const x2 = 100 + Math.sin(a) * (i % 3 === 0 ? 66 : 73)
          const y2 = 100 - Math.cos(a) * (i % 3 === 0 ? 66 : 73)
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--ink)" strokeWidth={i % 3 === 0 ? 5 : 2.5} />
        })}
        <line className="hand" x1="100" y1="100" x2="100" y2="52" stroke="var(--rot)" strokeWidth="7" style={{ transform: `rotate(${hourAngle}deg)` }} />
        <line className="hand" x1="100" y1="100" x2="100" y2="30" stroke="var(--blau)" strokeWidth="4.5" style={{ transform: `rotate(${minAngle}deg)` }} />
        <circle cx="100" cy="100" r="7" fill="var(--gelb)" stroke="var(--ink)" strokeWidth="3" />
      </svg>
    </div>
  )
}

function UhrTrainer() {
  const [task, setTask] = useState(makeClockTask)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const pick = (opt: string) => {
    if (picked) return
    setPicked(opt)
    const ok = opt === task.correct
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
    touchActivity(ok ? 3 : 1)
    speak(`Es ist ${task.correct}`)
  }

  return (
    <div className="trainer-stage">
      <p className="trainer-prompt">Wie spät ist es?</p>
      <ClockFace h={task.h} m={task.m} />
      <p className="kicker" style={{ marginBottom: 16 }}>
        {String(task.h).padStart(2, '0')}:{String(task.m).padStart(2, '0')}
      </p>
      <div className="quiz-options" style={{ maxWidth: 460, margin: '0 auto' }}>
        {task.options.map((opt) => {
          let cls = 'quiz-option'
          if (picked && opt === task.correct) cls += ' correct'
          else if (picked === opt && opt !== task.correct) cls += ' wrong'
          return (
            <button key={opt} className={cls} disabled={!!picked} onClick={() => pick(opt)}>
              Es ist {opt}.
            </button>
          )
        })}
      </div>
      {picked && (
        <div className="quiz-actions" style={{ justifyContent: 'center' }}>
          <button
            className="btn btn-ink"
            onClick={() => {
              setTask(makeClockTask())
              setPicked(null)
            }}
          >
            Próximo relógio →
          </button>
        </div>
      )}
      <div className="trainer-score">
        <span>acertos: <b>{score.ok}</b></span>
        <span>total: <b>{score.total}</b></span>
      </div>
    </div>
  )
}

// ═══ 4) Wohin-Drill — nach/in/zu/an ══════════════════════════════════
interface WohinItem {
  prompt: string
  correct: string[]
  options: string[]
  why: string
}

function makeWohinItems(): WohinItem[] {
  const items: WohinItem[] = []
  // lugares do vocabulário (in/zu conforme artigo — aula 13)
  for (const c of VOCAB.filter((v) => v.tags.includes('lugares') && v.artikel)) {
    const inForm = c.artikel === 'die' ? 'in die' : c.artikel === 'der' ? 'in den' : 'ins'
    const zuForm = c.artikel === 'die' ? 'zur' : 'zum'
    items.push({
      prompt: `Ich gehe ___ ${c.de}. (${c.artikel} ${c.de})`,
      correct: [inForm, zuForm],
      options: shuffle(['in die', 'in den', 'ins', c.artikel === 'die' ? 'zur' : 'zum']),
      why: `${c.artikel} ${c.de} → entrar: ${inForm} · direção: ${zuForm}`,
    })
  }
  // casos especiais da aula
  items.push(
    { prompt: 'Ich fliege ___ Deutschland.', correct: ['nach'], options: ['nach', 'in', 'zu', 'ins'], why: 'país sem artigo → nach' },
    { prompt: 'Elio fliegt ___ Schweiz. (die Schweiz)', correct: ['in die'], options: ['nach', 'in die', 'zur', 'in der'], why: 'país COM artigo → in die' },
    { prompt: 'Ich gehe ___ Hause.', correct: ['nach'], options: ['nach', 'zu', 'ins', 'in'], why: 'nach Hause = para casa (fixo)' },
    { prompt: 'Wir fahren ___ Strand. (der Strand)', correct: ['an den'], options: ['an den', 'in den', 'ans', 'zum'], why: 'beira d\'água → an den Strand' },
    { prompt: 'Das Bild hängt ___ Wand. (die Wand)', correct: ['an der'], options: ['an der', 'an die', 'in der', 'zur'], why: 'posição na superfície → an der (Wo? = Dativ)' },
  )
  return items
}

function WohinDrill() {
  const items = useMemo(makeWohinItems, [])
  const [item, setItem] = useState(() => rnd(items))
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const pick = (opt: string) => {
    if (picked) return
    setPicked(opt)
    const ok = item.correct.includes(opt)
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }))
    touchActivity(ok ? 3 : 1)
    if (ok) speak(item.prompt.replace('___', opt).replace(/\s*\(.*\)/, ''))
  }

  return (
    <div className="trainer-stage">
      <p className="trainer-prompt">Complete com a preposição certa:</p>
      <div className="trainer-word" style={{ fontSize: 'clamp(20px, 3.4vw, 32px)', textTransform: 'none' }}>
        {item.prompt}
      </div>
      <div className="quiz-options" style={{ maxWidth: 420, margin: '0 auto' }}>
        {item.options.map((opt) => {
          let cls = 'quiz-option'
          if (picked && item.correct.includes(opt)) cls += ' correct'
          else if (picked === opt && !item.correct.includes(opt)) cls += ' wrong'
          return (
            <button key={opt} className={cls} disabled={!!picked} onClick={() => pick(opt)}>
              {opt}
            </button>
          )
        })}
      </div>
      {picked && (
        <>
          <p className="quiz-hint" style={{ marginTop: 14 }}>{item.why}</p>
          <div className="quiz-actions" style={{ justifyContent: 'center' }}>
            <button
              className="btn btn-ink"
              onClick={() => {
                setItem(rnd(items))
                setPicked(null)
              }}
            >
              Próxima →
            </button>
          </div>
        </>
      )}
      <div className="trainer-score">
        <span>acertos: <b>{score.ok}</b></span>
        <span>total: <b>{score.total}</b></span>
      </div>
    </div>
  )
}

// ═══ 5) Zahlen-Trainer — números por extenso e de ouvido ═════════════
const ONES = ['null', 'eins', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn', 'elf', 'zwölf', 'dreizehn', 'vierzehn', 'fünfzehn', 'sechzehn', 'siebzehn', 'achtzehn', 'neunzehn']
const TENS = ['', '', 'zwanzig', 'dreißig', 'vierzig', 'fünfzig', 'sechzig', 'siebzig', 'achtzig', 'neunzig']

function numToGerman(n: number): string {
  if (n < 20) return ONES[n]
  if (n < 100) {
    const t = Math.floor(n / 10)
    const o = n % 10
    return o === 0 ? TENS[t] : `${o === 1 ? 'ein' : ONES[o]}und${TENS[t]}`
  }
  if (n < 1000) {
    const h = Math.floor(n / 100)
    const r = n % 100
    const hw = `${h === 1 ? 'ein' : ONES[h]}hundert`
    return r === 0 ? hw : hw + numToGerman(r)
  }
  if (n < 1_000_000) {
    const t = Math.floor(n / 1000)
    const r = n % 1000
    const tw = `${t === 1 ? 'ein' : numToGerman(t)}tausend`
    return r === 0 ? tw : tw + numToGerman(r)
  }
  return 'eine Million'
}

const ZAHL_RANGES = [
  { id: 20, label: '0–20' },
  { id: 100, label: '0–100' },
  { id: 1000, label: '0–1.000' },
  { id: 1000000, label: 'até 1 mi' },
] as const

function ZahlenTrainer() {
  const [max, setMax] = useState<number>(100)
  const [mode, setMode] = useState<'schreiben' | 'hoeren'>('schreiben')
  const [n, setN] = useState(() => Math.floor(Math.random() * 101))
  const [answer, setAnswer] = useState('')
  const [state, setState] = useState<'idle' | 'correct' | 'wrong'>('idle')
  const [score, setScore] = useState({ ok: 0, total: 0, streak: 0 })

  const roll = (m = max): number => {
    // números "interessantes" nos ranges altos (evita 7-dígitos aleatórios feios)
    let v: number
    if (m <= 100) v = Math.floor(Math.random() * (m + 1))
    else if (m <= 1000) v = Math.floor(Math.random() * 999) + 1
    else v = (Math.floor(Math.random() * 999) + 1) * [1, 10, 100, 1000][Math.floor(Math.random() * 4)]
    v = Math.min(v, 1_000_000)
    setN(v)
    setAnswer('')
    setState('idle')
    return v
  }

  const expected = numToGerman(n)

  const check = () => {
    if (state !== 'idle' || !answer.trim()) return
    const ok =
      mode === 'schreiben'
        ? norm(answer).replace(/\s|-/g, '') === expected.toLowerCase()
        : answer.replace(/[.\s]/g, '') === String(n)
    setState(ok ? 'correct' : 'wrong')
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1, streak: ok ? s.streak + 1 : 0 }))
    touchActivity(ok ? 3 : 1)
    if (ok && mode === 'schreiben') speak(expected)
  }

  return (
    <>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16, justifyContent: 'center' }}>
        {ZAHL_RANGES.map((r) => (
          <button
            key={r.id}
            className={`btn btn-sm ${max === r.id ? 'btn-blau' : ''}`}
            onClick={() => {
              setMax(r.id)
              roll(r.id)
            }}
          >
            {r.label}
          </button>
        ))}
        <button
          className={`btn btn-sm ${mode === 'hoeren' ? 'btn-rot' : ''}`}
          onClick={() => {
            const m = mode === 'schreiben' ? 'hoeren' : 'schreiben'
            setMode(m)
            const v = roll()
            if (m === 'hoeren') setTimeout(() => speak(numToGerman(v), 0.85), 200)
          }}
        >
          {mode === 'schreiben' ? 'Escrever ⇄' : 'De ouvido ⇄'}
        </button>
      </div>

      <div className="trainer-stage">
        {mode === 'schreiben' ? (
          <>
            <p className="trainer-prompt">Escreva o número por extenso em alemão:</p>
            <div className="trainer-word">{n.toLocaleString('de-DE')}</div>
          </>
        ) : (
          <>
            <p className="trainer-prompt">Ouça o número e digite em ALGARISMOS:</p>
            <div style={{ marginBottom: 18 }}>
              <button className="btn btn-gelb" onClick={() => speak(expected, 0.85)}>► Ouvir número</button>
            </div>
          </>
        )}
        <div className="trainer-input-row">
          <input
            className={`gap-input ${state !== 'idle' ? state : ''}`}
            style={{ minWidth: 260 }}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && (state === 'idle' ? check() : roll())}
            placeholder={mode === 'schreiben' ? 'einundzwanzig…' : '21…'}
            autoFocus
          />
          {state === 'idle' ? (
            <button className="btn btn-blau" onClick={check}>Verificar</button>
          ) : (
            <button
              className="btn btn-ink"
              onClick={() => {
                const v = roll()
                if (mode === 'hoeren') setTimeout(() => speak(numToGerman(v), 0.85), 100)
              }}
            >
              Próximo →
            </button>
          )}
        </div>
        {state === 'wrong' && (
          <p className="quiz-feedback" style={{ justifyContent: 'center' }}>
            ✗ Certo: <span className="de-word">{mode === 'schreiben' ? expected : n.toLocaleString('de-DE')}</span>
          </p>
        )}
        {state === 'correct' && <p className="quiz-feedback" style={{ justifyContent: 'center' }}>✓ Genau!</p>}
        <div className="trainer-score">
          <span>acertos: <b>{score.ok}</b></span>
          <span>total: <b>{score.total}</b></span>
          <span>sequência: <b style={{ color: score.streak >= 5 ? 'var(--rot)' : undefined }}>{score.streak}{score.streak >= 5 ? ' 🔥' : ''}</b></span>
        </div>
      </div>
    </>
  )
}

// ═══ página ══════════════════════════════════════════════════════════
const TABS = [
  { id: 'verben', label: 'Verben', desc: 'conjugação' },
  { id: 'artikel', label: 'Artikel', desc: 'der/die/das' },
  { id: 'zahlen', label: 'Zahlen', desc: 'números' },
  { id: 'uhr', label: 'Die Uhr', desc: 'relógio' },
  { id: 'wohin', label: 'Wohin?', desc: 'preposições' },
] as const

export default function TrainerPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]['id']>('verben')

  return (
    <>
      <p className="kicker">Trainer · erre aqui para acertar na vida real</p>
      <h1 className="display" style={{ marginBottom: 22 }}>Ateliê de treino</h1>

      <div className="tabs">
        {TABS.map((t) => (
          <button key={t.id} className={`tab ${tab === t.id ? 'active' : ''}`} onClick={() => setTab(t.id)}>
            {t.label} <span style={{ opacity: 0.6, fontWeight: 400 }}>· {t.desc}</span>
          </button>
        ))}
      </div>

      {tab === 'verben' && <VerbTrainer />}
      {tab === 'artikel' && <ArtikelBlitz />}
      {tab === 'zahlen' && <ZahlenTrainer />}
      {tab === 'uhr' && <UhrTrainer />}
      {tab === 'wohin' && <WohinDrill />}
    </>
  )
}
