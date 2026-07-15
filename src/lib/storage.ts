// Estado do aluno — tudo em localStorage, sem backend.
import type { CardState } from './srs'

const KEYS = {
  srs: 'ds-srs-v1',
  progress: 'ds-progress-v1',
  activity: 'ds-activity-v1',
  goal: 'ds-goal-v1',
  lesen: 'ds-lesen-v1',
} as const

function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value))
  } catch {
    /* quota — ignora */
  }
}

// ── SRS ──────────────────────────────────────────────────────────────
export type SrsMap = Record<string, CardState>

export function loadSrs(): SrsMap {
  return load<SrsMap>(KEYS.srs, {})
}
export function saveSrs(map: SrsMap) {
  save(KEYS.srs, map)
}

// ── Progresso por módulo ─────────────────────────────────────────────
export interface ModuleProgress {
  read: boolean
  quizBest: number // 0..1
  quizDone: boolean
}
export type ProgressMap = Record<string, ModuleProgress>

export function loadProgress(): ProgressMap {
  return load<ProgressMap>(KEYS.progress, {})
}
export function saveProgress(map: ProgressMap) {
  save(KEYS.progress, map)
}
export function markRead(moduleId: string) {
  const p = loadProgress()
  p[moduleId] = { read: true, quizBest: p[moduleId]?.quizBest ?? 0, quizDone: p[moduleId]?.quizDone ?? false }
  saveProgress(p)
  touchActivity(0)
}
export function recordQuiz(moduleId: string, score: number) {
  const p = loadProgress()
  const prev = p[moduleId]
  p[moduleId] = {
    read: prev?.read ?? true,
    quizBest: Math.max(prev?.quizBest ?? 0, score),
    quizDone: true,
  }
  saveProgress(p)
  touchActivity(10)
}

// ── Atividade / streak / XP ──────────────────────────────────────────
export interface Activity {
  days: Record<string, number> // 'YYYY-MM-DD' → xp do dia
}

function todayKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

export function loadActivity(): Activity {
  return load<Activity>(KEYS.activity, { days: {} })
}

export function touchActivity(xp: number) {
  const a = loadActivity()
  const k = todayKey()
  a.days[k] = (a.days[k] ?? 0) + xp
  save(KEYS.activity, a)
}

export function currentStreak(a = loadActivity()): number {
  let streak = 0
  const d = new Date()
  // hoje conta se teve atividade; senão começa de ontem
  if (!(todayKey(d) in a.days)) d.setDate(d.getDate() - 1)
  while (todayKey(d) in a.days) {
    streak += 1
    d.setDate(d.getDate() - 1)
  }
  return streak
}

export function todayXp(a = loadActivity()): number {
  return a.days[todayKey()] ?? 0
}

// ── Meta diária ──────────────────────────────────────────────────────
export function loadGoal(): number {
  return load<number>(KEYS.goal, 30)
}
export function saveGoal(xp: number) {
  save(KEYS.goal, Math.max(10, Math.min(200, xp)))
}

// ── Textos lidos (Lesen) ─────────────────────────────────────────────
export type LesenMap = Record<string, { done: boolean; best: number }>
export function loadLesen(): LesenMap {
  return load<LesenMap>(KEYS.lesen, {})
}
export function recordLesen(id: string, score: number) {
  const m = loadLesen()
  m[id] = { done: true, best: Math.max(m[id]?.best ?? 0, score) }
  save(KEYS.lesen, m)
  touchActivity(8)
}

export function last14Days(a = loadActivity()): { key: string; xp: number; label: string }[] {
  const out: { key: string; xp: number; label: string }[] = []
  const d = new Date()
  d.setDate(d.getDate() - 13)
  for (let i = 0; i < 14; i++) {
    const k = todayKey(d)
    out.push({ key: k, xp: a.days[k] ?? 0, label: String(d.getDate()) })
    d.setDate(d.getDate() + 1)
  }
  return out
}
