import { useState } from 'react'
import { THEME, invitation, logoImage } from '../data/invitation'
import { Petals } from './Petals'

type CoverProps = {
  onOpen: () => void
}

export function Cover({ onOpen }: CoverProps) {
  const [opening, setOpening] = useState(false)

  const handleOpen = () => {
    if (opening) return
    setOpening(true)
    window.setTimeout(onOpen, 950)
  }

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f7f5ee]">
      <Petals className="opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] paper-grain"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16">
        <div className="fade-up relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px]">
          <div className={`relative ${opening ? 'cover-opening' : ''}`}>
            <img
              src={logoImage}
              alt={invitation.event.logo}
              className="absolute left-1/2 top-[50px] z-30 h-[72px] w-[72px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_4px_10px_rgba(89,61,44,0.3)]"
            />

            <div
              className="relative rounded-lg"
              style={{
                boxShadow:
                  '0 25px 60px -12px rgba(0, 0, 0, 0.45), 0 8px 24px rgba(0, 0, 0, 0.2), 0 0 40px rgba(89, 61, 44, 0.15)',
              }}
            >
              <div
                className="absolute inset-0 overflow-hidden rounded-lg"
                style={{
                  background: 'rgba(247, 245, 238, 0.96)',
                  border: '1px solid rgba(89, 61, 44, 0.15)',
                }}
              >
                <img
                  src={`${THEME}/flower2-decoration.webp`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[35px] top-[-10%] h-36 w-auto max-w-none -translate-x-[6%] rotate-[25deg] opacity-80 md:top-[-20%] md:h-70 md:-translate-x-[11%]"
                />
                <img
                  src={`${THEME}/flower2-decoration.webp`}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-[35px] bottom-[-10%] h-36 w-auto max-w-none translate-x-[6%] -rotate-[25deg] -scale-x-100 opacity-80 md:bottom-[53%] md:h-70 md:translate-x-[11%]"
                />
              </div>

              <div className="relative z-10 px-6 pb-14 pt-28 text-center md:pb-8 md:pt-24">
                <h1 className="mb-2 block w-full font-body text-lg leading-tight text-ink sm:text-xl">
                  {invitation.event.subtitle}
                </h1>

                <div className="mb-2 flex items-center justify-center gap-3">
                  <div className="h-px w-10 bg-gradient-to-r from-transparent to-ink" />
                  <span className="text-sm text-ink/70">❦</span>
                  <div className="h-px w-10 bg-gradient-to-l from-transparent to-ink" />
                </div>

                <div className="mb-5 flex flex-col items-center font-body text-[18px] text-ink/70">
                  <span dir="auto">{invitation.event.dateLong}</span>
                </div>

                <div className="mx-auto mb-6 max-w-[300px] md:max-w-[380px] lg:max-w-[440px]">
                  <p className="mb-2 font-body text-[18px] font-light text-ink/70">
                    {invitation.event.phrase}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleOpen}
                  disabled={opening}
                  aria-busy={opening}
                  className="relative mx-auto flex w-fit items-center justify-center overflow-hidden rounded-full px-8 py-2.5 text-lg font-semibold text-cream shadow-lg transition-transform duration-300 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink disabled:cursor-wait sm:font-medium"
                  style={{
                    backgroundColor: '#593D2C',
                    boxShadow: '0 4px 14px rgba(89, 61, 44, 0.35)',
                  }}
                >
                  <span>Abrir</span>
                  <span
                    aria-hidden="true"
                    className="btn-shine pointer-events-none absolute top-0 h-full w-8"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    }}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
