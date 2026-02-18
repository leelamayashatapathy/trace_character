import Footer from '../layout/Footer'

type FooterSectionProps = {
  onRequestHelp: () => void
}

const FooterSection = ({ onRequestHelp }: FooterSectionProps) => {
  return <Footer onRequestHelp={onRequestHelp} />
}

export default FooterSection

