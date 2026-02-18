import Section from '../layout/Section'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import { deliverables } from '../../data/content'

const DeliverablesSection = () => {
  return (
    <Section
      id="deliverables"
      title="What You Get"
      subtitle="Concrete artifacts that support recovery, accountability, and stakeholder alignment."
      className="bg-slate-50"
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {deliverables.map((deliverable) => (
          <Card key={deliverable.title} className="space-y-4">
            <Icon name={deliverable.icon as never} />
            <div>
              <h3 className="text-base font-semibold text-slate-900">{deliverable.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{deliverable.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}

export default DeliverablesSection

