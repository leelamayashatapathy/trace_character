import React from 'react'

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  id: string
  title: string
  subtitle?: string
}

const Section = ({ id, title, subtitle, className = '', children, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={`scroll-mt-28 py-16 sm:py-20 ${className}`}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">TraceCharter</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">{title}</h2>
          {subtitle ? (
            <p className="mt-4 text-base leading-relaxed text-slate-600">{subtitle}</p>
          ) : null}
        </div>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}

export default Section

