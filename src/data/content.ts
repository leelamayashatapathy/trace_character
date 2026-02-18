export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'what-we-do', label: 'What We Do' },
  { id: 'why', label: 'Why TraceCharter' },
  { id: 'incidents', label: 'Incidents' },
  { id: 'who', label: "Who It's For" },
  { id: 'how', label: 'How It Works' },
  { id: 'deliverables', label: 'What You Get' },
  { id: 'about', label: 'About' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Contact' },
]

export const services = [
  {
    title: 'Monitoring',
    description:
      'Continuous visibility into listing changes with signals tuned for abuse and impersonation.',
    bullets: [
      'Suspicious edits and ownership changes flagged within minutes.',
      'Automated alerts for updates, reviews, and profile drift.',
      'Baseline snapshots to spot subtle tampering over time.',
    ],
    icon: 'radar',
  },
  {
    title: 'Investigation & Documentation',
    description:
      'Forensic evidence capture that explains what changed, when, and how it impacted visibility.',
    bullets: [
      'Immutable timelines that track edits, sources, and impact.',
      'Diff reports comparing known-good vs. compromised states.',
      'Attribution support for access path and ownership events.',
    ],
    icon: 'timeline',
  },
  {
    title: 'Recovery Assistance',
    description:
      'Platform-aware remediation plans and submission-ready guidance to restore trust quickly.',
    bullets: [
      'Priority recovery playbooks for Google, Apple, Yelp, and major maps.',
      'Submission packets drafted for platform support queues.',
      'Verified updates with checkpoints for reindexing and ranking.',
    ],
    icon: 'lifeline',
  },
  {
    title: 'Post-Recovery Support',
    description:
      'Ensure threats stay resolved and future abuse is detected early.',
    bullets: [
      'Duplicate cleanup and escalation guidance for repeat offenders.',
      'Ongoing monitoring to prevent relapse or review sabotage.',
      'Executive summary reporting for stakeholders and insurers.',
    ],
    icon: 'shield',
  },
]

export const packages = [
  {
    name: 'Local SEO',
    idealFor: 'Up to 3 locations needing fast verification and stabilization.',
    includes: [
      'Up to 3 listings with incident triage',
      '3-day SLA on evidence capture',
      'Diff report + recovery checklist',
    ],
    response: 'Standard response window',
  },
  {
    name: 'Chains / Urgent IR',
    idealFor: 'Up to 10 listings or multi-location brands in active compromise.',
    includes: [
      'Up to 10 listings with parallel analysis',
      '40-hour SLA with daily status updates',
      'Priority recovery submissions and escalation',
    ],
    response: 'Urgent response with on-call support',
  },
  {
    name: 'Custom',
    idealFor: 'Enterprise portfolios, complex fraud, or white-labeled response.',
    includes: [
      'Custom scope and evidence depth',
      'Dedicated incident manager',
      'Long-term monitoring + reporting',
    ],
    response: 'Custom response and SLAs',
  },
]

export const reasons = [
  {
    title: 'Evidence-First Response',
    description:
      'We capture defensible evidence before remediation so you can prove what changed and why it matters.',
    icon: 'document',
  },
  {
    title: 'Platform-Aware Recovery',
    description:
      'Each platform has unique constraints. We tailor submissions to match their review signals.',
    icon: 'map',
  },
  {
    title: 'Speed With Accountability',
    description:
      'Clear SLAs, transparent timelines, and daily updates keep teams aligned during recovery.',
    icon: 'clock',
  },
  {
    title: 'Security-Grade Handling',
    description:
      'Chain-of-custody documentation and clean-room practices protect sensitive access.',
    icon: 'lock',
  },
]

export const incidents = [
  {
    title: 'Listing Hijacks',
    description:
      'Unauthorized ownership changes, phone swaps, and address edits that reroute customers.',
    icon: 'alert',
  },
  {
    title: 'Impersonation & Duplicates',
    description:
      'Look-alike listings siphoning traffic, reviews, and calls from your verified profile.',
    icon: 'target',
  },
  {
    title: 'Review Sabotage',
    description:
      'Coordinated abuse that damages trust signals and local ranking positions.',
    icon: 'shield',
  },
  {
    title: 'Hours & Category Tampering',
    description:
      'Stealth changes that disrupt conversion, routing, and paid media attribution.',
    icon: 'timeline',
  },
]

export const audiences = [
  {
    title: 'Marketing Agencies',
    description:
      'Protect client visibility with forensic reporting that supports renewal conversations.',
    icon: 'users',
  },
  {
    title: 'Franchise Operations',
    description:
      'Ensure multi-location consistency and reduce regional abuse escalation.',
    icon: 'building',
  },
  {
    title: 'Multi-Location Brands',
    description:
      'Centralized response across hundreds of listings with unified evidence packs.',
    icon: 'radar',
  },
  {
    title: 'At-Risk SMBs',
    description:
      'Stop revenue loss fast with clear recovery actions and platform submission support.',
    icon: 'lifeline',
  },
]

export const steps = [
  {
    title: 'Rapid Intake',
    description:
      'We collect listing URLs, access context, and incident symptoms within hours.',
  },
  {
    title: 'Evidence Capture',
    description:
      'Snapshots, diffs, and metadata are preserved before any changes are made.',
  },
  {
    title: 'Forensic Analysis',
    description:
      'We map the timeline, identify impact, and document access pathways.',
  },
  {
    title: 'Recovery Plan',
    description:
      'Platform-specific submissions and remediation steps are executed and tracked.',
  },
  {
    title: 'Stabilization',
    description:
      'We monitor for relapse, verify indexing, and close the incident with reporting.',
  },
]

export const deliverables = [
  {
    title: 'Incident Evidence Pack',
    description: 'Screenshots, metadata, and signed timelines ready for internal or legal review.',
    icon: 'document',
  },
  {
    title: 'Change Diffs',
    description: 'Before-and-after comparisons that show exact edits across platforms.',
    icon: 'timeline',
  },
  {
    title: 'Platform Submissions',
    description: 'Drafted escalation packets tailored to platform requirements.',
    icon: 'map',
  },
  {
    title: 'Recovery Guidance',
    description: 'Step-by-step remediation plan with ownership verification checkpoints.',
    icon: 'lifeline',
  },
  {
    title: 'Executive Summary',
    description: 'Concise brief for stakeholders, insurers, and compliance teams.',
    icon: 'shield',
  },
]

export const faqs = [
  {
    question: 'How fast can you start?',
    answer:
      'Urgent cases can begin within hours. Standard response starts within one business day after intake.',
  },
  {
    question: 'Do you work with agencies or directly with brands?',
    answer:
      'Both. We can operate white-label for agencies or directly with in-house teams and franchise operators.',
  },
  {
    question: 'What platforms do you support?',
    answer:
      'Google Business Profile, Apple Maps, Yelp, Bing Places, and major data aggregators.',
  },
  {
    question: 'Do you remove fake reviews?',
    answer:
      'We document abusive patterns and submit platform-specific requests. Removal depends on platform policy.',
  },
  {
    question: 'What information do you need to begin?',
    answer:
      'Listing URLs, recent access history, and a brief description of the incident symptoms.',
  },
]

export const stats = [
  { label: 'Average intake time', value: '< 4 hrs' },
  { label: 'Evidence integrity', value: 'Chain-of-custody' },
  { label: 'Response coverage', value: 'Multi-platform' },
]

