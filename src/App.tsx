import { NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { currentStreak, loadActivity } from './lib/storage'
import HomePage from './pages/HomePage'
import KursPage from './pages/KursPage'
import LektionPage from './pages/LektionPage'
import KartenPage from './pages/KartenPage'
import TrainerPage from './pages/TrainerPage'
import HoerenPage from './pages/HoerenPage'
import LesenPage from './pages/LesenPage'
import UebenPage from './pages/UebenPage'

export default function App() {
  const location = useLocation()
  const [streak, setStreak] = useState(() => currentStreak())

  // recalcula o streak a cada navegação (barato e mantém o topo honesto)
  useEffect(() => {
    setStreak(currentStreak(loadActivity()))
    window.scrollTo(0, 0)
  }, [location])

  return (
    <div className="shell">
      <header className="topbar">
        <NavLink to="/" className="brand">
          <span className="brand-mark">
            <span className="m-circle" />
            <span className="m-square" />
            <span className="m-tri" />
          </span>
          <span className="brand-name">Deutsch Studio</span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/" end>Start</NavLink>
          <NavLink to="/kurs">Kurs</NavLink>
          <NavLink to="/lesen">Lesen</NavLink>
          <NavLink to="/karten">Karten</NavLink>
          <NavLink to="/trainer">Trainer</NavLink>
          <NavLink to="/hoeren">Hören</NavLink>
          <NavLink to="/ueben">Üben</NavLink>
        </nav>
        <div className="streak-chip" title="Dias seguidos de estudo">
          <span className="streak-dot" />
          {streak} {streak === 1 ? 'Tag' : 'Tage'}
        </div>
      </header>

      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/kurs" element={<KursPage />} />
          <Route path="/kurs/:moduleId" element={<LektionPage />} />
          <Route path="/lesen" element={<LesenPage />} />
          <Route path="/lesen/:textId" element={<LesenPage />} />
          <Route path="/karten" element={<KartenPage />} />
          <Route path="/trainer" element={<TrainerPage />} />
          <Route path="/hoeren" element={<HoerenPage />} />
          <Route path="/ueben" element={<UebenPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <span>DEUTSCH STUDIO — A1.1 → A1.2</span>
        <span>vault: Desktop\Alemão · aulas 11 & 13 ingeridas</span>
      </footer>
    </div>
  )
}
