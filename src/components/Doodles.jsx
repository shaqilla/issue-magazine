export function DoodleArrow({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 60 44"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M5 5c11 1.5 27 7 34 20" />
      <path d="M36 15c1.6 5 2.6 9 2.6 13" />
      <path d="M38.6 28c-4.4.6-8.4.4-12-.6" />
    </svg>
  )
}

export function Sparkle({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12 1.6c1.05 5.5 4.3 8.9 10 10-5.7 1.1-8.95 4.5-10 10-1.05-5.5-4.3-8.9-10-10 5.7-1.1 8.95-4.5 10-10Z" />
    </svg>
  )
}

export function Star5({ className = '', ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12 2.4l2.9 6.1 6.7.9-4.9 4.6 1.2 6.6L12 17.5 6.1 20.6l1.2-6.6-4.9-4.6 6.7-.9L12 2.4Z" />
    </svg>
  )
}

export function HeartDoodle({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 40 36"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M20 31S4.5 22.2 4.5 13.1C4.5 8.3 8 5 12 5c3.2 0 5.6 1.7 8 5 2.4-3.3 4.8-5 8-5 4 0 7.5 3.3 7.5 8.1C35.5 22.2 20 31 20 31Z" />
    </svg>
  )
}

export function Squiggle({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 120 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M3 13c8-11 15 7 23-2s15 9 23 0 15 9 23 0 15 8 22-2" />
    </svg>
  )
}

export function CurvedArrowDown({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 3.5v15" />
      <path d="M6.5 13.5 12 19l5.5-5.5" />
    </svg>
  )
}

export function HandArrow({ className = '', ...props }) {
  return (
    <svg
      viewBox="0 0 36 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M2 16C9 6 19 4.5 30 9.5" />
      <path d="M24.4 3.6 30.6 9.6 23.6 13.6" />
    </svg>
  )
}
