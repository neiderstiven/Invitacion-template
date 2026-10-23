import type { FormEvent } from 'react'
import { useMemo, useState } from 'react'
import { seedWishes, wishSuggestions, type Wish } from '../data/invitation'
import { LightTitle } from './SectionCard'

const STORAGE_KEY = 'cdc-wishes-v1'

function loadWishes(): Wish[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return seedWishes
    const parsed = JSON.parse(raw) as Wish[]
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : seedWishes
  } catch {
    return seedWishes
  }
}

function formatDate(date: Date) {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const time = date.toLocaleTimeString('es-AR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  return `${day}/${month}/${year}, ${time}`
}

export function Guestbook() {
  const [wishes, setWishes] = useState<Wish[]>(() => loadWishes())
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  const suggestionIndex = useMemo(() => Math.floor(Math.random() * wishSuggestions.length), [])

  const persist = (next: Wish[]) => {
    setWishes(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      /* storage unavailable — keep in-memory state */
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName || !trimmedMessage) {
      setError('Completa tu nombre y tus deseos para enviarlos.')
      return
    }

    const wish: Wish = {
      id: `w-${Date.now()}`,
      name: trimmedName,
      message: trimmedMessage,
      date: formatDate(new Date()),
    }

    persist([wish, ...wishes])
    setName('')
    setMessage('')
    setError('')
    setSent(true)
    window.setTimeout(() => setSent(false), 4000)
  }

  const useSuggestion = () => {
    setMessage(wishSuggestions[suggestionIndex])
    setError('')
  }

  return (
    <section className="relative isolate z-10 mx-auto my-4 w-[88%] max-w-[420px] md:max-w-[560px]">
      <div className="relative overflow-hidden rounded-[10px] bg-white px-4 py-8 shadow-[4px_4px_2px_rgba(0,0,0,0.25)]">
        <section
          className="relative z-10"
          style={{ color: '#593D2C', fontFamily: '"Times New Roman", serif' }}
        >
          <LightTitle>Libro de Visitas</LightTitle>

          <form onSubmit={handleSubmit} className="mx-auto mt-6 w-full max-w-[248px] md:max-w-[380px]">
            <div className="mb-4">
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Ingresa tu nombre*"
                maxLength={500}
                required
                aria-label="Tu nombre"
                className="w-full rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink/30"
                style={{ borderColor: '#593D2C', color: '#593D2C' }}
              />
            </div>
            <textarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Escribe tus deseos*"
              maxLength={10000}
              required
              rows={4}
              aria-label="Tus deseos"
              className="h-[70px] w-full resize-none rounded-lg border bg-transparent px-4 py-3 text-sm outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink/30 md:h-[110px]"
              style={{ borderColor: '#593D2C', color: '#593D2C' }}
            />

            <div className="mt-2 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={useSuggestion}
                title="Generar mensaje con IA"
                aria-label="Generar un mensaje sugerido"
                className="rounded-lg p-2 text-base leading-none transition-transform hover:scale-110"
                style={{ backgroundColor: '#593D2C1A', color: '#593D2C' }}
              >
                🪄
              </button>

              <button
                type="submit"
                className="rounded-full px-6 py-2 text-sm font-semibold text-cream transition-transform hover:scale-105"
                style={{ backgroundColor: '#593D2C', fontFamily: '"Times New Roman", serif' }}
              >
                ENVIAR DESEOS
              </button>
            </div>

            <div aria-live="polite" className="mt-2 min-h-[18px] text-xs">
              {error && <p className="text-red-800">{error}</p>}
              {!error && sent && <p style={{ color: '#593D2C' }}>¡Gracias! Tu deseo ya está publicado.</p>}
            </div>
          </form>

          <div className="soft-scroll mx-auto mt-8 max-h-[500px] w-full space-y-3 overflow-y-auto pr-2 md:max-w-[600px]">
            {wishes.map((wish) => (
              <div
                key={wish.id}
                className="rounded-[8px] border p-4 text-sm"
                style={{ borderColor: '#593D2C33', backgroundColor: 'rgba(89, 61, 44, 0.03)' }}
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="font-semibold" style={{ color: '#593D2C' }}>
                    {wish.name}
                  </span>
                  <span className="shrink-0 text-xs opacity-70">{wish.date}</span>
                </div>
                <p className="mt-2 leading-relaxed">{wish.message}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
