import { Header } from "./components/header"
import { HeroSection } from "./components/hero-section"
import { HowItWorks } from "./components/how-it-works"
import { Benefits } from "./components/benefits"
import { Stats } from "./components/stats"
import { ExploreSubjects } from "./components/explore-subjects"
import { Testimonials } from "./components/testimonials"
import { FinalCTA } from "./components/final-cta"
import { Footer } from "./components/footer"

export default function VidyalaiLandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <Benefits />
        <Stats />
        <ExploreSubjects />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
