import Section from '../layout/Section'
import Button from '../ui/Button'
import { steps } from '../../data/content'

type HowSectionProps = {
  onRequestHelp: () => void
}

const HowSection = ({ onRequestHelp }: HowSectionProps) => {
  return (
    <Section
      id="how"
      title="How It Works"
      subtitle="A structured, transparent process designed for speed, evidence integrity, and recovery."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {steps.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Step {index + 1}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 rounded-3xl border border-slate-200 bg-slate-900 px-8 py-10 text-white">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Mid-Response CTA</p>
            <h3 className="mt-2 text-2xl font-semibold">Need urgent incident response?</h3>
            <p className="mt-2 text-sm text-slate-300">
              Start an intake today and we will deliver a same-day evidence plan.
            </p>
          </div>
          <Button variant="secondary" onClick={onRequestHelp}>
            Request Help
          </Button>
        </div>
      </div>
    </Section>
  )
}

export default HowSection

