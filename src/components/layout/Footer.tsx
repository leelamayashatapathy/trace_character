import Button from '../ui/Button'
import { navLinks } from '../../data/content'

const Footer = ({ onRequestHelp }: { onRequestHelp: () => void }) => {
  return (
    <footer id="contact" className="scroll-mt-28 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">TraceCharter</p>
              <h3 className="mt-3 text-3xl font-semibold">Ready for a calm response?</h3>
              <p className="mt-3 text-sm text-slate-300">
                Share the incident details and we will respond with an evidence-first recovery plan.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" onClick={onRequestHelp}>
                Request Help
              </Button>
              <a
                className="text-sm text-slate-200 underline-offset-4 transition hover:text-white hover:underline"
                href="mailto:incidents@tracecharter.com"
              >
                incidents@tracecharter.com
              </a>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-3">
              <p className="text-sm font-semibold">Navigate</p>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                {navLinks.map((link) => (
                  <a key={link.id} href={`#${link.id}`} className="hover:text-white">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold">Legal</p>
              <div className="flex flex-col gap-2 text-sm text-slate-300">
                <span>Terms</span>
                <span>Privacy</span>
                <span>Security</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-400">
          <p>(c) 2026 TraceCharter. All rights reserved.</p>
          <p>Incident response for compromised business listings.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

