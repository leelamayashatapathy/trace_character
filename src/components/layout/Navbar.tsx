import { useEffect, useMemo, useState } from 'react'
import Button, { buttonStyles } from '../ui/Button'
import { navLinks } from '../../data/content'

const Navbar = ({ onRequestHelp }: { onRequestHelp: () => void }) => {
  const [activeId, setActiveId] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSectionOpen, setMobileSectionOpen] = useState<string | null>(null)

  const sectionIds = useMemo(() => navLinks.map((link) => link.id), [])
  const navItems = [
    { type: 'link', label: 'Home', id: 'home' },
    {
      type: 'dropdown',
      label: 'Services',
      items: [
        {
          id: 'what-we-do',
          label: 'What We Do',
          description: 'Monitoring, investigation, recovery, and post-incident support.',
        },
        {
          id: 'what-we-do',
          label: 'Packages',
          description: 'Response tiers with clear SLAs and evidence scope.',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Incidents',
      items: [
        {
          id: 'incidents',
          label: 'Common Incidents',
          description: 'Hijacks, impersonation, review abuse, and stealth edits.',
        },
        {
          id: 'who',
          label: "Who It's For",
          description: 'Agencies, franchises, multi-location brands, and SMBs.',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Process',
      items: [
        {
          id: 'how',
          label: 'How It Works',
          description: 'Structured intake, evidence capture, and recovery.',
        },
        {
          id: 'deliverables',
          label: 'What You Get',
          description: 'Evidence packs, diffs, submissions, and reporting.',
        },
      ],
    },
    {
      type: 'dropdown',
      label: 'Company',
      items: [
        {
          id: 'why',
          label: 'Why TraceCharter',
          description: 'Calm, security-grade response built for recovery.',
        },
        {
          id: 'about',
          label: 'About',
          description: 'Specialized incident response for local listings.',
        },
        {
          id: 'faqs',
          label: 'FAQs',
          description: 'Coverage, timelines, and platform support.',
        },
        {
          id: 'contact',
          label: 'Contact',
          description: 'Request help or schedule a call.',
        },
      ],
    },
  ] as const

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (!visible.length) return
        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        setActiveId(visible[0].target.id)
      },
      {
        rootMargin: '-30% 0px -55% 0px',
        threshold: [0.2, 0.4, 0.6],
      },
    )

    elements.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [sectionIds])

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/60 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3 text-slate-900">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-900" />
            <span className="absolute inset-0 rounded-full ring-1 ring-slate-900/10" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-wide">TraceCharter</p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400">Incident Response</p>
          </div>
        </a>

        <nav
          className="hidden items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 lg:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => {
            if (item.type === 'link') {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.label}
                  href={`#${item.id}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm shadow-slate-900/10'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
              )
            }

            const dropdownIds = item.items.map((dropdownItem) => dropdownItem.id)
            const isActive = dropdownIds.some((id) => id === activeId)

            return (
              <div key={item.label} className="group relative">
                <a
                  href={`#${item.items[0].id}`}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
                    isActive
                      ? 'bg-white text-slate-900 shadow-sm shadow-slate-900/10'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </a>
                <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 translate-y-2 rounded-2xl border border-slate-200 bg-white p-4 opacity-0 shadow-xl shadow-slate-900/10 transition group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="space-y-2">
                    {item.items.map((dropdownItem) => (
                      <a
                        key={dropdownItem.label}
                        href={`#${dropdownItem.id}`}
                        className="flex flex-col gap-1 rounded-xl border border-transparent px-3 py-2 text-sm text-slate-600 transition hover:border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                      >
                        <span className="text-sm font-semibold text-slate-900">{dropdownItem.label}</span>
                        <span className="text-xs text-slate-500">{dropdownItem.description}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button onClick={onRequestHelp}>
            Request Help
          </Button>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 lg:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="flex flex-col gap-1">
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${mobileOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 rounded-full bg-slate-700 transition ${mobileOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-slate-200/60 bg-white/95 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <div key={item.label} className="rounded-2xl border border-slate-200 bg-white p-3">
                {item.type === 'link' ? (
                  <a
                    href={`#${item.id}`}
                    className={`flex items-center justify-between rounded-xl px-3 py-2 text-sm font-semibold ${
                      activeId === item.id ? 'bg-slate-100 text-slate-900' : 'text-slate-600'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    <span>{item.label}</span>
                  </a>
                ) : (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 hover:bg-slate-50"
                      onClick={() =>
                        setMobileSectionOpen((prev) => (prev === item.label ? null : item.label))
                      }
                      aria-expanded={mobileSectionOpen === item.label}
                      aria-controls={`mobile-${item.label}`}
                    >
                      <span>{item.label}</span>
                      <span className="text-base text-slate-400">
                        {mobileSectionOpen === item.label ? '-' : '+'}
                      </span>
                    </button>
                    {mobileSectionOpen === item.label ? (
                      <div
                        id={`mobile-${item.label}`}
                        className="mt-2 flex flex-col gap-1"
                      >
                        {item.items.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={`#${dropdownItem.id}`}
                            className={`rounded-xl px-3 py-2 text-sm font-semibold ${
                              activeId === dropdownItem.id
                                ? 'bg-slate-100 text-slate-900'
                                : 'text-slate-600'
                            }`}
                            onClick={() => setMobileOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </>
                )}
              </div>
            ))}
            <button
              type="button"
              className={buttonStyles('primary')}
              onClick={() => {
                setMobileOpen(false)
                onRequestHelp()
              }}
            >
              Request Help
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar

