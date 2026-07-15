import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { ALL_MODULES, findLevel, findModule } from '../content'
import type { Section } from '../content/types'
import { markRead, recordQuiz } from '../lib/storage'
import { recordHit, recordMiss } from '../lib/fehler'
import { AudioButton, Shape } from '../components/ui'
import Quiz from '../components/Quiz'
import { speakSequence } from '../lib/tts'

function SectionView({ s }: { s: Section }) {
  if (s.kind === 'text') {
    return (
      <div className="section">
        <div className="section-title">{s.title}</div>
        <div className="section-body">{s.body}</div>
      </div>
    )
  }
  if (s.kind === 'tip') {
    return (
      <div className="section section-tip">
        <div className="section-title">💡 {s.title}</div>
        <div className="section-body">{s.body}</div>
      </div>
    )
  }
  if (s.kind === 'table') {
    return (
      <div className="section">
        <div className="section-title">{s.title}</div>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>{s.head.map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {s.rows.map((row, i) => (
                <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
        {s.note && <div className="tbl-note">{s.note}</div>}
      </div>
    )
  }
  if (s.kind === 'examples') {
    return (
      <div className="section">
        <div className="section-title">🔊 {s.title}</div>
        {s.items.map((ex, i) => (
          <div key={i} className="example-row">
            <AudioButton text={ex.de} />
            <div>
              <div className="example-de">{ex.de}</div>
              <div className="example-pt">{ex.pt}</div>
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (s.kind === 'dialog') {
    return (
      <div className="section section-dialog">
        <div className="section-title">
          💬 {s.title}
          <button
            className="btn btn-sm btn-gelb"
            style={{ marginLeft: 'auto' }}
            onClick={() => speakSequence(s.lines.map((l) => l.de))}
          >
            ► Ouvir diálogo
          </button>
        </div>
        {s.lines.map((l, i) => (
          <div key={i} className={`dialog-line ${i % 2 === 0 ? 'dl-a' : 'dl-b'}`}>
            <span className="dialog-who">{l.who}</span>
            <div className="dialog-bubble">
              <div className="example-de">{l.de}</div>
              <div className="example-pt">{l.pt}</div>
            </div>
            <AudioButton text={l.de} />
          </div>
        ))}
      </div>
    )
  }
  // fehler
  return (
    <div className="section section-fehler">
      <div className="section-title">⚠ {s.title}</div>
      {s.pairs.map((p, i) => (
        <div key={i} className="fehler-pair">
          <div><span className="falsch">{p.falsch}</span></div>
          <div><span className="richtig">✓ {p.richtig}</span></div>
          <div className="fehler-why">{p.why}</div>
        </div>
      ))}
    </div>
  )
}

export default function LektionPage() {
  const { moduleId } = useParams()
  const module = findModule(moduleId ?? '')
  const [finished, setFinished] = useState<number | null>(null)

  useEffect(() => {
    if (module) markRead(module.id)
    setFinished(null)
  }, [module])

  if (!module) {
    return (
      <>
        <h1 className="display">Lektion nicht gefunden</h1>
        <p style={{ marginTop: 12 }}><Link to="/kurs" className="btn">← Voltar ao curso</Link></p>
      </>
    )
  }

  const level = findLevel(module.level)!
  const idx = ALL_MODULES.findIndex((m) => m.id === module.id)
  const next = ALL_MODULES[idx + 1]

  return (
    <>
      <div className="lesson-header">
        <Shape shape={module.shape} color={level.color} size={72} />
        <div>
          <p className="kicker">{level.title} · Modul {module.num} · ~{module.minutes} min</p>
          <h1 className="display">{module.title}</h1>
          <p style={{ marginTop: 6 }}>{module.subtitle}</p>
        </div>
      </div>

      {module.sections.map((s, i) => (
        <SectionView key={i} s={s} />
      ))}

      <Quiz
        items={module.quiz}
        onItemResult={(item, ok) => (ok ? recordHit(item) : recordMiss(item, module.title))}
        onFinish={(score) => {
          recordQuiz(module.id, score)
          setFinished(score)
        }}
      />

      {finished !== null && (
        <div className="quiz-actions" style={{ marginTop: 20, justifyContent: 'center' }}>
          <Link to="/kurs" className="btn">← Curso</Link>
          {next && (
            <Link to={`/kurs/${next.id}`} className="btn btn-rot">
              Próximo: {next.title} →
            </Link>
          )}
        </div>
      )}
    </>
  )
}
