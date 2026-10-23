import type { CSSProperties } from 'react'

type Petal = {
  left: number
  size: number
  color: string
  duration: number
  delay: number
  sway: number
}

const palette = ['#593D2C', '#c9a24a', '#A97454', '#ece4d8', '#827771']

const petals: Petal[] = Array.from({ length: 16 }, (_, index) => {
  const seed = (index * 9301 + 49297) % 233280
  const rand = seed / 233280
  const rand2 = ((index * 4241 + 12345) % 65521) / 65521
  return {
    left: 4 + ((index * 6.13) % 92),
    size: 9 + rand * 14,
    color: palette[index % palette.length],
    duration: 17 + rand2 * 11,
    delay: -rand2 * 24,
    sway: (rand > 0.5 ? 1 : -1) * (6 + rand * 16),
  }
})

function FlowerShape() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="1em" height="1em" aria-hidden="true">
      <g>
        {[0, 60, 120, 180, 240, 300].map((angle) => (
          <ellipse
            key={angle}
            cx="12"
            cy="5"
            rx="2.2"
            ry="4.5"
            transform={`rotate(${angle} 12 12)`}
          />
        ))}
      </g>
      <circle cx="12" cy="12" r="1.8" fillOpacity="0.45" />
    </svg>
  )
}

export function Petals({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {petals.map((petal, index) => (
        <div
          key={index}
          className="ambient-petal absolute top-0"
          style={
            {
              left: `${petal.left}%`,
              color: petal.color,
              fontSize: `${petal.size}px`,
              '--fall-duration': `${petal.duration}s`,
              '--fall-delay': `${petal.delay}s`,
              '--sway': `${petal.sway}px`,
            } as CSSProperties
          }
        >
          <FlowerShape />
        </div>
      ))}
    </div>
  )
}
