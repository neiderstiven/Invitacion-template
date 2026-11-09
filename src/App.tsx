import { useEffect, useState } from 'react'
import { Ceremony } from './components/Ceremony'
import { Cover } from './components/Cover'
import { Gallery } from './components/Gallery'
import { GiftBox } from './components/GiftBox'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Petals } from './components/Petals'
import { Reception } from './components/Reception'
import { invitation } from './data/invitation'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
  }

  if (!opened) {
    return <Cover onOpen={handleOpen} />
  }

  return (
    <div className="fade-up min-h-screen w-full bg-white">
      <main className="min-h-screen w-full">
        <div className="flex w-full justify-center overflow-x-clip bg-white">
          <div
            className="relative isolate w-full max-w-[480px] overflow-hidden bg-[#f7f5ee] text-ink md:mx-auto md:max-w-[900px] md:border md:border-[#593D2C22]"
          >
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

              <footer className="relative z-10 flex flex-col items-center gap-3 px-6 pb-8 pt-4 text-center">
                <p
                  className="mx-auto max-w-[340px] text-[12px] leading-relaxed md:max-w-[520px] md:text-[14px]"
                  style={{ color: '#593D2C', fontFamily: '"Times New Roman", serif' }}
                >
                  {invitation.event.closing}
                </p>

                <div
                  aria-hidden="true"
                  className="mt-1 h-px w-14"
                  style={{ backgroundColor: 'rgba(89, 61, 44, 0.25)' }}
                />

                <p
                  className="font-title text-[13px] font-semibold tracking-wide md:text-[14px]"
                  style={{ color: '#593D2C' }}
                >
                  {invitation.event.verse.reference}
                </p>

                <p
                  className="mx-auto max-w-[340px] text-[13px] italic leading-relaxed md:max-w-[520px] md:text-[15px]"
                  style={{ color: 'rgba(89, 61, 44, 0.8)', fontFamily: 'Baskerville, "Times New Roman", serif' }}
                >
                  {invitation.event.verse.text}
                </p>
              </footer>

              <div className="relative z-20 flex items-center justify-center pb-3">
                <a
                  href="https://chungdoi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-ink opacity-50 transition-opacity hover:opacity-70"
                >
                  ♡ chungdoi.com
                </a>
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
  )
}
