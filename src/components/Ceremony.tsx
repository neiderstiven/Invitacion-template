import type { CSSProperties } from 'react'
import { THEME, invitation } from '../data/invitation'
import { CardTitle, SectionCard } from './SectionCard'

export function Ceremony() {
  return (
    <section className="relative isolate z-10 mx-auto w-[88%] max-w-[420px] md:max-w-[560px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[-35%] top-[53.3%] z-20 block w-[50.2%] md:left-[-25%] md:top-[50%] md:w-[45.2%]"
      >
        <span
          className="dbr-float block"
          style={
            {
              '--dbr-duration': '6.3s',
              '--dbr-delay': '-2.6s',
              '--dbr-float': '-10px',
            } as CSSProperties
          }
        >
          <img
            src={`${THEME}/flower2-decoration.webp`}
            alt=""
            className="block w-full max-w-none -rotate-[8.27deg] object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
          />
        </span>
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[85%] top-[25.4%] z-20 block w-[52.2%] rotate-[10deg] md:left-[80%] md:top-[15%] md:w-[50.2%]"
      >
        <span
          className="dbr-float block"
          style={
            {
              '--dbr-duration': '7.9s',
              '--dbr-delay': '-4.4s',
              '--dbr-float': '-7px',
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

      <SectionCard
        radius="rounded-[13px]"
        contentClassName="flex flex-col items-center gap-6 px-6 pb-12 pt-10 text-center"
      >
        <CardTitle>{invitation.event.title}</CardTitle>

        <p
          className="text-center text-[16px] leading-relaxed md:text-[18px]"
          style={{ fontFamily: 'Baskerville, "Times New Roman", serif', color: '#ece4d8' }}
        >
          {invitation.event.subtitle}
        </p>

        <div
          aria-hidden="true"
          className="h-px w-16"
          style={{ backgroundColor: 'rgba(236,228,216,0.4)' }}
        />

        <p
          className="mx-auto whitespace-pre-line text-center text-[13px] leading-relaxed md:max-w-[500px] md:text-[15px]"
          style={{ fontFamily: 'Baskerville, "Times New Roman", serif', color: '#ece4d8' }}
        >
          {invitation.event.paragraph}
        </p>
      </SectionCard>
    </section>
  )
}
