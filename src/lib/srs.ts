// SM-2 simplificado — o suficiente para agendar bem, sem burocracia.
export type Grade = 'again' | 'hard' | 'good' | 'easy'

export interface CardState {
  ease: number // fator de facilidade (2.5 padrão SM-2)
  interval: number // dias
  due: number // timestamp ms
  reps: number
  lapses: number
}

export function newCardState(): CardState {
  return { ease: 2.5, interval: 0, due: 0, reps: 0, lapses: 0 }
}

const DAY = 24 * 60 * 60 * 1000

export function review(state: CardState, grade: Grade, now = Date.now()): CardState {
  const s = { ...state }
  if (grade === 'again') {
    s.lapses += 1
    s.reps = 0
    s.interval = 0
    s.ease = Math.max(1.3, s.ease - 0.2)
    s.due = now + 10 * 60 * 1000 // volta em ~10min (na prática: mesma sessão)
    return s
  }
  s.reps += 1
  if (grade === 'hard') s.ease = Math.max(1.3, s.ease - 0.15)
  if (grade === 'easy') s.ease += 0.15

  if (s.reps === 1) s.interval = 1
  else if (s.reps === 2) s.interval = grade === 'easy' ? 4 : 3
  else {
    const mult = grade === 'hard' ? 1.2 : grade === 'easy' ? s.ease * 1.3 : s.ease
    s.interval = Math.max(s.interval + 1, Math.round(s.interval * mult))
  }
  s.interval = Math.min(s.interval, 365)
  s.due = now + s.interval * DAY
  return s
}

export function isDue(state: CardState | undefined, now = Date.now()): boolean {
  if (!state) return true // carta nova = devida
  return state.due <= now
}

export function nextIntervalLabel(state: CardState, grade: Grade): string {
  const preview = review(state, grade)
  if (grade === 'again') return '10min'
  if (preview.interval === 1) return '1 dia'
  return `${preview.interval} dias`
}
