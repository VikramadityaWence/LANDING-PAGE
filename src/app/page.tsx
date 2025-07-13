import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AnalysisModes from '../components/AnalysisModes'
import HowItWorks from '../components/HowItWorks'
import WhatsNext from '../components/WhatsNext'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Features />
      <AnalysisModes />
      <HowItWorks />
      <WhatsNext />
      <FAQ />
      <Footer />
    </main>
  )
}
