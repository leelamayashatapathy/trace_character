import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

export const buttonStyles = (variant: ButtonVariant = 'primary') => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-60'

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-slate-900 text-white shadow-sm shadow-slate-900/20 hover:bg-slate-800',
    secondary:
      'bg-white text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-slate-50',
    ghost: 'text-slate-700 hover:bg-slate-100',
  }

  return `${base} ${variants[variant]}`
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', className = '', ...props }, ref) => (
    <button ref={ref} className={`${buttonStyles(variant)} ${className}`} {...props} />
  ),
)

Button.displayName = 'Button'

export default Button

