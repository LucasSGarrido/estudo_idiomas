// Cards criados pelo usuário — entram no SRS, ditado e treinadores.
import type { VocabCard } from '../content/types'

const KEY = 'ds-custom-cards-v1'

export function loadCustomCards(): VocabCard[] {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? (JSON.parse(raw) as VocabCard[]) : []
  } catch {
    return []
  }
}

function save(cards: VocabCard[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(cards))
  } catch {
    /* quota */
  }
}

export function addCustomCard(card: Omit<VocabCard, 'id'>): VocabCard {
  const cards = loadCustomCards()
  const id = `custom-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`
  const full: VocabCard = { ...card, id }
  cards.push(full)
  save(cards)
  return full
}

export function removeCustomCard(id: string) {
  save(loadCustomCards().filter((c) => c.id !== id))
  // limpa o agendamento SRS do card removido
  try {
    const raw = localStorage.getItem('ds-srs-v1')
    if (raw) {
      const map = JSON.parse(raw) as Record<string, unknown>
      delete map[id]
      localStorage.setItem('ds-srs-v1', JSON.stringify(map))
    }
  } catch {
    /* ignore */
  }
}

export function isCustom(id: string): boolean {
  return id.startsWith('custom-')
}
