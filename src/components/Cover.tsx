import { THEME, wedding } from '../data/invitation'
import { Petals } from './Petals'

type CoverProps = {
  onOpen: () => void
}

export function Cover({ onOpen }: CoverProps) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#f7f5ee]">
      <Petals className="opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35] paper-grain"
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 py-16">
        <div className="fade-up relative w-[310px] sm:w-[340px] md:w-[520px] lg:w-[600px]">
          <div
            className="seal-pulse absolute left-1/2 z-30 flex h-14 w-14 items-center justify-center rounded-full"
            style={{
              top: 50,
              background: 'radial-gradient(circle at 30% 30%, #593D2C, #3b1f0e)',
              boxShadow:
                '0 4px 20px rgba(89, 61, 44, 0.5), inset 0 2px 4px rgba(255,255,255,0.3)',
            }}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7 fill-[#ece4d8]" aria-hidden="true">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

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
              <h1 className="mb-2 flex flex-col items-center text-3xl leading-tight sm:text-4xl">
                <span className="block w-full font-display tracking-[0.02em] text-ink">
                  {wedding.couple.first}
                </span>
                <span className="block w-full font-body text-lg leading-none text-ink sm:text-xl">
                  {wedding.couple.ampersand}
                </span>
                <span className="block w-full font-display tracking-[0.02em] text-ink">
                  {wedding.couple.second}
                </span>
              </h1>

              <div className="mb-2 flex items-center justify-center gap-3">
                <div className="h-px w-10 bg-gradient-to-r from-transparent to-ink" />
                <span className="text-sm text-ink/70">❦</span>
                <div className="h-px w-10 bg-gradient-to-l from-transparent to-ink" />
              </div>

              <div className="mb-5 flex flex-col items-center font-body text-[18px] text-ink/70">
                <span dir="auto">{wedding.date.long}</span>
              </div>

              <div className="mx-auto mb-6 max-w-[300px] md:max-w-[380px] lg:max-w-[440px]">
                <p className="mb-2 font-body text-[18px] font-light text-ink/70">
                  {wedding.hero.invitationLine}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpen}
                className="relative mx-auto flex w-fit items-center justify-center overflow-hidden rounded-full px-8 py-2.5 text-lg font-semibold text-cream shadow-lg transition-transform duration-300 hover:scale-[1.04] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink sm:font-medium"
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

        <p className="mt-8 text-[11px] tracking-[0.22em] text-ink/40">cdc-9f4b27ae61d3</p>
      </div>
    </main>
  )
}
