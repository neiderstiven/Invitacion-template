import type { CSSProperties } from 'react'
import { THEME, envelopePhoto, invitation, logoImage } from '../data/invitation'
import { Petals } from './Petals'

export function Hero() {
  return (
    <header className="relative isolate z-10 flex flex-col items-center overflow-x-clip px-6 pb-12 pt-10 text-center">
      <img
        src={`${THEME}/castle-background.webp`}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[3%] -left-[59%] w-[208%] max-w-none object-contain"
        style={{ opacity: 0.15 }}
      />
      <Petals className="opacity-45" />

      <p
        className="relative z-10 whitespace-pre-line text-[15px] font-semibold uppercase text-ink md:text-[18px]"
        style={{
          fontFamily: '"Playfair Display", "Times New Roman", serif',
          letterSpacing: '0.14em',
        }}
      >
        {invitation.event.phrase}
      </p>

      <img
        src={`${THEME}/goldenline2-decoration.webp`}
        alt=""
        aria-hidden="true"
        className="relative z-10 mt-7 block w-[68px] max-w-none object-contain md:w-[86px]"
      />

      <div className="relative z-10 mt-8 w-[66%] max-w-[300px] md:max-w-[390px]">
        <div className="relative aspect-[292/341]">
          <img
            src={`${THEME}/envelope-background.webp`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 w-full max-w-none"
          />

          <div
            className="dbr-float absolute left-[12%] top-[18%] z-20 w-[79.5%]"
            style={
              {
                '--dbr-duration': '7.3s',
                '--dbr-delay': '-1.9s',
                '--dbr-float': '-7px',
              } as CSSProperties
            }
          >
            <div className="aspect-[232/206] rotate-[3.92deg] border-[5px] border-white bg-white shadow-[2px_2px_4px_rgba(0,0,0,0.25)] md:border-[7px]">
              <img
                src={envelopePhoto}
                alt=""
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          <img
            src={`${THEME}/envelope-cover.webp`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-[43.1%] z-30 w-full max-w-none"
          />

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[65.8%] top-[69.5%] z-[35] block w-[54.5%]"
          >
            <span
              className="dbr-float block"
              style={
                {
                  '--dbr-duration': '5.9s',
                  '--dbr-delay': '-0.4s',
                  '--dbr-float': '-9px',
                } as CSSProperties
              }
            >
              <img
                src={`${THEME}/flower-decoration.webp`}
                alt=""
                className="block w-full max-w-none object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
              />
            </span>
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute -left-[12%] top-[33.1%] z-[36] block w-[39.4%]"
          >
            <span
              className="dbr-float block"
              style={
                {
                  '--dbr-duration': '6.7s',
                  '--dbr-delay': '-3.1s',
                  '--dbr-float': '-7px',
                } as CSSProperties
              }
            >
              <img
                src={`${THEME}/flower8-decoration.webp`}
                alt=""
                className="block w-full max-w-none object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
              />
            </span>
          </span>

          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-[14.4%] top-[12.3%] z-[37] block w-[22.3%]"
          >
            <span
              className="dbr-float block"
              style={
                {
                  '--dbr-duration': '7.3s',
                  '--dbr-delay': '-1.9s',
                  '--dbr-float': '-7px',
                } as CSSProperties
              }
            >
              <img
                src={`${THEME}/string-decoration.webp`}
                alt=""
                className="block w-full max-w-none object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
              />
            </span>
          </span>
        </div>
      </div>

      <div className="relative z-10 mt-[26%] flex w-full max-w-[330px] flex-col items-center gap-2 md:max-w-[420px]">
        <img
          src={logoImage}
          alt={invitation.event.logo}
          loading="eager"
          className="mx-auto block w-[140px] md:w-[180px]"
        />

        <p
          className="text-center text-[15px] leading-relaxed text-ink/80 md:text-[17px]"
          style={{ fontFamily: 'Lora, Baskerville, serif' }}
        >
          {invitation.event.subtitle}
        </p>

        <p
          className="text-center text-[13px] tracking-[0.08em] text-ink/65 md:text-[14px]"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          {invitation.event.dateLong}
        </p>
      </div>
    </header>
  )
}
