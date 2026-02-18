import Section from '../layout/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { reasons } from '../../data/content'

const WhySection = () => {
  return (
    <Section
      id="why"
      title="Why TraceCharter"
      subtitle="A calm, security-grade response built for compromised listings and high-stakes recovery."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {reasons.map((reason) => (
          <Card key={reason.title} className="flex flex-col gap-4">
            <Icon name={reason.icon as never} />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{reason.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default WhySection

