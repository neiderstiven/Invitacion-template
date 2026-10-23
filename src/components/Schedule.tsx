import type { CSSProperties } from 'react'
import { THEME, wedding } from '../data/invitation'
import { CardTitle, SectionCard } from './SectionCard'

export function DressCode() {
  return (
    <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-10 md:px-10 md:py-12">
      <div className="flex flex-col items-center gap-1">
        <h2
          className="text-center font-title text-[20px] font-bold uppercase text-ink"
          style={{ letterSpacing: '0.03em' }}
        >
          {wedding.dressCode.title}
        </h2>
        <p
          className="whitespace-pre-line text-center font-title text-sm text-ink md:text-base"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          {wedding.dressCode.subtitle}
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {wedding.dressCode.palette.map((color, index) => (
          <div
            key={color}
            className="h-10 w-10 rounded-full shadow-md md:h-12 md:w-12"
            style={{
              backgroundColor: color,
              border: index === wedding.dressCode.palette.length - 1 ? '1.5px solid #593D2C30' : 'none',
            }}
          />
        ))}
      </div>
    </div>
  )
}

export function Program() {
  return (
    <section className="relative isolate z-10 mx-auto my-4 w-[88%] max-w-[420px] md:max-w-[560px]">
      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[5%] left-[78.9%] z-20 block w-[45%] md:w-[30%]"
      >
        <span
          className="dbr-float block"
          style={
            {
              '--dbr-duration': '6.9s',
              '--dbr-delay': '-3.7s',
              '--dbr-float': '-9px',
            } as CSSProperties
          }
        >
          <img
            src={`${THEME}/flower3-decoration.webp`}
            alt=""
            className="block w-full max-w-none -rotate-[11.94deg] object-contain drop-shadow-[4px_4px_2px_rgba(0,0,0,0.25)]"
          />
        </span>
      </span>

      <SectionCard contentClassName="flex flex-col gap-4 px-6 py-9">
        <div className="px-2">
          <CardTitle>PROGRAMA DEL DÍA</CardTitle>
        </div>

        <ol
          className="mx-auto grid w-full max-w-[460px] grid-cols-[minmax(0,1fr)_16px_minmax(0,1fr)] items-center gap-x-6 gap-y-8 px-2 md:gap-x-8 md:gap-y-10"
          style={{ fontFamily: '"Times New Roman", serif' }}
        >
          {wedding.program.map((item, index) => {
            const isLast = index === wedding.program.length - 1
            const isFirst = index === 0

            return (
              <li key={`${item.time}-${item.label}`} className="contents">
                <span
                  className="pt-0.5 text-right text-[16px] leading-snug tracking-wide tabular-nums md:text-[17px]"
                  style={{ color: '#ece4d8', fontFamily: '"Times New Roman", serif' }}
                >
                  <span className="relative inline-block">
                    {item.icon && (
                      <span
                        aria-hidden="true"
                        className="absolute right-full top-1/2 flex translate-y-[calc(-50%_+_27px)] items-center justify-center md:translate-y-[calc(-50%_+_32px)]"
                        style={{ marginRight: 30 }}
                      >
                        <img
                          src={`${THEME}/${item.icon}.webp`}
                          alt=""
                          className="block h-[46px] w-[46px] shrink-0 object-contain"
                          loading="lazy"
                        />
                      </span>
                    )}
                    {item.time}
                  </span>
                </span>

                <span aria-hidden="true" className="relative flex items-center justify-center self-stretch">
                  <span
                    className={`absolute left-1/2 w-px -translate-x-1/2 ${
                      isLast ? 'top-1/2 bottom-1/2' : isFirst ? 'top-1/2 -bottom-8 md:-bottom-10' : '-top-8 -bottom-8 md:-top-10 md:-bottom-10'
                    }`}
                    style={{ backgroundColor: 'color-mix(in srgb, #ece4d8 40%, transparent)' }}
                  />
                  <span
                    className="relative block h-2.5 w-2.5 rounded-full"
                    style={{
                      backgroundColor: '#ece4d8',
                      boxShadow: '0 0 0 2px color-mix(in srgb, #ece4d8 13%, transparent)',
                    }}
                  />
                </span>

                <span
                  className="text-[13px] md:text-[15px]"
                  style={{ color: 'rgba(236,228,216,0.7)', fontFamily: '"Times New Roman", serif' }}
                >
                  {item.label}
                </span>
              </li>
            )
          })}
        </ol>
      </SectionCard>
    </section>
  )
}
