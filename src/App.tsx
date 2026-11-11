import { useEffect, useRef, useState } from 'react'
import { Ceremony } from './components/Ceremony'
import { Cover } from './components/Cover'
import { Gallery } from './components/Gallery'
import { GiftBox } from './components/GiftBox'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Petals } from './components/Petals'
import { Reception } from './components/Reception'
import { musicTrack } from './data/invitation'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(musicTrack)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.55
    audio.setAttribute('playsinline', 'true')
    audioRef.current = audio

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  useEffect(() => {
    if (opened) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [opened])

  const handleOpen = () => {
    setOpened(true)
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })

    const audio = audioRef.current
    if (!audio) return
    setMusicPlaying(true)
    void audio.play().catch(() => setMusicPlaying(false))
  }

  const handleToggleMusic = () => {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      setMusicPlaying(true)
      void audio.play().catch(() => setMusicPlaying(false))
    } else {
      audio.pause()
      setMusicPlaying(false)
    }
  }

  if (!opened) {
    return <Cover onOpen={handleOpen} />
  }

  return (
    <>
      <div className="fade-up min-h-screen w-full bg-white">
        <main className="min-h-screen w-full">
          <div className="flex w-full justify-center overflow-x-clip bg-white">
            <div className="relative isolate w-full max-w-[480px] overflow-hidden bg-[#f7f5ee] text-ink md:mx-auto md:max-w-[900px] md:border md:border-[#593D2C22]">
              <div
                aria-hidden="true"
                className="paper-grain pointer-events-none absolute inset-0 z-0"
                style={{ opacity: 0.5 }}
              />
              <Petals className="z-[1] opacity-40" />

              <div className="relative z-10">
                <Hero />
                <Ceremony />
                <Gallery onOpenLightbox={setLightboxIndex} />
                <Reception />
                <GiftBox />

                <div className="relative z-20 flex items-center justify-center pb-5">
                  <p className="text-xs text-ink opacity-50">♡ Asociación Sur de Bogotá</p>
                </div>
              </div>
            </div>
          </div>
        </main>

        {lightboxIndex !== null && (
          <Lightbox
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onIndexChange={setLightboxIndex}
          />
        )}
      </div>

      <button
        type="button"
        onClick={handleToggleMusic}
        aria-label={musicPlaying ? 'Pausar música' : 'Reproducir música'}
        aria-pressed={musicPlaying}
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-cream shadow-[0_4px_16px_rgba(89,61,44,0.45)] transition-transform duration-300 hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:bottom-8 md:right-8"
        style={{ backgroundColor: '#593D2C' }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-[22px] w-[22px]"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.7}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M9 18V5l12-2v13" />
          <circle cx="6" cy="18" r="3" />
          <circle cx="18" cy="16" r="3" />
        </svg>
      </button>
    </>
  )
}
