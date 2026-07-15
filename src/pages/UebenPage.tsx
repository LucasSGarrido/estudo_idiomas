import { useMemo, useState } from 'react'
import { ALL_MODULES } from '../content'
import type { QuizItem } from '../content/types'
import { loadFehler, recordHit, recordMiss } from '../lib/fehler'
import { Shape } from '../components/ui'
import Quiz from '../components/Quiz'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

type Mode = 'menu' | 'fehler' | 'blitz'

export default function UebenPage() {
  const [mode, setMode] = useState<Mode>('menu')
  const [seed, setSeed] = useState(0) // força novo sorteio a cada sessão

  const fehler = useMemo(loadFehler, [mode, seed])

  const blitzItems = useMemo<QuizItem[]>(() => {
    const all = ALL_MODULES.flatMap((m) => m.quiz)
    return shuffle(all).slice(0, 10)
  }, [seed])

  const fehlerItems = useMemo<QuizItem[]>(
    () => shuffle(fehler.map((f) => f.item)).slice(0, 15),
    [fehler],
  )

  if (mode === 'fehler') {
    return (
      <>
        <p className="kicker">Üben · Fehler-Kiste</p>
        <h1 className="display" style={{ marginBottom: 22 }}>Vencer os erros</h1>
        <Quiz
          items={fehlerItems}
          onItemResult={(item, ok) => (ok ? recordHit(item) : recordMiss(item, 'Fehler-Kiste'))}
          onFinish={() => {}}
        />
        <div className="quiz-actions" style={{ marginTop: 20, justifyContent: 'center' }}>
          <button className="btn" onClick={() => { setMode('menu'); setSeed((s) => s + 1) }}>← Voltar</button>
        </div>
      </>
    )
  }

  if (mode === 'blitz') {
    return (
      <>
        <p className="kicker">Üben · Blitz-Quiz</p>
        <h1 className="display" style={{ marginBottom: 22 }}>10 aleatórias do curso inteiro</h1>
        <Quiz
          items={blitzItems}
          onItemResult={(item, ok) => (ok ? recordHit(item) : recordMiss(item, 'Blitz-Quiz'))}
          onFinish={() => {}}
        />
        <div className="quiz-actions" style={{ marginTop: 20, justifyContent: 'center' }}>
          <button className="btn" onClick={() => { setMode('menu'); setSeed((s) => s + 1) }}>← Voltar</button>
          <button className="btn btn-gelb" onClick={() => setSeed((s) => s + 1)}>Sortear outras 10</button>
        </div>
      </>
    )
  }

  const totalItems = ALL_MODULES.reduce((s, m) => s + m.quiz.length, 0)

  return (
    <>
      <p className="kicker">Üben · atividades de treino</p>
      <h1 className="display">Übungsraum</h1>
      <p style={{ margin: '10px 0 24px', maxWidth: 560 }}>
        A sala de exercícios: repita exatamente o que você errou (a Fehler-Kiste guarda cada erro
        até você acertá-lo de novo) ou enfrente um quiz-relâmpago com questões de todo o curso.
      </p>

      <div className="grid grid-2">
        <div className="card">
          <div className="card-head">
            <Shape shape="cross" color="rot" size={40} />
            <div>
              <div className="card-title">Fehler-Kiste</div>
              <div className="card-sub">Seus erros esperando revanche — acertou, sai da caixa</div>
            </div>
          </div>
          <div className="card-meta">
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: fehler.length ? 'var(--rot)' : 'var(--grau)' }}>
              {fehler.length} {fehler.length === 1 ? 'erro guardado' : 'erros guardados'}
            </span>
          </div>
          {fehler.length > 0 && (
            <div style={{ marginTop: 10, fontSize: 13, color: 'var(--grau)' }}>
              origens: {[...new Set(fehler.slice(0, 6).map((f) => f.origin))].join(' · ')}
            </div>
          )}
          <div style={{ marginTop: 16 }}>
            <button className="btn btn-rot" disabled={fehler.length === 0} onClick={() => setMode('fehler')}>
              {fehler.length === 0 ? 'Caixa vazia 🎉' : 'Revanche →'}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <Shape shape="triangle" color="gelb" size={40} />
            <div>
              <div className="card-title">Blitz-Quiz</div>
              <div className="card-sub">10 questões aleatórias de todos os {ALL_MODULES.length} módulos</div>
            </div>
          </div>
          <div className="card-meta">
            <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{totalItems} questões no banco</span>
          </div>
          <div style={{ marginTop: 16 }}>
            <button className="btn btn-gelb" onClick={() => { setSeed((s) => s + 1); setMode('blitz') }}>
              Sortear e começar →
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
