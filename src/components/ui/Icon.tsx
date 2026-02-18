import React from 'react'

type IconName =
  | 'radar'
  | 'timeline'
  | 'lifeline'
  | 'shield'
  | 'document'
  | 'map'
  | 'clock'
  | 'lock'
  | 'alert'
  | 'target'
  | 'users'
  | 'building'
  | 'check'

const icons: Record<IconName, React.ReactNode> = {
  radar: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v9l6 6" />
      <path d="M3 12h9" />
    </svg>
  ),
  timeline: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 6h8" />
      <path d="M4 12h16" />
      <path d="M4 18h12" />
      <circle cx="18" cy="12" r="2" />
    </svg>
  ),
  lifeline: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 12h4l2-4 4 8 2-4h4" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  ),
  shield: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l7 3v6c0 5-3 7-7 9-4-2-7-4-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  ),
  document: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M7 3h7l5 5v13H7z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h6" />
    </svg>
  ),
  map: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" />
      <path d="M9 4v14" />
      <path d="M15 6v14" />
    </svg>
  ),
  clock: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  ),
  lock: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </svg>
  ),
  alert: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M12 3l9 16H3l9-16z" />
      <path d="M12 9v4" />
      <circle cx="12" cy="17" r="1" />
    </svg>
  ),
  target: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v4" />
    </svg>
  ),
  users: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <circle cx="9" cy="8" r="3" />
      <path d="M4 20a5 5 0 0 1 10 0" />
      <circle cx="17" cy="9" r="2" />
      <path d="M15 20a4 4 0 0 1 5 0" />
    </svg>
  ),
  building: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h2" />
      <path d="M9 11h2" />
      <path d="M9 15h2" />
      <path d="M13 7h2" />
      <path d="M13 11h2" />
      <path d="M13 15h2" />
    </svg>
  ),
  check: (
    <svg className="h-full w-full" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12l4 4L19 6" />
    </svg>
  ),
}

type IconProps = {
  name: IconName
  className?: string
  title?: string
}

const Icon = ({ name, className = '', title }: IconProps) => {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/5 text-slate-900 ${className}`}
      aria-hidden={!title}
      aria-label={title}
    >
      <span className="h-5 w-5">{icons[name]}</span>
    </span>
  )
}

export default Icon


