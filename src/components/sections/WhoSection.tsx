import Section from '../layout/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { audiences } from '../../data/content'

const WhoSection = () => {
  return (
    <Section
      id="who"
      title="Who It's For"
      subtitle="Built for teams that cannot afford listing downtime, revenue loss, or reputational drift."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-2">
        {audiences.map((audience) => (
          <Card key={audience.title} className="space-y-4">
            <Icon name={audience.icon as never} />
            <div>
              <h3 className="text-lg font-semibold text-slate-900">{audience.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{audience.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default WhoSection

