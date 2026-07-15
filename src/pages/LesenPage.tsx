import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { READINGS } from '../content/lesen'
import { findLevel } from '../content'
import { loadLesen, recordLesen } from '../lib/storage'
import { recordHit, recordMiss } from '../lib/fehler'
import { AudioButton, Shape } from '../components/ui'
import Quiz from '../components/Quiz'
import { speakSequence, stopSpeaking } from '../lib/tts'

const KIND_LABEL: Record<string, string> = {
  geschichte: 'História',
  brief: 'Carta / E-mail',
  dialog: 'Diálogo',
  anzeige: 'Anúncios',
  maerchen: 'Conto (Märchen)',
  sachtext: 'Texto informativo',
}

function ReadingView({ id }: { id: string }) {
  const reading = READINGS.find((r) => r.id === id)
  const [showPt, setShowPt] = useState<Record<number, boolean>>({})
  const [allPt, setAllPt] = useState(false)
  const [finished, setFinished] = useState<number | null>(null)

  useEffect(() => {
    setShowPt({})
    setAllPt(false)
    setFinished(null)
    return () => stopSpeaking()
  }, [id])

  if (!reading) {
    return (
      <>
        <h1 className="display">Text nicht gefunden</h1>
        <p style={{ marginTop: 12 }}><Link to="/lesen" className="btn">← Textos</Link></p>
      </>
    )
  }

  const level = findLevel(reading.level)!

  return (
    <>
      <div className="lesson-header">
        <Shape shape="half" color={level.color} size={64} />
        <div style={{ flex: 1 }}>
          <p className="kicker">
            {level.title} · {KIND_LABEL[reading.kind]} · ~{reading.minutes} min · {reading.source}
          </p>
          <h1 className="display">{reading.title}</h1>
          <p style={{ marginTop: 6 }}>{reading.intro}</p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
        <button className="btn btn-gelb" onClick={() => speakSequence(reading.paragraphs.map((p) => p.de))}>
          ► Ouvir texto inteiro
        </button>
        <button className="btn" onClick={() => setAllPt(!allPt)}>
          {allPt ? 'Esconder traduções' : 'Mostrar traduções'}
        </button>
      </div>

      <div className="section" style={{ marginBottom: 22 }}>
        <div className="section-title">📖 Text — clique num parágrafo para ver a tradução</div>
        {reading.paragraphs.map((p, i) => {
          const visible = allPt || showPt[i]
          return (
            <div
              key={i}
              className="lesen-para"
              onClick={() => setShowPt((s) => ({ ...s, [i]: !s[i] }))}
            >
              <div className="lesen-de-row">
                <AudioButton text={p.de} />
                <p className="lesen-de">{p.de}</p>
              </div>
              {visible && <p className="lesen-pt">{p.pt}</p>}
            </div>
          )
        })}
      </div>

      <div className="section">
        <div className="section-title">🔑 Glossar</div>
        <div className="glossar-wrap">
          {reading.glossar.map((g, i) => (
            <span key={i} className="glossar-chip" title={g.pt}>
              <strong>{g.de}</strong> — {g.pt}
            </span>
          ))}
        </div>
      </div>

      <Quiz
        items={reading.questions}
        onItemResult={(item, ok) => (ok ? recordHit(item) : recordMiss(item, reading.title))}
        onFinish={(score) => {
          recordLesen(reading.id, score)
          setFinished(score)
        }}
      />

      {finished !== null && (
        <div className="quiz-actions" style={{ marginTop: 20, justifyContent: 'center' }}>
          <Link to="/lesen" className="btn btn-rot">← Mais textos</Link>
        </div>
      )}
    </>
  )
}

export default function LesenPage() {
  const { textId } = useParams()
  const lesenMap = useMemo(loadLesen, [textId])

  if (textId) return <ReadingView id={textId} />

  const byLevel = (lv: string) => READINGS.filter((r) => r.level === lv)
  const readCount = Object.values(lesenMap).filter((l) => l.done).length

  return (
    <>
      <p className="kicker">Lesen · leitura guiada por nível</p>
      <h1 className="display">Textos</h1>
      <p style={{ margin: '10px 0 24px', maxWidth: 580 }}>
        {READINGS.length} textos — histórias, diálogos, cartas, anúncios e contos dos Grimm adaptados.
        Clique no parágrafo para a tradução; termine com as perguntas de compreensão. {readCount} lidos.
      </p>

      {(['a11', 'a12'] as const).map((lv) => {
        const level = findLevel(lv)!
        const texts = byLevel(lv)
        return (
          <section key={lv}>
            <div className={`level-band band-${level.color}`}>
              <span className="display">{level.title}</span>
              <div>
                <strong>Lesen — {texts.length} textos</strong>
                <div className="lv-sub">{lv === 'a11' ? 'presente simples, frases curtas' : 'com Perfekt, Dativ e modais'}</div>
              </div>
            </div>
            <div className="grid grid-2">
              {texts.map((r) => {
                const st = lesenMap[r.id]
                return (
                  <Link key={r.id} to={`/lesen/${r.id}`} className="card">
                    <div className="card-head">
                      <Shape shape="half" color={level.color} size={30} />
                      <div>
                        <div className="card-title">{r.title}</div>
                        <div className="card-sub">{KIND_LABEL[r.kind]} · ~{r.minutes} min · {r.source}</div>
                      </div>
                    </div>
                    <div className="card-meta">
                      <span>{r.paragraphs.length} parágrafos · {r.questions.length} perguntas</span>
                      {st?.done && <span className="done-check">✓ lido {Math.round(st.best * 100)}%</span>}
                    </div>
                  </Link>
                )
              })}
            </div>
          </section>
        )
      })}
    </>
  )
}
