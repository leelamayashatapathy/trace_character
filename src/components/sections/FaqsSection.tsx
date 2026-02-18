import Section from '../layout/Section'
import Accordion from '../ui/Accordion'
import Button from '../ui/Button'
import { faqs } from '../../data/content'

type FaqsSectionProps = {
  onRequestHelp: () => void
}

const FaqsSection = ({ onRequestHelp }: FaqsSectionProps) => {
  return (
    <Section
      id="faqs"
      title="FAQs"
      subtitle="Common questions about incident response, recovery timelines, and platform coverage."
      className="bg-slate-50"
    >
      <Accordion items={faqs.map((faq) => ({ title: faq.question, content: faq.answer }))} />
      <div className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600 sm:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold text-slate-900">Need detailed guidance?</p>
          <p>
            Email us at{' '}
            <a
              className="font-semibold text-slate-900 underline-offset-4 hover:underline"
              href="mailto:incidents@tracecharter.com"
            >                                                                                                                                                                                                                                                                                                                                                                                                                                                            
              incidents@tracecharter.com
            </a>
            , or open the request form for a structured intake.
          </p>
          <Button variant="secondary" onClick={onRequestHelp}>
            Open Contact Form
          </Button>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Schedule a Call</p>
          <p className="mt-2 text-sm text-slate-600">
            Prefer a live walkthrough? Request a scheduling link and we will coordinate a call.
          </p>
          <a
            className="mt-3 inline-flex text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
            href="mailto:incidents@tracecharter.com?subject=Schedule%20a%20call"
          >
            Request scheduling
          </a>
        </div>
      </div>
    </Section>
  )
}

export default FaqsSection
