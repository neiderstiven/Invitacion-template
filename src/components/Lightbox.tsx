import { useEffect, useState } from 'react'
import { photos } from '../data/invitation'

type LightboxProps = {
  index: number
  onClose: () => void
  onIndexChange: (index: number) => void
}

export function Lightbox({ index, onClose, onIndexChange }: LightboxProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onIndexChange((index + 1) % photos.length)
      if (event.key === 'ArrowLeft') onIndexChange((index - 1 + photos.length) % photos.length)
    }
    window.addEventListener('keydown', onKey)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = previousOverflow
    }
  }, [index, onClose, onIndexChange])

  if (!mounted) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Galería de fotos"
      className="fixed inset-0 z-[999] flex flex-col items-center bg-black/92 px-2 pb-4 pt-10 backdrop-blur-sm sm:px-4 sm:pb-6 sm:pt-12"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar galería"
        className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-white/20 sm:right-4 sm:top-4"
      >
        ✕
      </button>

      <div className="absolute left-2 top-2 z-10 rounded-full bg-black/40 px-3 py-1 text-sm text-white shadow-md sm:left-4 sm:top-4 sm:text-lg">
        {index + 1} / {photos.length}
      </div>

      <div className="relative flex min-h-0 w-full max-w-5xl flex-1 items-center justify-center px-8 sm:px-12">
        <button
          type="button"
          onClick={() => onIndexChange((index - 1 + photos.length) % photos.length)}
          aria-label="Foto anterior"
          className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-white/20 sm:left-2 sm:text-4xl"
        >
          ‹
        </button>
        <img
          src={photos[index].src}
          alt={photos[index].alt}
          className="max-h-full max-w-full select-none rounded-xl object-contain shadow-2xl sm:rounded-2xl"
        />
        <button
          type="button"
          onClick={() => onIndexChange((index + 1) % photos.length)}
          aria-label="Foto siguiente"
          className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center rounded-full text-2xl text-white transition-colors hover:bg-white/20 sm:right-2 sm:text-4xl"
        >
          ›
        </button>
      </div>

      <div className="mt-3 flex max-w-[90vw] flex-shrink-0 gap-2 overflow-x-auto rounded-lg bg-black/30 px-2 py-2 backdrop-blur-sm sm:mt-4 sm:max-w-[80vw] sm:gap-3 sm:px-4 sm:py-3">
        {photos.map((photo, photoIndex) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => onIndexChange(photoIndex)}
            aria-label={`Ver foto ${photoIndex + 1}`}
            aria-current={photoIndex === index}
            className={`h-12 w-12 flex-shrink-0 overflow-hidden rounded-md transition-all duration-200 sm:h-16 sm:w-16 sm:rounded-lg ${
              photoIndex === index
                ? 'scale-105 opacity-100 shadow-lg outline outline-2 outline-offset-2 outline-cream'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={photo.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  )
}
