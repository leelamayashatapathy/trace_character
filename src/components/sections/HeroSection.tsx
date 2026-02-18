import Button from '../ui/Button'
import Icon from '../ui/Icon'
import { stats } from '../../data/content'

type HeroSectionProps = {
  onRequestHelp: () => void
}

const HeroSection = ({ onRequestHelp }: HeroSectionProps) => {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-slate-800/40 blur-3xl" />
        <div className="absolute -top-20 right-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-slate-200">
              Calm, forensic response
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Incident Response for Compromised Business Listings
              </h1>
              <p className="text-base leading-relaxed text-slate-200">
                TraceCharter helps agencies, franchises, and at-risk brands investigate, document, and
                recover from listing hijacks, impersonation, and review sabotage.
              </p>
            </div>
            <div className="space-y-3 text-sm text-slate-200">
              {[
                'Evidence-grade timelines and diffs before remediation.',
                'Platform-aware recovery playbooks with clear SLAs.',
                'Secure handling of access credentials and audit trails.',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-7 w-7 bg-white/10 text-white" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button onClick={onRequestHelp}>Request Help</Button>
              <a
                className="text-sm font-semibold text-slate-200 underline-offset-4 transition hover:text-white hover:underline"
                href="mailto:incidents@tracecharter.com"
              >
                incidents@tracecharter.com
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-900/40">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Incident Intake</p>
              <h2 className="mt-3 text-2xl font-semibold">We secure the evidence first.</h2>
              <p className="mt-3 text-sm text-slate-300">
                Every case begins with an evidence capture phase that preserves listing state, access
                history, and platform metadata before recovery actions begin.
              </p>
              <div className="mt-6 grid gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4">
                    <p className="text-lg font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-xs text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6">
              <p className="text-sm text-slate-300">
                Prefer to start with a call? Email the incident summary and we will schedule an
                immediate triage.
              </p>
              <a
                className="mt-3 inline-flex text-sm font-semibold text-white underline-offset-4 hover:underline"
                href="mailto:incidents@tracecharter.com"
              >
                incidents@tracecharter.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

