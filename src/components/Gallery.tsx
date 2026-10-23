import { useEffect, useState } from 'react'
import { THEME, photos } from '../data/invitation'

type GalleryProps = {
  onOpenLightbox: (index: number) => void
}

export function Gallery({ onOpenLightbox }: GalleryProps) {
  const [active, setActive] = useState(0)
  const total = photos.length

  useEffect(() => {
    const timer = window.setInterval(() => setActive((prev) => (prev + 1) % total), 6000)
    return () => window.clearInterval(timer)
  }, [total])

  const offsetFor = (index: number) => {
    let offset = index - active
    if (offset > total / 2) offset -= total
    if (offset < -total / 2) offset += total
    return offset
  }

  return (
    <div className="relative isolate z-10 overflow-x-clip">
      <img
        src={`${THEME}/goldenline3-decoration.webp`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[13.9%] top-[42px] z-20 block w-[11.8%] max-w-[49px] object-contain"
      />
      <img
        src={`${THEME}/goldenline3-decoration.webp`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[13.9%] top-[42px] z-20 block w-[11.8%] max-w-[49px] -scale-x-100 object-contain"
      />

      <div className="relative z-10 flex w-full flex-col items-center px-6 pb-10 pt-10">
        <h2
          className="relative z-10 text-center font-title text-[20px] font-bold uppercase text-ink"
          style={{ letterSpacing: '0.03em' }}
        >
          Galería de Fotos
        </h2>

        <div className="relative z-10 mt-5 w-full max-w-[380px] md:max-w-[600px]">
          <div className="relative h-[340px] touch-pan-y md:h-[520px]">
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={() => setActive((prev) => (prev - 1 + total) % total)}
              className="absolute left-0 top-1/2 z-[200] hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#593D2C]/10 text-ink transition-colors hover:bg-[#593D2C]/20 md:flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Foto siguiente"
              onClick={() => setActive((prev) => (prev + 1) % total)}
              className="absolute right-0 top-1/2 z-[200] hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-[#593D2C]/10 text-ink transition-colors hover:bg-[#593D2C]/20 md:flex"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            <div
              className="relative flex h-full w-full items-center justify-center"
              style={{ perspective: '1000px' }}
            >
              {photos.map((photo, index) => {
                const offset = offsetFor(index)
                const depth = Math.min(Math.abs(offset), 2)
                const translateX = offset * 60
                const translateZ = -depth * 150
                const rotateY = offset * 45
                const scale = 1 - depth * 0.15

                return (
                  <button
                    key={photo.src}
                    type="button"
                    aria-label={`Ver foto ${index + 1}`}
                    onClick={() => onOpenLightbox(index)}
                    className="absolute h-[92%] cursor-pointer overflow-hidden rounded-2xl shadow-xl transition-all ease-in-out"
                    style={{
                      aspectRatio: '0.6666',
                      transitionDuration: '1100ms',
                      transform: `translateX(${translateX}%) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                      opacity: depth === 0 ? 1 : depth === 1 ? 0.75 : 0.5,
                      zIndex: 100 - depth,
                      visibility: depth > 2 ? 'hidden' : 'visible',
                      pointerEvents: depth === 0 ? 'auto' : 'none',
                      boxShadow:
                        depth === 0
                          ? '0 20px 45px -12px rgba(0,0,0,0.45), 0 0 0 2px rgba(255,255,255,0.35)'
                          : undefined,
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <div className="mt-3 flex justify-center gap-1.5">
            {photos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                aria-label={`Ir a la foto ${index + 1}`}
                onClick={() => setActive(index)}
                className={`h-2 rounded-full bg-ink transition-all duration-300 ${
                  index === active ? 'w-6 opacity-70' : 'w-2 opacity-25 hover:opacity-40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
