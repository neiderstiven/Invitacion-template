import { useEffect, useState } from 'react'
import QRCode from 'qrcode'
import { Ceremony } from './components/Ceremony'
import { Cover } from './components/Cover'
import { DressCode, Program } from './components/Schedule'
import { Gallery } from './components/Gallery'
import { GiftBox } from './components/GiftBox'
import { Guestbook } from './components/Guestbook'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Location } from './components/Location'
import { Petals } from './components/Petals'
import { Reception } from './components/Reception'
import { wedding } from './data/invitation'

const OPEN_STORAGE_KEY = 'cdc-invitation-open'

function readInitialOpenState() {
  if (typeof window === 'undefined') return false
  const params = new URLSearchParams(window.location.search)
  if (params.get('open') === '1') return true
  return window.sessionStorage.getItem(OPEN_STORAGE_KEY) === '1'
}

export default function App() {
  const [opened, setOpened] = useState(readInitialOpenState)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [qrDataUrl, setQrDataUrl] = useState('')

  useEffect(() => {
    if (opened) {
      window.sessionStorage.setItem(OPEN_STORAGE_KEY, '1')
      return
    }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [opened])

  useEffect(() => {
    QRCode.toDataURL(wedding.gift.paypalUrl, {
      errorCorrectionLevel: 'M',
      margin: 1,
      width: 480,
      color: { dark: '#593D2C', light: '#ffffff' },
    })
      .then(setQrDataUrl)
      .catch(() => setQrDataUrl(''))
  }, [])

  const handleOpen = () => {
    setOpened(true)
    const url = new URL(window.location.href)
    url.searchParams.set('open', '1')
    window.history.replaceState({}, '', url.toString())
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }

  if (!opened) {
    return <Cover onOpen={handleOpen} />
  }

  return (
    <div className="min-h-screen w-full bg-white">
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

            <div className="fade-up relative z-10">
              <Hero />
              <Ceremony />
              <Gallery onOpenLightbox={setLightboxIndex} />
              <Reception />

              <div className="relative z-10 mt-6 flex w-full flex-col items-center justify-center">
                <a
                  href="#libro-de-visitas"
                  className="inline-flex items-center justify-center rounded-full border px-7 py-1.5 text-[13px] uppercase tracking-wide text-cream transition-transform hover:scale-[1.03]"
                  style={{
                    backgroundColor: '#593D2C',
                    borderColor: '#593D2C',
                    fontFamily: '"Times New Roman", serif',
                  }}
                >
                  CONFIRMAR ASISTENCIA
                </a>
              </div>

              <Location />
              <DressCode />
              <Program />

              <Guestbook />
              <GiftBox qrDataUrl={qrDataUrl} />

              <footer className="relative z-10 flex flex-col items-center px-6 pb-6 text-center">
                <span
                  className="mx-auto flex flex-col items-center gap-1 whitespace-pre-line text-[11px] md:max-w-[560px] md:text-[13px]"
                  style={{ color: '#593D2C', fontFamily: '"Times New Roman", serif' }}
                >
                  {wedding.gift.note}
                </span>
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
