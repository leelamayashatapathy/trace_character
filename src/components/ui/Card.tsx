import React from 'react'

type CardProps = React.HTMLAttributes<HTMLDivElement> & {
  emphasis?: boolean
}

const Card = ({ className = '', emphasis = false, ...props }: CardProps) => {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white/80 p-6 shadow-sm shadow-slate-900/5 backdrop-blur ${
        emphasis ? 'ring-1 ring-slate-900/10' : ''
      } ${className}`}
      {...props}
    />
  )
}

export default Card

