import type { CSSProperties } from 'react'
import { useEffect, useRef, useState } from 'react'
import { THEME, wedding } from '../data/invitation'

type Sparkle = {
  top: string
  left?: string
  right?: string
  size: number
  delay: string
}

const sparkles: Sparkle[] = [
  { top: '8%', left: '14%', size: 22, delay: '0s' },
  { top: '18%', right: '10%', size: 16, delay: '-0.6s' },
  { top: '32%', left: '5%', size: 14, delay: '-1.2s' },
  { top: '26%', right: '5%', size: 14, delay: '-1.8s' },
]

const confetti = [
  { x: -92, y: -70, color: '#ec4899', shape: 'rect', rotate: -220 },
  { x: -58, y: -104, color: '#b58b2f', shape: 'dot', rotate: 180 },
  { x: -26, y: -84, color: '#22c55e', shape: 'rect', rotate: 240 },
  { x: 12, y: -112, color: '#3b82f6', shape: 'dot', rotate: -180 },
  { x: 48, y: -88, color: '#a855f7', shape: 'rect', rotate: 200 },
  { x: 82, y: -66, color: '#facc15', shape: 'triangle', rotate: 160 },
  { x: -70, y: -40, color: '#593D2C', shape: 'rect', rotate: 120 },
  { x: 26, y: -52, color: '#f97316', shape: 'dot', rotate: -160 },
]

const decor = [
  { src: 'baroque_v2_darkgreen', left: -20, top: 10, width: 34, rotate: -22 },
  { src: 'porcelain_v2_pink', left: 168, top: 2, width: 38, rotate: 20 },
  { src: 'spring_garden_blue', left: -16, top: 120, width: 26, rotate: -18 },
  { src: 'crystal_floral_green', left: 182, top: 114, width: 24, rotate: 14 },
  { src: 'minimalism_green', left: -8, top: 172, width: 44, rotate: 8 },
  { src: 'double_dragon_green', left: 26, top: 182, width: 26, rotate: -10 },
  { src: 'chateau_green', left: 118, top: 176, width: 40, rotate: -14 },
]

type GiftBoxProps = {
  qrDataUrl: string
}

export function GiftBox({ qrDataUrl }: GiftBoxProps) {
  const [open, setOpen] = useState(false)
  const [burst, setBurst] = useState(0)
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  const handleOpen = () => {
    setBurst((prev) => prev + 1)
    setOpen(true)
  }

  return (
    <div className="relative isolate z-10 overflow-x-clip">
      <img
        src={`${THEME}/castle2-background.webp`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[64px] -left-[26%] w-[152%] max-w-none object-contain"
        style={{ opacity: 0.15 }}
      />

      <div
        className="relative z-20 flex flex-col items-center justify-center px-6 pb-10 pt-8"
        style={{ backgroundColor: 'transparent' }}
      >
        <h2
          className="mb-4 flex flex-col items-center font-title text-[20px] font-bold uppercase text-ink"
          style={{ letterSpacing: '0.03em' }}
        >
          Caja de Regalos
        </h2>

        <button
          type="button"
          onClick={handleOpen}
          aria-label="Abrir caja de regalos"
          className="group relative h-[280px] w-[260px] cursor-pointer border-none bg-transparent outline-none"
        >
          <div className="relative flex h-full w-full items-end justify-center pb-[26px]">
            {sparkles.map((sparkle, index) => (
              <span
                key={index}
                aria-hidden="true"
                className="gift-sparkle pointer-events-none absolute z-20"
                style={
                  {
                    ...sparkle,
                    color: '#b58b2f',
                    fontSize: sparkle.size,
                    '--sparkle-delay': sparkle.delay,
                  } as CSSProperties
                }
              >
                ✦
              </span>
            ))}

            {burst > 0 && (
              <div key={burst} className="pointer-events-none absolute z-0" style={{ bottom: 187, left: '50%' }}>
                {confetti.map((piece, index) => (
                  <span
                    key={index}
                    aria-hidden="true"
                    className="gift-confetti absolute left-1/2 top-0"
                    style={
                      {
                        width: piece.shape === 'dot' ? 9 : piece.shape === 'triangle' ? 0 : 11,
                        height: piece.shape === 'dot' ? 9 : piece.shape === 'triangle' ? 0 : 5.5,
                        backgroundColor: piece.shape === 'triangle' ? 'transparent' : piece.color,
                        borderLeft: piece.shape === 'triangle' ? '5px solid transparent' : undefined,
                        borderRight: piece.shape === 'triangle' ? '5px solid transparent' : undefined,
                        borderBottom: piece.shape === 'triangle' ? `10px solid ${piece.color}` : undefined,
                        borderRadius: piece.shape === 'dot' ? '50%' : 2,
                        '--confetti-x': `${piece.x}px`,
                        '--confetti-y': `${piece.y}px`,
                        '--confetti-rotate': `${piece.rotate}deg`,
                        animationDelay: `${index * 0.03}s`,
                      } as CSSProperties
                    }
                  />
                ))}
              </div>
            )}

            <div className="gift-bob relative h-[220px] w-[200px]">
              <div
                aria-hidden="true"
                className="absolute -bottom-2 left-1/2 -ml-[72px] h-3 w-36 rounded-[50%]"
                style={{ backgroundColor: 'rgba(0,0,0,0.45)', filter: 'blur(4px)' }}
              />

              {decor.map((item) => (
                <img
                  key={item.src}
                  src={`/images/giftbox/mini/${item.src}.webp`}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="pointer-events-none absolute"
                  style={{
                    left: item.left,
                    top: item.top,
                    width: item.width,
                    zIndex: 1,
                    transform: `rotate(${item.rotate}deg)`,
                    filter: 'drop-shadow(0 2px 3px rgba(0,0,0,0.25))',
                  }}
                />
              ))}

              <img
                src="/images/giftbox/minimalism_darkbrown.webp"
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="absolute bottom-0 left-1/2 -ml-[85px] w-[170px] max-h-[220px] object-contain"
                style={{ zIndex: 2, filter: 'drop-shadow(0 10px 18px rgba(0,0,0,0.25))' }}
              />
            </div>
          </div>

          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-ink">
            Toca para abrir
          </p>
        </button>

        <dialog
          ref={dialogRef}
          onClose={() => setOpen(false)}
          className="m-auto w-full max-w-lg rounded-2xl p-0 backdrop:bg-black/50 sm:max-w-xl"
          style={{ backgroundColor: '#f7f5ee' }}
        >
          <div className="relative px-6 pb-4 pt-6 text-center" style={{ backgroundColor: '#593D2C' }}>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar"
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2
              className="font-title text-[20px] font-bold uppercase text-white"
              style={{ letterSpacing: '0.03em', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}
            >
              Caja de Regalos
            </h2>
          </div>

          <div className="p-4 sm:p-6">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:items-start sm:justify-center" style={{ color: '#593D2C' }}>
              <div className="flex max-w-[180px] flex-col items-center sm:max-w-none">
                <div className="mb-2 flex min-h-[2.5rem] items-start gap-1.5">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 object-contain" aria-hidden="true">
                    <path fill="#003087" d="M7.1 21.2H3.3L6.2 2.8h4.7c2.3 0 3.9.5 4.7 1.5.8 1 1.1 2.4.8 4.3-.4 2.4-1.3 4.1-2.7 5.2-1.3 1-3.1 1.6-5.3 1.6H6.3l-.9 5.8Zm1.6-9.9h1.5c1.1 0 1.9-.3 2.4-.8.5-.5.9-1.3 1.1-2.5.2-1.1.1-1.9-.2-2.3-.4-.5-1-.7-2-.7H9.6l-.9 6.3Z" />
                    <path fill="#009CDE" d="M20.2 7.1c-1.4-.5-3.1-.7-4.9-.7h-1.2l-.5 3.3h1.5c1.1 0 2 .2 2.5.6.6.4.8 1 .7 2-.2 2.4-1.2 4.1-2.9 5.2-1.2.8-2.8 1.2-4.6 1.2H9l-.4 2.5h3.7c2.7 0 4.8-.6 6.3-1.9 1.5-1.3 2.4-3.2 2.8-5.7.3-2.1 0-3.5-1.2-4.4-.3-.2-.6-.4-1-.5Z" />
                  </svg>
                  <h3 className="line-clamp-2 text-balance text-center text-sm font-medium" style={{ color: '#593D2C' }}>
                    Novio - PayPal
                  </h3>
                </div>

                <div
                  className="flex h-44 w-44 items-center justify-center rounded-xl bg-white p-2 shadow-lg sm:h-48 sm:w-48"
                  style={{ border: '2px solid #593D2C20' }}
                >
                  <img src={qrDataUrl} alt="Código QR de PayPal" className="h-full w-full object-contain" />
                </div>

                <div className="mt-3 space-y-0.5 text-center">
                  <p className="break-all font-mono text-xs" style={{ color: '#593D2C' }}>
                    {wedding.gift.paypalHandle}
                  </p>
                </div>

                <div className="mt-2 flex flex-wrap justify-center gap-1.5">
                  <a
                    href={wedding.gift.paypalUrl}
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-white transition-colors"
                    style={{ backgroundColor: '#003087' }}
                  >
                    PayPal
                  </a>
                  <a
                    href={qrDataUrl}
                    download="regalo-paypal.png"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-xs font-medium transition-colors"
                    style={{ color: '#593D2C', backgroundColor: '#593D2C15' }}
                  >
                    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Guardar QR
                  </a>
                </div>
              </div>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  )
}
