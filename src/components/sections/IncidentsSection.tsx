import Section from '../layout/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { incidents } from '../../data/content'

const IncidentsSection = () => {
  return (
    <Section
      id="incidents"
      title="Common Incidents"
      subtitle="We respond to the most common listing compromises and abuse patterns affecting local visibility."
      className="bg-white"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {incidents.map((incident) => (
          <Card key={incident.title} className="space-y-4">
            <Icon name={incident.icon as never} />
            <div>
              <h3 className="text-base font-semibold text-slate-900">{incident.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{incident.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default IncidentsSection

