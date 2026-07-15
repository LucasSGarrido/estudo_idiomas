// Fehler-Kiste — caixa de erros (clone do "practice mistakes" do Duolingo).
// Todo item de quiz errado cai aqui; acertar de novo tira da caixa.
import type { QuizItem } from '../content/types'

const KEY = 'ds-fehler-v1'

export interface FehlerEntry {
  key: string
  item: QuizItem
  origin: string // título do módulo/texto de onde veio
  ts: number
  misses: number
}

export function itemKey(item: QuizItem): string {
  if (item.kind === 'choice') return `c:${item.prompt}`
  if (item.kind === 'gap') return `g:${item.before}|${item.after}`
  return `o:${item.words.join(' ')}`
}

export function loadFehler(): FehlerEntry[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as FehlerEntry[]) : []
  } catch {
    return []
  }
}

function save(entries: FehlerEntry[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(entries.slice(0, 200)))
  } catch {
    /* quota */
  }
}

export function recordMiss(item: QuizItem, origin: string) {
  const entries = loadFehler()
  const key = itemKey(item)
  const found = entries.find((e) => e.key === key)
  if (found) {
    found.misses += 1
    found.ts = Date.now()
  } else {
    entries.unshift({ key, item, origin, ts: Date.now(), misses: 1 })
  }
  save(entries)
}

export function recordHit(item: QuizItem) {
  const key = itemKey(item)
  save(loadFehler().filter((e) => e.key !== key))
}

export function fehlerCount(): number {
  return loadFehler().length
}
