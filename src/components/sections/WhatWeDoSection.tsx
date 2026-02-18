import Section from '../layout/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import Button from '../ui/Button'
import { packages, services } from '../../data/content'

type WhatWeDoSectionProps = {
  onRequestHelp: () => void
}

const WhatWeDoSection = ({ onRequestHelp }: WhatWeDoSectionProps) => {
  return (
    <Section
      id="what-we-do"
      title="What We Do"
      subtitle="Core forensic services for abuse detection, incident response, and recovery across listing platforms."
      className="bg-white"
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="space-y-5">
            <div className="flex items-center gap-3">
              <Icon name={service.icon as never} />
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="text-sm text-slate-500">{service.description}</p>
              </div>
            </div>
            <ul className="space-y-3 text-sm text-slate-600">
              {service.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3">
                  <Icon name="check" className="mt-0.5 h-6 w-6 bg-slate-900/10 text-slate-900" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <div className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <div className="flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Packages</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">What's Included</h3>
            <p className="mt-3 text-sm text-slate-600">
              Choose a response tier aligned to the scope of your incident. Custom engagements are
              available for complex cases.
            </p>
          </div>
          <Button variant="secondary" onClick={onRequestHelp}>
            Request Help
          </Button>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.name} className="border border-slate-200 bg-white">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-slate-900">{pkg.name}</h4>
                <p className="text-sm text-slate-600">Ideal for: {pkg.idealFor}</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Icon name="check" className="mt-0.5 h-5 w-5 bg-slate-900/10 text-slate-900" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-500">{pkg.response}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default WhatWeDoSection

