import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react'
import Navbar from '../components/layout/Navbar'
import Modal from '../components/ui/Modal'
import Input from '../components/ui/Input'
import Textarea from '../components/ui/Textarea'
import Button from '../components/ui/Button'
import HeroSection from '../components/sections/HeroSection'
import WhatWeDoSection from '../components/sections/WhatWeDoSection'
import WhySection from '../components/sections/WhySection'
import IncidentsSection from '../components/sections/IncidentsSection'
import WhoSection from '../components/sections/WhoSection'
import HowSection from '../components/sections/HowSection'
import DeliverablesSection from '../components/sections/DeliverablesSection'
import AboutSection from '../components/sections/AboutSection'
import FaqsSection from '../components/sections/FaqsSection'
import FooterSection from '../components/sections/FooterSection'

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    listingUrl: '',
    summary: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  const openModal = () => {
    setIsModalOpen(true)
    setSubmitted(false)
  }

  const closeModal = () => setIsModalOpen(false)

  const emailRegex = useMemo(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/, [])

  const validate = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    if (formData.email && !emailRegex.test(formData.email)) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (!formData.company.trim()) nextErrors.company = 'Company is required.'
    if (!formData.listingUrl.trim()) nextErrors.listingUrl = 'Listing URL is required.'
    if (!formData.summary.trim()) nextErrors.summary = 'Incident summary is required.'

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
  }

  const handleChange = (field: keyof typeof formData) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prev) => ({ ...prev, [field]: event.target.value }))
    }

  return (
    <div className="bg-slate-50 text-slate-900">
      <Navbar onRequestHelp={openModal} />
      <main>
        <HeroSection onRequestHelp={openModal} />
        <WhatWeDoSection onRequestHelp={openModal} />
        <WhySection />
        <IncidentsSection />
        <WhoSection />
        <HowSection onRequestHelp={openModal} />
        <DeliverablesSection />
        <AboutSection />
        <FaqsSection onRequestHelp={openModal} />
      </main>
      <FooterSection onRequestHelp={openModal} />

      <Modal isOpen={isModalOpen} title="Request incident response" onClose={closeModal}>
        {submitted ? (
          <div className="space-y-4 text-sm text-slate-600">
            <p className="text-lg font-semibold text-slate-900">Request received.</p>
            <p>
              Thank you. Our team will review your incident details and respond with next steps.
              If this is urgent, email{' '}
              <a
                className="font-semibold text-slate-900 underline-offset-4 hover:underline"
                href="mailto:incidents@tracecharter.com"
              >
                incidents@tracecharter.com
              </a>
              .
            </p>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange('name')}
                required
                error={errors.name}
                placeholder="Jane Doe"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange('email')}
                required
                error={errors.email}
                placeholder="jane@company.com"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Company"
                name="company"
                value={formData.company}
                onChange={handleChange('company')}
                required
                error={errors.company}
                placeholder="Company or agency"
              />
              <Input
                label="Listing URL"
                name="listingUrl"
                value={formData.listingUrl}
                onChange={handleChange('listingUrl')}
                required
                error={errors.listingUrl}
                placeholder="https://"
              />
            </div>
            <Textarea
              label="Incident summary"
              name="summary"
              value={formData.summary}
              onChange={handleChange('summary')}
              required
              error={errors.summary}
              placeholder="Describe the issue, when it started, and any recent access changes."
            />
            <div className="flex flex-wrap items-center gap-3">
              <Button type="submit">Submit Request</Button>
              <p className="text-xs text-slate-500">
                By submitting, you agree to be contacted about this incident.
              </p>
            </div>
          </form>
        )}
      </Modal>
    </div>
  )
}

export default LandingPage

