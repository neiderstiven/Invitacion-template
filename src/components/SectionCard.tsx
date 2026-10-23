import type { ReactNode } from 'react'
import { THEME } from '../data/invitation'

type SectionCardProps = {
  children: ReactNode
  className?: string
  radius?: string
  contentClassName?: string
}

/** Dark kraft-paper card used across the invitation. */
export function SectionCard({
  children,
  className = '',
  radius = 'rounded-[10px]',
  contentClassName = '',
}: SectionCardProps) {
  return (
    <div
      className={`relative overflow-hidden shadow-[4px_4px_2px_rgba(0,0,0,0.25)] ${radius} ${className}`}
    >
      <div aria-hidden="true" className={`absolute inset-0 bg-ink ${radius}`} />
      <img
        src={`${THEME}/paper.webp`}
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full max-w-none object-cover opacity-50 mix-blend-multiply ${radius}`}
      />
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  )
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="text-center font-title text-[20px] font-bold uppercase text-cream"
      style={{ letterSpacing: '0.03em' }}
    >
      {children}
    </h2>
  )
}

export function LightTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      className={`text-center font-title text-[20px] font-bold uppercase text-ink ${className}`}
      style={{ letterSpacing: '0.03em' }}
    >
      {children}
    </h2>
  )
}
