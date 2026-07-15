// ── Schema de conteúdo do Deutsch Studio ─────────────────────────────
// Pensado para evoluir: novos níveis (A2.1…), novos tipos de seção e de
// quiz entram aqui sem tocar nas páginas. O conteúdo é 100% dado.

export type LevelId = 'a11' | 'a12'

export type BauhausShape = 'circle' | 'square' | 'triangle' | 'half' | 'cross'

export interface Level {
  id: LevelId
  title: string // "A1.1"
  name: string // "Fundamente"
  subtitle: string
  color: 'rot' | 'blau' | 'gelb'
  modules: Module[]
}

export interface Module {
  id: string // "a12-01"
  level: LevelId
  num: string // "01"
  title: string // "Modalverben"
  subtitle: string // PT-BR
  shape: BauhausShape
  minutes: number // estimativa de estudo
  sections: Section[]
  quiz: QuizItem[]
  vocabTags?: string[] // conecta ao baralho SRS
}

export type Section =
  | { kind: 'text'; title: string; body: string }
  | { kind: 'table'; title: string; head: string[]; rows: string[][]; note?: string }
  | { kind: 'examples'; title: string; items: Example[] }
  | { kind: 'tip'; title: string; body: string }
  | { kind: 'fehler'; title: string; pairs: { falsch: string; richtig: string; why: string }[] }
  | { kind: 'dialog'; title: string; lines: DialogLine[] }

export interface DialogLine {
  who: string
  de: string
  pt: string
}

export interface Example {
  de: string
  pt: string
}

export type QuizItem =
  | { kind: 'choice'; prompt: string; options: string[]; answer: number; hint?: string }
  | { kind: 'gap'; before: string; after: string; answer: string[]; hint?: string }
  | { kind: 'order'; words: string[]; answer: string; hint?: string }

export interface VocabCard {
  id: string
  de: string
  pt: string
  artikel?: 'der' | 'die' | 'das'
  plural?: string
  example?: string
  tags: string[]
  level: LevelId
}

export type VerbType = 'regular' | 'irregular' | 'modal' | 'separable'

export interface Verb {
  inf: string
  pt: string
  type: VerbType
  // präsens: [ich, du, er/sie/es, wir, ihr, sie/Sie]
  praesens: [string, string, string, string, string, string]
  partizip?: string
  aux?: 'haben' | 'sein'
  note?: string
}

export const PERSONS = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'] as const

// ── Leitura (Lesen) ──────────────────────────────────────────────────
export interface Reading {
  id: string // slug estável, ex 'lesen-meine-familie'
  level: LevelId
  title: string
  kind: 'geschichte' | 'brief' | 'dialog' | 'anzeige' | 'maerchen' | 'sachtext'
  source: string // 'Deutsch Studio' ou autoria (ex 'Brüder Grimm — adaptação A1')
  minutes: number
  intro: string // 1-2 frases PT sobre o texto
  paragraphs: { de: string; pt: string }[]
  glossar: { de: string; pt: string }[]
  questions: QuizItem[]
}
