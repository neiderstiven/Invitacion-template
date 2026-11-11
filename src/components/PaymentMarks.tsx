import { useId } from 'react'

const badgeClass =
  'flex h-[30px] w-[50px] items-center justify-center rounded-[7px] border bg-white shadow-[0_1px_3px_rgba(89,61,44,0.15)]'

const badgeStyle = { borderColor: 'rgba(89, 61, 44, 0.18)' }

/** Small Visa card badge used in the offering section. */
export function VisaMark() {
  return (
    <span role="img" aria-label="Visa" className={badgeClass} style={badgeStyle}>
      <span
        aria-hidden="true"
        style={{
          fontFamily: 'Arial, Helvetica, sans-serif',
          fontStyle: 'italic',
          fontWeight: 800,
          fontSize: 16,
          letterSpacing: '-0.02em',
          color: '#1A1F71',
        }}
      >
        VISA
      </span>
    </span>
  )
}

/** Small Mastercard card badge used in the offering section. */
export function MastercardMark() {
  const clipId = `mc-clip-${useId().replace(/[^a-zA-Z0-9]/g, '')}`

  return (
    <span role="img" aria-label="Mastercard" className={badgeClass} style={badgeStyle}>
      <svg viewBox="0 0 32 20" className="h-[19px] w-auto" aria-hidden="true">
        <defs>
          <clipPath id={clipId}>
            <circle cx="12" cy="10" r="8" />
          </clipPath>
        </defs>
        <circle cx="12" cy="10" r="8" fill="#EB001B" />
        <circle cx="20" cy="10" r="8" fill="#F79E1B" />
        <circle cx="20" cy="10" r="8" fill="#FF5F00" clipPath={`url(#${clipId})`} />
      </svg>
    </span>
  )
}
