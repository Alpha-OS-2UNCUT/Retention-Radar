import { Navbar } from './_components/landing/Navbar'
import { Hero } from './_components/landing/Hero'
import { ProblemSection } from './_components/landing/ProblemSection'
import { SolutionSection } from './_components/landing/SolutionSection'
import { HowItWorks } from './_components/landing/HowItWorks'
import { Benefits } from './_components/landing/Benefits'
import { DashboardPreview } from './_components/landing/DashboardPreview'
import { Pricing } from './_components/landing/Pricing'
import { FAQ } from './_components/landing/FAQ'
import { FinalCTA } from './_components/landing/FinalCTA'
import { Footer } from './_components/landing/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Benefits />
        <DashboardPreview />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
