import { useMemo, useState } from 'react'
import { ALL_MODULES } from '../content'
import { loadCustomCards } from '../lib/customCards'
import type { Example } from '../content/types'
import { speak, ttsAvailable } from '../lib/tts'
import { touchActivity } from '../lib/storage'
import { AudioButton, VoicePicker } from '../components/ui'

// frases de exemplo dos módulos + frases dos cards criados pelo usuário
function allExamples(): Example[] {
  const fromModules = ALL_MODULES.flatMap((m) =>
    m.sections.flatMap((s) => (s.kind === 'examples' ? s.items : [])),
  )
  const fromCustom = loadCustomCards()
    .filter((c) => c.example)
    .map((c) => ({ de: c.example!, pt: `${c.de} — ${c.pt}` }))
  return [...fromModules, ...fromCustom]
}

function norm(s: string): string {
  return s.trim().toLowerCase().replace(/\s+/g, ' ').replace(/[.,!?]/g, '')
}

// diff palavra a palavra para o ditado
function diffWords(target: string, typed: string): { word: string; ok: boolean }[] {
  const t = target.split(/\s+/)
  const u = norm(typed).split(/\s+/)
  return t.map((w, i) => ({ word: w, ok: norm(w) === (u[i] ?? '') }))
}

export default function HoerenPage() {
  const examples = useMemo(allExamples, [])
  const [mode, setMode] = useState<'diktat' | 'shadowing'>('diktat')
  const [idx, setIdx] = useState(() => Math.floor(Math.random() * examples.length))
  const [rate, setRate] = useState(0.85)
  const [typed, setTyped] = useState('')
  const [checked, setChecked] = useState(false)
  const [revealed, setRevealed] = useState(false)
  const [score, setScore] = useState({ ok: 0, total: 0 })

  const ex = examples[idx]

  const nextSentence = () => {
    setIdx(Math.floor(Math.random() * examples.length))
    setTyped('')
    setChecked(false)
    setRevealed(false)
  }

  const check = () => {
    if (checked || !typed.trim()) return
    setChecked(true)
    const diff = diffWords(ex.de, typed)
    const allOk = diff.every((d) => d.ok)
    setScore((s) => ({ ok: s.ok + (allOk ? 1 : 0), total: s.total + 1 }))
    touchActivity(allOk ? 5 : 2)
  }

  if (!ttsAvailable()) {
    return (
      <>
        <h1 className="display">Hören</h1>
        <p style={{ marginTop: 14 }}>Este navegador não tem SpeechSynthesis — o treino de escuta precisa dele.</p>
      </>
    )
  }

  return (
    <>
      <p className="kicker">Hören & Sprechen · voz alta é mandamento</p>
      <h1 className="display" style={{ marginBottom: 14 }}>Escuta</h1>

      <div className="card" style={{ marginBottom: 22 }}>
        <VoicePicker />
        <p className="quiz-hint" style={{ marginTop: 8 }}>
          Dica: no Microsoft Edge as vozes "Natural" (neurais) do Windows aparecem aqui — são muito
          melhores que as locais. A escolha vale para o site inteiro e fica salva.
        </p>
      </div>

      <div className="tabs">
        <button className={`tab ${mode === 'diktat' ? 'active' : ''}`} onClick={() => setMode('diktat')}>
          Diktat — ouço e escrevo
        </button>
        <button className={`tab ${mode === 'shadowing' ? 'active' : ''}`} onClick={() => setMode('shadowing')}>
          Shadowing — ouço e repito
        </button>
      </div>

      <div className="trainer-stage">
        {mode === 'diktat' ? (
          <>
            <p className="trainer-prompt">Ouça a frase e escreva o que ouviu:</p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', alignItems: 'center' }}>
              <button className="btn btn-gelb" onClick={() => speak(ex.de, rate)}>► Ouvir</button>
              <button className="btn btn-sm" onClick={() => speak(ex.de, rate * 0.7)}>lento</button>
            </div>
            <div className="rate-row">
              velocidade
              <input
                type="range"
                min={0.5}
                max={1.1}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
              {rate.toFixed(2)}×
            </div>
            <input
              className="dictation-input"
              value={typed}
              onChange={(e) => setTyped(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && check()}
              placeholder="digite o que ouviu…"
              disabled={checked}
            />
            {!checked ? (
              <div className="quiz-actions" style={{ justifyContent: 'center' }}>
                <button className="btn btn-blau" onClick={check}>Corrigir</button>
                <button className="btn btn-sm" onClick={nextSentence}>Pular</button>
              </div>
            ) : (
              <>
                <div className="dictation-compare">
                  {diffWords(ex.de, typed).map((d, i) => (
                    <span key={i} className={d.ok ? 'diff-ok' : 'diff-bad'}>{d.word} </span>
                  ))}
                </div>
                <p style={{ marginTop: 8, color: 'var(--grau)', fontSize: 14 }}>{ex.pt}</p>
                <div className="quiz-actions" style={{ justifyContent: 'center' }}>
                  <button className="btn btn-ink" onClick={nextSentence}>Próxima frase →</button>
                </div>
              </>
            )}
            <div className="trainer-score">
              <span>perfeitas: <b>{score.ok}</b></span>
              <span>tentativas: <b>{score.total}</b></span>
            </div>
          </>
        ) : (
          <>
            <p className="trainer-prompt">Ouça, depois repita EM VOZ ALTA imitando o ritmo:</p>
            {revealed ? (
              <>
                <div className="trainer-word" style={{ fontSize: 'clamp(22px, 4vw, 36px)', textTransform: 'none' }}>
                  {ex.de}
                </div>
                <p style={{ color: 'var(--grau)', marginBottom: 18 }}>{ex.pt}</p>
              </>
            ) : (
              <div className="trainer-word" style={{ color: 'var(--grau)' }}>? ? ?</div>
            )}
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-gelb" onClick={() => speak(ex.de, rate)}>► Ouvir</button>
              <button className="btn btn-sm" onClick={() => speak(ex.de, rate * 0.7)}>lento</button>
              {!revealed && <button className="btn" onClick={() => setRevealed(true)}>Mostrar texto</button>}
              <button
                className="btn btn-ink"
                onClick={() => {
                  touchActivity(3)
                  nextSentence()
                }}
              >
                Repeti em voz alta ✓ → próxima
              </button>
            </div>
            <div className="rate-row">
              velocidade
              <input
                type="range"
                min={0.5}
                max={1.1}
                step={0.05}
                value={rate}
                onChange={(e) => setRate(Number(e.target.value))}
              />
              {rate.toFixed(2)}×
            </div>
          </>
        )}
      </div>

      <div className="home-section-title">
        <h2 className="display">Como usar</h2>
        <span className="rule" />
      </div>
      <div className="grid grid-2">
        <div className="card">
          <div className="card-head">
            <AudioButton text="Ich lerne Deutsch." />
            <div className="card-title">Diktat</div>
          </div>
          <p className="card-sub">
            Treina ouvido + ortografia. Errar palavra por palavra mostra exatamente ONDE seu ouvido falha
            (artigos e finais de palavra são os vilões clássicos).
          </p>
        </div>
        <div className="card">
          <div className="card-head">
            <AudioButton text="Sprich mir nach!" />
            <div className="card-title">Shadowing</div>
          </div>
          <p className="card-sub">
            Repita SEM ler primeiro (modo ???), imitando ritmo e melodia. É o treino de pronúncia mais
            eficiente que existe sem professor na sala.
          </p>
        </div>
      </div>
    </>
  )
}
