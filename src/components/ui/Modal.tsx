import { useEffect } from 'react'

type ModalProps = {
  isOpen: boolean
  title: string
  onClose: () => void
  children: React.ReactNode
}

const Modal = ({ isOpen, title, onClose, children }: ModalProps) => {
  useEffect(() => {
    if (!isOpen) return
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = originalOverflow
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-sm"
        aria-hidden
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative z-10 w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl shadow-slate-900/20"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Request Help</p>
            <h3 id="modal-title" className="text-xl font-semibold text-slate-900">
              {title}
            </h3>
          </div>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
            onClick={onClose}
            aria-label="Close modal"
          >
            x
          </button>
        </div>
        <div className="pt-6">{children}</div>
      </div>
    </div>
  )
}

export default Modal

