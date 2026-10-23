import type { CSSProperties } from 'react'
import { THEME, wedding } from '../data/invitation'
import { CardTitle, SectionCard } from './SectionCard'

function DateBlock() {
  return (
    <div className="flex items-center justify-center gap-4 font-body text-cream">
      <span
        className="text-[50px] leading-none md:text-[57px]"
        style={{ fontFamily: 'Baskerville, "Times New Roman", serif' }}
      >
        {wedding.date.day}
      </span>
      <div
        className="h-[46px] w-px"
        style={{ backgroundColor: 'rgba(236,228,216,0.45)' }}
        aria-hidden="true"
      />
      <div className="flex flex-col items-start justify-center gap-1 text-left">
        <span
          className="text-[14px] uppercase md:text-[18px]"
          style={{ fontFamily: '"Times New Roman", serif', color: '#ece4d8' }}
        >
          {wedding.date.month}
        </span>
        <span
          className="text-[14px] uppercase md:text-[18px]"
          style={{ fontFamily: '"Times New Roman", serif', color: '#ece4d8' }}
        >
          {wedding.date.year}
        </span>
      </div>
    </div>
  )
}

function EventBlock({
  label,
  place,
  timeLabel,
}: {
  label: string
  place: string
  timeLabel: string
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-center md:gap-5">
      <div style={{ color: 'rgba(236,228,216,0.7)' }}>
        <span className="whitespace-pre-line text-center text-[16px] font-normal md:text-[18px]">
          {label}
          {'\n'}
          {place}
        </span>
      </div>
      <div
        className="flex min-w-max items-center justify-between gap-x-3 whitespace-nowrap px-0 text-[12px] uppercase md:text-[14px]"
        style={{ color: 'rgba(236,228,216,0.7)', maxWidth: 220 }}
      >
        <span>{timeLabel}</span>
        <span>{wedding.date.weekday}</span>
      </div>
      <DateBlock />
    </div>
  )
}

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
        contentClassName="flex flex-col items-center gap-6 px-5 pb-10 pt-9 text-center"
      >
        <CardTitle>INFO DE LA CEREMONIA</CardTitle>

        <div className="relative grid grid-cols-[1fr_auto_1fr] grid-rows-[repeat(4,auto)] justify-center gap-x-4 gap-y-[3px] text-center font-body text-cream">
          <div className="row-span-4 grid min-w-0 grid-rows-subgrid justify-items-center">
            <span className="text-[12px]" style={{ color: 'rgba(236,228,216,0.7)' }}>
              {wedding.families.left.prefix}
            </span>
            {wedding.families.left.names.map((name) => (
              <span
                key={name}
                className="text-[12px] font-semibold"
                style={{ color: '#ece4d8', overflowWrap: 'anywhere' }}
              >
                {name}
              </span>
            ))}
          </div>

          <div
            className="row-span-4 h-[50px] w-px shrink-0 self-center"
            style={{ backgroundColor: 'rgba(236,228,216,0.4)' }}
            aria-hidden="true"
          />

          <div className="row-span-4 grid min-w-0 grid-rows-subgrid justify-items-center">
            <span className="text-[12px]" style={{ color: 'rgba(236,228,216,0.7)' }}>
              {wedding.families.right.prefix}
            </span>
            {wedding.families.right.names.map((name) => (
              <span
                key={name}
                className="text-[12px] font-semibold"
                style={{ color: '#ece4d8', overflowWrap: 'anywhere' }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <p
          className="mx-auto whitespace-pre-line text-center text-[12px] leading-relaxed md:max-w-[560px] md:text-[13px]"
          style={{ fontFamily: 'Baskerville, "Times New Roman", serif', color: '#ece4d8' }}
        >
          {wedding.families.blessing}
        </p>

        <div className="relative flex w-full min-w-0 flex-col items-center gap-3 text-center md:gap-4">
          <h3
            className="flex min-h-[80px] w-[80%] items-center justify-center whitespace-nowrap leading-[52px] md:leading-[60px]"
            style={{ fontSize: 43, fontFamily: '"Viaoda Libre", cursive', color: '#ece4d8' }}
          >
            {wedding.couple.firstFull}
          </h3>
          <div
            className="text-[10px] uppercase"
            style={{
              color: 'rgba(236,228,216,0.7)',
              fontFamily: 'Uchen, Baskerville, serif',
              letterSpacing: '0.14em',
            }}
          />
          <div
            className="text-[35px]"
            style={{ color: '#ece4d8', fontFamily: '"Ms Madi", cursive' }}
          >
            {wedding.couple.ampersand}
          </div>
          <h3
            className="flex min-h-[80px] w-[80%] items-center justify-center whitespace-nowrap leading-[52px] md:leading-[60px]"
            style={{ fontSize: 43, fontFamily: '"Viaoda Libre", cursive', color: '#ece4d8' }}
          >
            {wedding.couple.secondFull}
          </h3>
        </div>

        <div
          className="relative flex flex-col items-center gap-4 text-center md:gap-5"
          style={{ fontFamily: 'Baskerville, "Times New Roman", serif' }}
        >
          <EventBlock
            label={wedding.ceremony.label}
            place={wedding.ceremony.place}
            timeLabel={wedding.ceremony.timeLabel}
          />
          <EventBlock
            label={wedding.reception.label}
            place={wedding.reception.place}
            timeLabel={wedding.reception.timeLabel}
          />
        </div>
      </SectionCard>
    </section>
  )
}
