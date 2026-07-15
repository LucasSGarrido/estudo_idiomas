import { useEffect, useState } from 'react'
import type { BauhausShape } from '../content/types'
import { listGermanVoices, setPreferredVoice, speak } from '../lib/tts'

// ── Forma geométrica Bauhaus ─────────────────────────────────────────
const SHAPE_CLASS: Record<BauhausShape, string> = {
  circle: 'shape-circle',
  square: '',
  triangle: 'shape-triangle',
  half: 'shape-half',
  cross: 'shape-cross',
}

export function Shape({
  shape,
  color,
  size = 40,
}: {
  shape: BauhausShape
  color: 'rot' | 'blau' | 'gelb' | 'ink'
  size?: number
}) {
  return (
    <span
      className={`shape ${SHAPE_CLASS[shape]} bg-${color}`}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}

// ── Botão de áudio (TTS de-DE) ───────────────────────────────────────
export function AudioButton({ text, rate }: { text: string; rate?: number }) {
  return (
    <button
      className="audio-btn"
      title={`Ouvir: ${text}`}
      onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        speak(text, rate)
      }}
    >
      ►
    </button>
  )
}

// ── Seletor de voz alemã ─────────────────────────────────────────────
export function VoicePicker() {
  const [voices, setVoices] = useState(() => listGermanVoices())

  // vozes carregam async no primeiro load — tenta de novo até aparecerem
  useEffect(() => {
    if (voices.length > 0) return
    const t = setInterval(() => {
      const v = listGermanVoices()
      if (v.length > 0) {
        setVoices(v)
        clearInterval(t)
      }
    }, 400)
    return () => clearInterval(t)
  }, [voices.length])

  if (voices.length === 0) {
    return <p className="quiz-hint">carregando vozes do sistema…</p>
  }

  const active = voices.find((v) => v.active)?.name ?? voices[0].name
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
      <label className="kicker" htmlFor="voice-sel">Voz</label>
      <select
        id="voice-sel"
        className="voice-select"
        value={active}
        onChange={(e) => {
          setPreferredVoice(e.target.value)
          setVoices(listGermanVoices())
          speak('Hallo! Ich bin deine neue Stimme.')
        }}
      >
        {voices.map((v) => (
          <option key={v.name} value={v.name}>{v.label}</option>
        ))}
      </select>
      <button className="btn btn-sm btn-gelb" onClick={() => speak('Guten Tag! Wie geht es dir?')}>
        ► testar
      </button>
    </div>
  )
}

// ── Barra de progresso ───────────────────────────────────────────────
export function ProgressBar({
  value,
  color = 'blau',
}: {
  value: number // 0..1
  color?: 'rot' | 'blau' | 'gelb'
}) {
  return (
    <div className="pbar">
      <div
        className={`pbar-fill fill-${color}`}
        style={{ width: `${Math.round(Math.min(1, Math.max(0, value)) * 100)}%` }}
      />
    </div>
  )
}
