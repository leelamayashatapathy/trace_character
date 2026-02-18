import React from 'react'

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className = '', required, ...props }, ref) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

    return (
      <label className="space-y-2 text-sm text-slate-700" htmlFor={inputId}>
        <span className="flex items-center gap-2 font-medium">
          {label}
          {required ? <span className="text-slate-400">*</span> : null}
        </span>
        <input
          ref={ref}
          id={inputId}
          required={required}
          className={`w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 ${
            error ? 'border-rose-400 focus:border-rose-500 focus:ring-rose-500/20' : ''
          } ${className}`}
          {...props}
        />
        {error ? <p className="text-xs text-rose-600">{error}</p> : null}
      </label>
    )
  },
)

Input.displayName = 'Input'

export default Input

