import Section from '../layout/Section'

const AboutSection = () => {
  return (
    <Section
      id="about"
      title="About"
      subtitle="TraceCharter is a specialized incident response team focused on compromised business listings and local search integrity."
      className="bg-white"
    >
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-sm text-slate-600">
          <p>
            We operate at the intersection of local SEO, platform governance, and digital forensics. Our
            playbooks are designed to preserve evidence, restore visibility, and protect long-term trust
            signals for brands that rely on local discovery.
          </p>
          <p>
            Every engagement includes a documented timeline, clear remediation path, and post-recovery
            monitoring plan. We prioritize calm execution, defensible records, and measurable recovery
            outcomes.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Operating Principles</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>Evidence before remediation.</li>
            <li>Transparent SLAs and daily status updates.</li>
            <li>Secure handling of sensitive access credentials.</li>
            <li>Platform-aware recovery steps with verification checkpoints.</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export default AboutSection

