import type { CSSProperties } from 'react'
import { useEffect, useMemo, useState } from 'react'
import { THEME, wedding } from '../data/invitation'
import { CardTitle, SectionCard } from './SectionCard'

function useCountdown(targetIso: string) {
  const target = useMemo(() => new Date(targetIso).getTime(), [targetIso])
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  const diff = Math.max(0, target - now)
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  const done = diff === 0

  return { days, hours, minutes, seconds, done }
}

const weekDays = ['Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá', 'Do']

/** September 2027 starts on a Wednesday. */
const septemberOffset = 2
const septemberDays = 30

function MiniCalendar() {
  return (
    <div
      className="mt-3 mx-auto w-fit max-w-full overflow-hidden rounded-[10px] px-4 pb-4 pt-2"
      style={{ backgroundColor: '#ece4d8' }}
    >
      <div className="mx-auto w-[280px] overflow-hidden rounded-lg md:w-[330px]" style={{ color: '#593D2C' }}>
        <div
          className="border-b py-2.5 text-center font-normal"
          style={{
            borderColor: 'color-mix(in srgb, #593D2C 27%, transparent)',
            fontFamily: '"The Nautigal", cursive',
            fontSize: 25,
          }}
        >
          Septiembre 2027
        </div>
        <div className="grid grid-cols-7 border-b-2" style={{ borderColor: '#593D2C' }}>
          {weekDays.map((day) => (
            <div key={day} className="py-1.5 text-center text-[10px] font-medium opacity-60 md:text-[11px]">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-0.5 px-1 py-2">
          {Array.from({ length: septemberOffset }).map((_, index) => (
            <div key={`empty-${index}`} className="flex h-[30px] items-center justify-center md:h-[34px]" />
          ))}
          {Array.from({ length: septemberDays }, (_, index) => index + 1).map((day) => (
            <div key={day} className="flex h-[30px] items-center justify-center md:h-[34px]">
              {day === 18 ? (
                <div className="relative flex h-[24px] w-[26px] items-center justify-center md:h-[28px] md:w-[30px]">
                  <svg
                    viewBox="0 0 24 22"
                    className="absolute inset-0 h-full w-full drop-shadow-sm"
                    fill="#593D2C"
                    aria-hidden="true"
                  >
                    <path d="M12 21C12 21 1.5 13.5 1.5 7.5C1.5 4.46 3.96 2 7 2C8.76 2 10.35 2.81 11.4 4.09L12 4.8L12.6 4.09C13.65 2.81 15.24 2 17 2C20.04 2 22.5 4.46 22.5 7.5C22.5 13.5 12 21 12 21Z" />
                  </svg>
                  <span className="relative z-10 text-[11px] font-bold text-white md:text-[12px]">
                    {day}
                  </span>
                </div>
              ) : (
                <span className="text-[12px] md:text-[13px]">{day}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function Reception() {
  const { days, hours, minutes, seconds, done } = useCountdown(wedding.date.iso)

  return (
    <section className="relative isolate z-10 mx-auto mb-4 w-[88%] max-w-[420px] md:max-w-[560px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-[28%] top-[21.8%] z-20 block w-[45%] md:left-[-30.5%] md:top-[25%]"
      >
        <span
          className="dbr-float block"
          style={
            {
              '--dbr-duration': '5.5s',
              '--dbr-delay': '-1.2s',
              '--dbr-float': '-8px',
            } as CSSProperties
          }
        >
          <img
            src={`${THEME}/flower2-decoration.webp`}
            alt=""
            className="block w-full max-w-none -rotate-[16.74deg] object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
          />
        </span>
      </span>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-[75.6%] top-[71.8%] z-20 block w-[53.1%] -rotate-[16.74deg] md:w-[45%]"
      >
        <span
          className="dbr-float block"
          style={
            {
              '--dbr-duration': '8.7s',
              '--dbr-delay': '-6.1s',
              '--dbr-float': '-11px',
            } as CSSProperties
          }
        >
          <img
            src={`${THEME}/flower3-decoration.webp`}
            alt=""
            className="block w-full max-w-none object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
          />
        </span>
      </span>

      <SectionCard contentClassName="flex flex-col items-center gap-6 px-5 py-9 text-center">
        <CardTitle>INFO DE LA RECEPCIÓN</CardTitle>

        <div
          className="flex flex-col items-center gap-4 text-center md:gap-5"
          style={{ fontFamily: 'Baskerville, "Times New Roman", serif', color: '#ece4d8' }}
        >
          <h3 className="flex flex-col items-center text-[20px] font-normal uppercase text-cream md:text-[26px]">
            {wedding.reception.intro}
          </h3>

          <div
            className="flex min-w-max items-center justify-between gap-x-3 whitespace-nowrap text-[13px] uppercase md:text-[15px]"
            style={{ color: 'rgba(236,228,216,0.7)', maxWidth: 170 }}
          >
            <span>{wedding.ceremony.time}</span>
            <span>{wedding.date.weekday}</span>
          </div>

          <div className="flex items-center justify-center gap-4">
            <span
              className="text-[50px] leading-none md:text-[57px]"
              style={{ fontFamily: 'Baskerville, "Times New Roman", serif', color: '#ece4d8' }}
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
                className="text-[12px] uppercase md:text-[16px]"
                style={{ fontFamily: '"Times New Roman", serif', color: '#ece4d8' }}
              >
                {wedding.date.month}
              </span>
              <span
                className="text-[18px] md:text-[24px]"
                style={{ fontFamily: '"Times New Roman", serif', color: '#ece4d8' }}
              >
                {wedding.date.year}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-8">
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(236,228,216,0.7)' }}>
                Bienvenida
              </span>
              <span className="mt-1 text-lg font-medium md:text-xl">{wedding.reception.welcomeTime}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xs uppercase tracking-wider" style={{ color: 'rgba(236,228,216,0.7)' }}>
                Recepción
              </span>
              <span className="mt-1 text-lg font-medium md:text-xl">{wedding.reception.receptionTime}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-col items-center justify-center">
            <h2 className="uppercase" style={{ color: 'rgba(236,228,216,0.7)' }}>
              Cuenta Regresiva
            </h2>
            <div
              className="mt-2 text-center text-sm md:text-lg"
              style={{ color: 'rgba(236,228,216,0.7)' }}
            >
              {done ? (
                <p>¡Llegó el gran día!</p>
              ) : (
                <p className="flex items-baseline justify-center gap-1.5 tabular-nums">
                  <span className="text-cream">{days}</span>
                  <span className="text-[10px] uppercase md:text-xs">días</span>
                  <span className="mx-0.5 text-cream/50">·</span>
                  <span className="text-cream">{String(hours).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase md:text-xs">h</span>
                  <span className="mx-0.5 text-cream/50">·</span>
                  <span className="text-cream">{String(minutes).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase md:text-xs">m</span>
                  <span className="mx-0.5 text-cream/50">·</span>
                  <span className="text-cream">{String(seconds).padStart(2, '0')}</span>
                  <span className="text-[10px] uppercase md:text-xs">s</span>
                </p>
              )}
            </div>
          </div>
        </div>

        <MiniCalendar />

        <a
          href={wedding.calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center font-title text-sm text-cream underline decoration-cream/40 underline-offset-4 transition-colors hover:decoration-cream"
        >
          Añadir al Calendario
        </a>
      </SectionCard>
    </section>
  )
}
