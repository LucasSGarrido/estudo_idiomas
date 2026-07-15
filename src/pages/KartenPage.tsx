import { useMemo, useState } from 'react'
import { allVocab, VOCAB_TAGS } from '../content'
import type { VocabCard } from '../content/types'
import { isDue, newCardState, nextIntervalLabel, review, type Grade } from '../lib/srs'
import { loadSrs, saveSrs, touchActivity } from '../lib/storage'
import { addCustomCard, isCustom, loadCustomCards, removeCustomCard } from '../lib/customCards'
import { AudioButton, Shape } from '../components/ui'
import { speak } from '../lib/tts'

const SESSION_SIZE = 15

function pickSession(tag: string | null): VocabCard[] {
  const srs = loadSrs()
  const pool = allVocab().filter((c) =>
    tag === null ? true : tag === '__meine' ? isCustom(c.id) : c.tags.includes(tag),
  )
  const due = pool.filter((c) => srs[c.id] && isDue(srs[c.id]))
  const fresh = pool.filter((c) => !srs[c.id])
  return [...due, ...fresh].slice(0, SESSION_SIZE)
}

// ── Sessão SRS ───────────────────────────────────────────────────────
function Session({ cards, onEnd }: { cards: VocabCard[]; onEnd: () => void }) {
  const [queue, setQueue] = useState<VocabCard[]>(cards)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  if (queue.length === 0) {
    return (
      <div className="trainer-stage">
        <div className="score-display display" style={{ fontSize: 56, color: 'var(--blau)' }}>Fertig!</div>
        <p style={{ marginTop: 12, fontWeight: 700 }}>{reviewed} cartas revisadas. O SM-2 já agendou os próximos reviews.</p>
        <div className="quiz-actions" style={{ justifyContent: 'center' }}>
          <button className="btn btn-ink" onClick={onEnd}>← Voltar aos baralhos</button>
        </div>
      </div>
    )
  }

  const card = queue[0]
  const srs = loadSrs()
  const state = srs[card.id] ?? newCardState()

  const grade = (g: Grade) => {
    const map = loadSrs()
    map[card.id] = review(map[card.id] ?? newCardState(), g)
    saveSrs(map)
    touchActivity(g === 'again' ? 1 : 3)
    setReviewed((r) => r + 1)
    setFlipped(false)
    setQueue((q) => (g === 'again' ? [...q.slice(1), card] : q.slice(1)))
  }

  const front = card.artikel ? `${card.artikel} ${card.de}` : card.de

  return (
    <>
      <p className="kicker" style={{ textAlign: 'center', marginBottom: 14 }}>
        restam {queue.length} · revisadas {reviewed}
      </p>
      <div className="flash-stage">
        <div
          className={`flash-card ${flipped ? 'flipped' : ''}`}
          onClick={() => {
            if (!flipped) speak(front)
            setFlipped(!flipped)
          }}
        >
          <div className="flash-face">
            {card.artikel && <span className={`flash-artikel artikel-${card.artikel}`}>{card.artikel}</span>}
            <span className="flash-word">{card.de}</span>
            {card.plural && <span className="flash-example">Plural: die {card.plural}</span>}
            <AudioButton text={front} />
            <span className="flash-example">clique para virar</span>
          </div>
          <div className="flash-face back">
            <span className="flash-word">{card.pt}</span>
            {card.example && (
              <>
                <span className="flash-example">{card.example}</span>
                <AudioButton text={card.example} />
              </>
            )}
          </div>
        </div>
      </div>
      {flipped ? (
        <div className="grade-row">
          <button className="btn btn-rot grade-btn" onClick={() => grade('again')}>
            Errei <small>{nextIntervalLabel(state, 'again')}</small>
          </button>
          <button className="btn grade-btn" onClick={() => grade('hard')}>
            Difícil <small>{nextIntervalLabel(state, 'hard')}</small>
          </button>
          <button className="btn btn-blau grade-btn" onClick={() => grade('good')}>
            Bom <small>{nextIntervalLabel(state, 'good')}</small>
          </button>
          <button className="btn btn-gelb grade-btn" onClick={() => grade('easy')}>
            Fácil <small>{nextIntervalLabel(state, 'easy')}</small>
          </button>
        </div>
      ) : (
        <p style={{ textAlign: 'center', marginTop: 20, color: 'var(--grau)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>
          lembre-se do significado → vire a carta → seja honesto na nota
        </p>
      )}
    </>
  )
}

// ── Wörterbuch (dicionário buscável) ─────────────────────────────────
function Woerterbuch() {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState<string>('')
  const cards = useMemo(allVocab, [])

  const filtered = cards.filter((card) => {
    if (tag && !card.tags.includes(tag)) return false
    if (!query.trim()) return true
    const q = query.toLowerCase()
    return card.de.toLowerCase().includes(q) || card.pt.toLowerCase().includes(q)
  })

  return (
    <>
      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 18 }}>
        <input
          className="gap-input"
          style={{ flex: 1, minWidth: 220 }}
          placeholder="buscar em alemão ou português…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select className="voice-select" value={tag} onChange={(e) => setTag(e.target.value)}>
          <option value="">todos os temas</option>
          {VOCAB_TAGS.map((t) => (
            <option key={t.tag} value={t.tag}>{t.label}</option>
          ))}
        </select>
      </div>
      <p className="kicker" style={{ marginBottom: 12 }}>{filtered.length} palavras</p>
      <div className="woerter-list">
        {filtered.slice(0, 120).map((card) => (
          <div key={card.id} className="woerter-row">
            <AudioButton text={card.artikel ? `${card.artikel} ${card.de}` : card.de} />
            <div style={{ flex: 1 }}>
              <span className="de-word">
                {card.artikel && <span className={`artikel-${card.artikel}`}>{card.artikel} </span>}
                {card.de}
                {card.plural && <span style={{ color: 'var(--grau)', fontWeight: 400 }}> · Pl. {card.plural}</span>}
              </span>
              <div style={{ fontSize: 13, color: 'var(--grau)' }}>{card.pt}{card.example ? ` — ${card.example}` : ''}</div>
            </div>
            {isCustom(card.id) && <span className="due-badge" style={{ background: 'var(--blau)' }}>minha</span>}
          </div>
        ))}
        {filtered.length > 120 && <p className="quiz-hint" style={{ padding: 12 }}>… e mais {filtered.length - 120}. Refine a busca.</p>}
      </div>
    </>
  )
}

// ── Meine Karten (criador) ───────────────────────────────────────────
function MeineKarten({ onChange }: { onChange: () => void }) {
  const [mine, setMine] = useState(loadCustomCards)
  const [de, setDe] = useState('')
  const [pt, setPt] = useState('')
  const [artikel, setArtikel] = useState('')
  const [plural, setPlural] = useState('')
  const [example, setExample] = useState('')
  const [tag, setTag] = useState<string>('frases')
  const [level, setLevel] = useState<'a11' | 'a12'>('a12')

  const create = () => {
    if (!de.trim() || !pt.trim()) return
    addCustomCard({
      de: de.trim(),
      pt: pt.trim(),
      artikel: (artikel || undefined) as VocabCard['artikel'],
      plural: plural.trim() || undefined,
      example: example.trim() || undefined,
      tags: [tag],
      level,
    })
    setMine(loadCustomCards())
    setDe(''); setPt(''); setArtikel(''); setPlural(''); setExample('')
    onChange()
  }

  return (
    <>
      <div className="card" style={{ marginBottom: 20 }}>
        <h2 className="display" style={{ fontSize: 20, marginBottom: 14 }}>+ Nova carta</h2>
        <div className="karten-form">
          <input className="gap-input" placeholder="alemão * (ex: die Reise)" value={de} onChange={(e) => setDe(e.target.value)} />
          <input className="gap-input" placeholder="português * (ex: viagem)" value={pt} onChange={(e) => setPt(e.target.value)} />
          <select className="voice-select" value={artikel} onChange={(e) => setArtikel(e.target.value)}>
            <option value="">sem artigo</option>
            <option value="der">der</option>
            <option value="die">die</option>
            <option value="das">das</option>
          </select>
          <input className="gap-input" placeholder="plural (opcional)" value={plural} onChange={(e) => setPlural(e.target.value)} />
          <input className="gap-input" style={{ gridColumn: '1 / -1' }} placeholder="frase de exemplo em alemão (opcional — entra no ditado!)" value={example} onChange={(e) => setExample(e.target.value)} />
          <select className="voice-select" value={tag} onChange={(e) => setTag(e.target.value)}>
            {VOCAB_TAGS.map((t) => (
              <option key={t.tag} value={t.tag}>{t.label}</option>
            ))}
          </select>
          <select className="voice-select" value={level} onChange={(e) => setLevel(e.target.value as 'a11' | 'a12')}>
            <option value="a11">A1.1</option>
            <option value="a12">A1.2</option>
          </select>
        </div>
        <div style={{ marginTop: 14 }}>
          <button className="btn btn-blau" onClick={create} disabled={!de.trim() || !pt.trim()}>Criar carta</button>
        </div>
        <p className="quiz-hint" style={{ marginTop: 10 }}>
          A carta entra no SRS, no Wörterbuch, no Artikel-Blitz (se tiver artigo) e — com frase de exemplo — no ditado do Hören.
        </p>
      </div>

      <p className="kicker" style={{ marginBottom: 10 }}>{mine.length} cartas minhas</p>
      {mine.map((card) => (
        <div key={card.id} className="deck-row">
          <AudioButton text={card.artikel ? `${card.artikel} ${card.de}` : card.de} />
          <div style={{ flex: 1 }}>
            <span className="de-word">{card.artikel ? `${card.artikel} ` : ''}{card.de}</span>
            <span style={{ color: 'var(--grau)', fontSize: 13 }}> — {card.pt}</span>
          </div>
          <span className="deck-count">{VOCAB_TAGS.find((t) => t.tag === card.tags[0])?.label ?? card.tags[0]} · {card.level === 'a11' ? 'A1.1' : 'A1.2'}</span>
          <button
            className="btn btn-sm btn-rot"
            onClick={() => {
              removeCustomCard(card.id)
              setMine(loadCustomCards())
              onChange()
            }}
          >
            ✕
          </button>
        </div>
      ))}
      {mine.length === 0 && <p style={{ color: 'var(--grau)' }}>Nenhuma ainda — crie a primeira acima.</p>}
    </>
  )
}

// ── Página ───────────────────────────────────────────────────────────
export default function KartenPage() {
  const [session, setSession] = useState<VocabCard[] | null>(null)
  const [tab, setTab] = useState<'lernen' | 'woerter' | 'meine'>('lernen')
  const [tick, setTick] = useState(0)

  const stats = useMemo(() => {
    const srs = loadSrs()
    const cards = allVocab()
    const base: { tag: string; label: string; total: number; due: number; fresh: number }[] = VOCAB_TAGS.map(({ tag, label }) => {
      const pool = cards.filter((c) => c.tags.includes(tag))
      return {
        tag,
        label,
        total: pool.length,
        due: pool.filter((c) => srs[c.id] && isDue(srs[c.id])).length,
        fresh: pool.filter((c) => !srs[c.id]).length,
      }
    }).filter((s) => s.total > 0)
    const mine = cards.filter((c) => isCustom(c.id))
    if (mine.length > 0) {
      base.unshift({
        tag: '__meine',
        label: '★ Meine Karten',
        total: mine.length,
        due: mine.filter((c) => srs[c.id] && isDue(srs[c.id])).length,
        fresh: mine.filter((c) => !srs[c.id]).length,
      })
    }
    return base
  }, [session, tick, tab])

  if (session) {
    return (
      <>
        <p className="kicker">Karten · SRS</p>
        <h1 className="display" style={{ marginBottom: 24 }}>Sessão</h1>
        <Session cards={session} onEnd={() => { setSession(null); setTick((t) => t + 1) }} />
      </>
    )
  }

  const srs = loadSrs()
  const cards = allVocab()
  const totalDue = cards.filter((c) => isDue(srs[c.id])).length

  return (
    <>
      <p className="kicker">Karten · repetição espaçada (SM-2) · {cards.length} cartas</p>
      <h1 className="display" style={{ marginBottom: 18 }}>Flashcards</h1>

      <div className="tabs">
        <button className={`tab ${tab === 'lernen' ? 'active' : ''}`} onClick={() => setTab('lernen')}>Lernen · SRS</button>
        <button className={`tab ${tab === 'woerter' ? 'active' : ''}`} onClick={() => setTab('woerter')}>Wörterbuch</button>
        <button className={`tab ${tab === 'meine' ? 'active' : ''}`} onClick={() => setTab('meine')}>+ Meine Karten</button>
      </div>

      {tab === 'woerter' && <Woerterbuch />}
      {tab === 'meine' && <MeineKarten onChange={() => setTick((t) => t + 1)} />}
      {tab === 'lernen' && (
        <>
          <div className="review-banner">
            <Shape shape="square" color="rot" size={46} />
            <div style={{ flex: 1 }}>
              <h2 className="display">Tudo que está devido</h2>
              <p style={{ fontWeight: 600 }}>{totalDue} cartas (todos os temas)</p>
            </div>
            <button className="btn btn-ink" onClick={() => setSession(pickSession(null))} disabled={totalDue === 0}>
              Iniciar sessão
            </button>
          </div>

          <div className="home-section-title">
            <h2 className="display">Baralhos por tema</h2>
            <span className="rule" />
          </div>
          {stats.map((s) => (
            <div key={s.tag} className="deck-row">
              <Shape shape="circle" color={s.due > 0 ? 'rot' : 'blau'} size={16} />
              <strong>{s.label}</strong>
              {s.due > 0 && <span className="due-badge">{s.due} devidas</span>}
              <span className="deck-count">{s.fresh > 0 && `${s.fresh} novas · `}{s.total} cartas</span>
              <button className="btn btn-sm" onClick={() => setSession(pickSession(s.tag))}>Treinar</button>
            </div>
          ))}
        </>
      )}
    </>
  )
}
