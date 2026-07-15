import { Link } from 'react-router-dom'
import { useState } from 'react'
import { ALL_MODULES, allVocab, LEVELS } from '../content'
import { isDue } from '../lib/srs'
import { currentStreak, last14Days, loadActivity, loadGoal, loadProgress, loadSrs, saveGoal, todayXp } from '../lib/storage'
import { computeAchievements } from '../lib/achievements'
import { fehlerCount } from '../lib/fehler'
import { ProgressBar, Shape } from '../components/ui'

export default function HomePage() {
  const srs = loadSrs()
  const progress = loadProgress()
  const activity = loadActivity()
  const [goal, setGoal] = useState(loadGoal)

  const cards = allVocab()
  const due = cards.filter((c) => isDue(srs[c.id])).length
  const newCards = cards.filter((c) => !srs[c.id]).length
  const streak = currentStreak(activity)
  const xp = todayXp(activity)
  const heat = last14Days(activity)
  const maxXp = Math.max(10, ...heat.map((h) => h.xp))

  const doneModules = ALL_MODULES.filter((m) => progress[m.id]?.quizDone).length
  // módulo sugerido: primeiro não concluído (A1.2 primeiro — é o nível atual)
  const suggested =
    [...LEVELS].reverse().flatMap((l) => l.modules).find((m) => !progress[m.id]?.quizDone) ?? ALL_MODULES[0]

  return (
    <>
      <section className="hero">
        <div className="hero-shapes">
          <span className="hs shape shape-circle bg-rot" style={{ width: 130, height: 130, right: 70, top: -30 }} />
          <span className="hs shape bg-blau" style={{ width: 90, height: 90, right: 210, bottom: -20 }} />
          <span className="hs shape shape-triangle bg-gelb" style={{ width: 120, height: 110, right: 20, bottom: 10 }} />
        </div>
        <div className="hero-content">
          <p className="kicker">Estúdio de alemão · A1.1 → A1.2</p>
          <h1 className="display">
            Deutsch,<br />jeden Tag<span className="cursor-blink">_</span>
          </h1>
          <p className="sub">
            Lições das suas aulas reais, flashcards com repetição espaçada, treinadores e escuta —
            tudo a serviço dos 5 mandamentos: constância, voz alta, SRS, escrever, errar sem medo.
          </p>
        </div>
      </section>

      <div className="stat-band">
        <div className="stat-cell">
          <div className="stat-value">{streak}</div>
          <div className="stat-label">dias de ofensiva</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value" style={{ color: due > 0 ? 'var(--rot)' : undefined }}>{due}</div>
          <div className="stat-label">cartas devidas</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value">{doneModules}<span style={{ fontSize: 22 }}>/{ALL_MODULES.length}</span></div>
          <div className="stat-label">módulos concluídos</div>
        </div>
        <div className="stat-cell">
          <div className="stat-value" style={{ color: xp >= goal ? 'var(--blau)' : undefined }}>
            {xp}<span style={{ fontSize: 22 }}>/{goal}</span>
          </div>
          <div className="stat-label" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            meta do dia {xp >= goal && '✓'}
            <button className="goal-btn" onClick={() => { saveGoal(goal - 10); setGoal(loadGoal()) }}>−</button>
            <button className="goal-btn" onClick={() => { saveGoal(goal + 10); setGoal(loadGoal()) }}>+</button>
          </div>
          <div style={{ marginTop: 8 }}>
            <ProgressBar value={xp / goal} color={xp >= goal ? 'blau' : 'gelb'} />
          </div>
        </div>
      </div>

      <section className="review-banner">
        <Shape shape="circle" color="rot" size={52} />
        <div style={{ flex: 1, minWidth: 220 }}>
          <h2 className="display">Revisão de hoje</h2>
          <p style={{ fontWeight: 600 }}>
            {due > 0 ? `${due} cartas esperando` : 'Nenhuma carta devida'}
            {newCards > 0 && ` · ${newCards} novas no baralho`} · módulo sugerido:{' '}
            <strong>{suggested.title}</strong>
          </p>
        </div>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Link to="/karten" className="btn btn-ink">Revisar cartas</Link>
          <Link to={`/kurs/${suggested.id}`} className="btn">Estudar {suggested.title}</Link>
        </div>
      </section>

      <div className="home-section-title">
        <h2 className="display">Atividade — 14 dias</h2>
        <span className="rule" />
      </div>
      <div className="card" style={{ animationDelay: '0s' }}>
        <div className="heat-row">
          {heat.map((h) => (
            <div key={h.key} className="heat-cell" title={`${h.key}: ${h.xp} XP`}>
              <div className="heat-bar-track">
                <div
                  className="heat-bar"
                  style={{
                    height: `${(h.xp / maxXp) * 100}%`,
                    background: h.xp === 0 ? 'var(--paper-dim)' : undefined,
                  }}
                />
              </div>
              <span className="heat-label">{h.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="home-section-title">
        <h2 className="display">Níveis</h2>
        <span className="rule" />
      </div>
      <div className="grid grid-2">
        {LEVELS.map((level) => {
          const done = level.modules.filter((m) => progress[m.id]?.quizDone).length
          return (
            <Link key={level.id} to="/kurs" className="card">
              <div className="card-head">
                <Shape shape={level.id === 'a11' ? 'square' : 'circle'} color={level.color} size={44} />
                <div>
                  <div className="card-title">{level.title} — {level.name}</div>
                  <div className="card-sub">{level.subtitle}</div>
                </div>
              </div>
              <div className="card-meta">
                <ProgressBar value={done / level.modules.length} color={level.color} />
                <span>{done}/{level.modules.length}</span>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="home-section-title">
        <h2 className="display">Ateliês</h2>
        <span className="rule" />
      </div>
      <div className="grid grid-3">
        <Link to="/karten" className="card">
          <div className="card-head">
            <Shape shape="square" color="rot" size={36} />
            <div className="card-title">Karten</div>
          </div>
          <p className="card-sub">SRS com {cards.length} cartas + Wörterbuch + criador de cartas próprias.</p>
        </Link>
        <Link to="/lesen" className="card">
          <div className="card-head">
            <Shape shape="half" color="blau" size={36} />
            <div className="card-title">Lesen</div>
          </div>
          <p className="card-sub">Textos por nível com tradução, áudio, glossário e compreensão — inclui Grimm adaptado.</p>
        </Link>
        <Link to="/trainer" className="card">
          <div className="card-head">
            <Shape shape="triangle" color="blau" size={36} />
            <div className="card-title">Trainer</div>
          </div>
          <p className="card-sub">Conjugação, artigos, números, relógio alemão e preposições de direção.</p>
        </Link>
        <Link to="/hoeren" className="card">
          <div className="card-head">
            <Shape shape="half" color="gelb" size={36} />
            <div className="card-title">Hören</div>
          </div>
          <p className="card-sub">Ditado e shadowing com voz alemã — escolha a melhor voz do sistema.</p>
        </Link>
        <Link to="/ueben" className="card">
          <div className="card-head">
            <Shape shape="cross" color="rot" size={36} />
            <div className="card-title">Üben</div>
          </div>
          <p className="card-sub">
            Fehler-Kiste {fehlerCount() > 0 ? `(${fehlerCount()} erros esperando revanche)` : '(vazia 🎉)'} e Blitz-Quiz do curso inteiro.
          </p>
        </Link>
      </div>

      <div className="home-section-title">
        <h2 className="display">Conquistas</h2>
        <span className="rule" />
      </div>
      <div className="badge-grid">
        {computeAchievements(ALL_MODULES.length).map((a) => (
          <div key={a.id} className={`badge ${a.unlocked ? 'unlocked' : ''}`} title={a.desc}>
            <span className="badge-icon">{a.icon}</span>
            <span className="badge-title">{a.title}</span>
            <span className="badge-desc">{a.desc}</span>
          </div>
        ))}
      </div>
    </>
  )
}
