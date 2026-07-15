import type { Level, Module, VocabCard } from './types'
import { A11_KERN } from './a11-kern'
import { A11_AUFBAU } from './a11-aufbau'
import { A12_GRAMMATIK } from './a12-grammatik'
import { A12_THEMEN } from './a12-themen'
import { VOCAB } from './vocab'
import { loadCustomCards } from '../lib/customCards'

// Registro de níveis — para adicionar A2.1: criar os módulos, registrar
// aqui. Nada mais muda no app.
export const LEVELS: Level[] = [
  {
    id: 'a11',
    title: 'A1.1',
    name: 'Fundamente',
    subtitle: 'Os fundamentos — 14 aulões do zero absoluto ao dia a dia',
    color: 'blau',
    modules: [...A11_KERN, ...A11_AUFBAU],
  },
  {
    id: 'a12',
    title: 'A1.2',
    name: 'Aufbau',
    subtitle: 'O nível atual — 19 aulões construídos das aulas reais (DEUTSCHUNTERRICHT 11 e 13)',
    color: 'rot',
    modules: [...A12_GRAMMATIK, ...A12_THEMEN],
  },
]

export const ALL_MODULES: Module[] = LEVELS.flatMap((l) => l.modules)

export function findModule(id: string): Module | undefined {
  return ALL_MODULES.find((m) => m.id === id)
}

export function findLevel(id: string): Level | undefined {
  return LEVELS.find((l) => l.id === id)
}

// Vocabulário completo = baralho oficial + cards criados pelo usuário.
// Função (não constante) para refletir criações/remoções na hora.
export function allVocab(): VocabCard[] {
  return [...VOCAB, ...loadCustomCards()]
}

export { VOCAB, VOCAB_TAGS } from './vocab'
export { VERBS, VERB_TYPES } from './verbs'
