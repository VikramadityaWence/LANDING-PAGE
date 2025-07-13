import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import AnalysisModes from '../components/AnalysisModes'
import FAQ from '../components/FAQ'
import WhatsNext from '../components/WhatsNext'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <AnalysisModes />
      <WhatsNext />
      <FAQ />
      <Footer />
    </main>
  )
}
