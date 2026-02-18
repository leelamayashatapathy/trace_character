import { useState } from 'react'

export type AccordionItem = {
  title: string
  content: string
}

type AccordionProps = {
  items: AccordionItem[]
}

const Accordion = ({ items }: AccordionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index
        return (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white">
            <button
              type="button"
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.title}</span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-lg transition ${
                  isOpen ? 'rotate-45 bg-slate-900 text-white' : 'text-slate-500'
                }`}
                aria-hidden
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="border-t border-slate-100 px-5 pb-5 pt-3 text-sm leading-relaxed text-slate-600">
                {item.content}
              </div>
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion

