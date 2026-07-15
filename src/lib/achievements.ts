// Conquistas — derivadas do estado, sem storage próprio (sempre honestas).
import { currentStreak, loadLesen, loadProgress, loadSrs } from './storage'
import { loadCustomCards } from './customCards'
import { fehlerCount } from './fehler'

export interface Achievement {
  id: string
  icon: string
  title: string
  desc: string
  unlocked: boolean
}

export function computeAchievements(totalModules: number): Achievement[] {
  const srs = loadSrs()
  const progress = loadProgress()
  const lesen = loadLesen()
  const streak = currentStreak()
  const totalReviews = Object.values(srs).reduce((s, c) => s + c.reps + c.lapses, 0)
  const modulesDone = Object.values(progress).filter((p) => p.quizDone).length
  const perfectModules = Object.values(progress).filter((p) => p.quizBest >= 1).length
  const textsRead = Object.values(lesen).filter((l) => l.done).length
  const customCards = loadCustomCards().length

  return [
    { id: 'erste-schritte', icon: '●', title: 'Erste Schritte', desc: 'Conclua o quiz de 1 módulo', unlocked: modulesDone >= 1 },
    { id: 'fuenf-module', icon: '■', title: 'Fleißig', desc: '5 módulos concluídos', unlocked: modulesDone >= 5 },
    { id: 'zehn-module', icon: '▲', title: 'Halbzeit', desc: '10 módulos concluídos', unlocked: modulesDone >= 10 },
    { id: 'alle-module', icon: '★', title: 'Kursmeister', desc: `Todos os ${totalModules} módulos concluídos`, unlocked: modulesDone >= totalModules },
    { id: 'perfekt-3', icon: '◆', title: 'Perfektionist', desc: '3 quizzes com 100%', unlocked: perfectModules >= 3 },
    { id: 'streak-3', icon: '◐', title: 'Dranbleiben', desc: 'Ofensiva de 3 dias', unlocked: streak >= 3 },
    { id: 'streak-7', icon: '◑', title: 'Eine Woche!', desc: 'Ofensiva de 7 dias', unlocked: streak >= 7 },
    { id: 'streak-30', icon: '✦', title: 'Eiserner Wille', desc: 'Ofensiva de 30 dias', unlocked: streak >= 30 },
    { id: 'reviews-50', icon: '▣', title: 'Kartenspieler', desc: '50 revisões de cartas', unlocked: totalReviews >= 50 },
    { id: 'reviews-300', icon: '▤', title: 'Gedächtnis aus Stahl', desc: '300 revisões de cartas', unlocked: totalReviews >= 300 },
    { id: 'lesen-3', icon: '¶', title: 'Leseratte', desc: '3 textos lidos', unlocked: textsRead >= 3 },
    { id: 'lesen-alle', icon: '§', title: 'Bibliothekar', desc: '10 textos lidos', unlocked: textsRead >= 10 },
    { id: 'custom-1', icon: '+', title: 'Kartenmacher', desc: 'Crie seu primeiro card', unlocked: customCards >= 1 },
    { id: 'custom-10', icon: '✚', title: 'Sammler', desc: '10 cards próprios', unlocked: customCards >= 10 },
    { id: 'fehler-null', icon: '✓', title: 'Saubere Weste', desc: 'Fehler-Kiste vazia (após ter erros)', unlocked: fehlerCount() === 0 && totalReviews > 0 && modulesDone > 0 },
  ]
}
