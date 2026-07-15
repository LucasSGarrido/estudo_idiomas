// Voz alemã via SpeechSynthesis — com ranking de qualidade e escolha
// persistente. Vozes "Natural/Online" (Edge neural) > Google > locais.
const VOICE_KEY = 'ds-voice-v1'

let voices: SpeechSynthesisVoice[] = []
let chosen: SpeechSynthesisVoice | null = null

function qualityScore(v: SpeechSynthesisVoice): number {
  const n = v.name.toLowerCase()
  let score = 0
  if (v.lang === 'de-DE') score += 40
  else if (v.lang.startsWith('de')) score += 20
  // vozes neurais do Edge/Windows 11 ("Microsoft Katja Online (Natural)")
  if (n.includes('natural') || n.includes('online')) score += 100
  if (n.includes('neural')) score += 100
  // Google Deutsch (Chrome) — melhor que as SAPI locais
  if (n.includes('google')) score += 60
  // vozes premium conhecidas
  if (n.includes('katja') || n.includes('conrad') || n.includes('amala') || n.includes('killian')) score += 10
  return score
}

function refreshVoices() {
  const all = window.speechSynthesis.getVoices()
  if (!all.length) return
  voices = all
    .filter((v) => v.lang.toLowerCase().startsWith('de'))
    .sort((a, b) => qualityScore(b) - qualityScore(a))
  const savedName = localStorage.getItem(VOICE_KEY)
  chosen = (savedName && voices.find((v) => v.name === savedName)) || voices[0] || null
}

export function ttsAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

export function listGermanVoices(): { name: string; label: string; active: boolean }[] {
  if (!voices.length) refreshVoices()
  return voices.map((v) => {
    const n = v.name.toLowerCase()
    const grade =
      n.includes('natural') || n.includes('online') || n.includes('neural')
        ? '★★★ neural'
        : n.includes('google')
          ? '★★ boa'
          : '★ local'
    return { name: v.name, label: `${v.name} — ${grade}`, active: chosen?.name === v.name }
  })
}

export function setPreferredVoice(name: string) {
  const v = voices.find((x) => x.name === name)
  if (!v) return
  chosen = v
  try {
    localStorage.setItem(VOICE_KEY, name)
  } catch {
    /* ignore */
  }
}

function makeUtterance(text: string, rate: number): SpeechSynthesisUtterance {
  const u = new SpeechSynthesisUtterance(text)
  u.lang = chosen?.lang ?? 'de-DE'
  if (chosen) u.voice = chosen
  u.rate = rate
  return u
}

export function speak(text: string, rate = 0.92) {
  if (!ttsAvailable()) return
  if (!chosen) refreshVoices()
  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(makeUtterance(text, rate))
}

// fala uma sequência (diálogos) com pausa natural entre falas
export function speakSequence(texts: string[], rate = 0.92) {
  if (!ttsAvailable()) return
  if (!chosen) refreshVoices()
  window.speechSynthesis.cancel()
  for (const t of texts) {
    window.speechSynthesis.speak(makeUtterance(t, rate))
  }
}

export function stopSpeaking() {
  if (ttsAvailable()) window.speechSynthesis.cancel()
}

if (ttsAvailable()) {
  refreshVoices()
  window.speechSynthesis.onvoiceschanged = refreshVoices
}
