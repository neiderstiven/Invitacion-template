import { wedding } from '../data/invitation'

function PinIcon() {
  return (
    <svg
      className="h-4 w-4 shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  )
}

export function Location() {
  return (
    <div className="relative isolate z-10 overflow-x-clip">
      <section className="relative z-10 flex w-full flex-col items-center px-6 pb-8 pt-8">
        <div className="relative text-center">
          <h3
            className="text-center font-title text-[20px] font-bold uppercase text-ink"
            style={{ letterSpacing: '0.03em' }}
          >
            Lugar de la Recepción
          </h3>
          <div
            className="mx-auto mt-2 max-w-[250px] whitespace-pre-line text-center text-[12px] leading-relaxed md:max-w-[440px] md:text-[14px]"
            style={{
              backgroundColor: 'transparent',
              color: 'rgba(89, 61, 44, 0.72)',
              fontFamily: 'Baskerville, "Times New Roman", serif',
            }}
          >
            {wedding.reception.place}
            {'\n'}
            {wedding.reception.city}
          </div>
        </div>

        <div className="relative flex w-full flex-col items-center gap-4 md:gap-5">
          <iframe
            title={`Mapa de ${wedding.reception.place}`}
            className="mt-3 h-[268px] w-full max-w-[338px] overflow-hidden rounded-[15px] md:h-[380px] md:max-w-[560px]"
            style={{ border: '1px solid rgba(89,61,44,0.25)' }}
            src={wedding.map.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={wedding.map.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-2 text-sm font-semibold transition-transform hover:scale-[1.03] md:text-base"
            style={{
              color: 'rgba(89, 61, 44, 0.72)',
              fontFamily: 'Baskerville, "Times New Roman", serif',
            }}
          >
            <PinIcon />
            <span>Cómo llegar</span>
          </a>
        </div>
      </section>
    </div>
  )
}
