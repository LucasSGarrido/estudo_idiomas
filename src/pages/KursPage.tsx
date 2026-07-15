import { Link } from 'react-router-dom'
import { LEVELS } from '../content'
import { loadProgress } from '../lib/storage'
import { ProgressBar, Shape } from '../components/ui'

export default function KursPage() {
  const progress = loadProgress()

  return (
    <>
      <p className="kicker">Der Kurs</p>
      <h1 className="display">Lições</h1>

      {LEVELS.map((level) => {
        const done = level.modules.filter((m) => progress[m.id]?.quizDone).length
        return (
          <section key={level.id}>
            <div className={`level-band band-${level.color}`}>
              <span className="display">{level.title}</span>
              <div>
                <strong>{level.name}</strong>
                <div className="lv-sub">{level.subtitle}</div>
              </div>
              <div className="lv-progress">
                {done}/{level.modules.length} concluídos
              </div>
            </div>
            <div className="grid grid-2">
              {level.modules.map((m) => {
                const p = progress[m.id]
                return (
                  <Link key={m.id} to={`/kurs/${m.id}`} className="card">
                    <div className="card-head">
                      <span className="card-num">{m.num}</span>
                      <Shape shape={m.shape} color={level.color} size={34} />
                      <div>
                        <div className="card-title">{m.title}</div>
                        <div className="card-sub">{m.subtitle}</div>
                      </div>
                    </div>
                    <div className="card-meta">
                      <span>~{m.minutes} min</span>
                      <ProgressBar value={p?.quizBest ?? 0} color={level.color} />
                      {p?.quizDone && <span className="done-check">✓ {Math.round((p.quizBest ?? 0) * 100)}%</span>}
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
