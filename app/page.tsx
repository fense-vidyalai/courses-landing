import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { HowItWorks } from "@/components/how-it-works"
import { Benefits } from "@/components/benefits"
import { CombinedStatsTrust } from "@/components/combined-stats-trust"
import { FeaturedTutors } from "@/components/featured-tutors"
import { ExploreSubjects } from "@/components/explore-subjects"
import { FinalCTA } from "@/components/final-cta"
import { MobileAppPromo } from "@/components/mobile-app-promo"
import { Footer } from "@/components/footer"
import { Testimonials } from "@/components/testimonials"

// This page uses Static Site Generation for optimal performance
export const dynamic = "force-static"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <HowItWorks />
        <Testimonials />
        <Benefits />
        <CombinedStatsTrust />
        <FeaturedTutors />
        <ExploreSubjects />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
