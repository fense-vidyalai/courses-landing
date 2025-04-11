import { Check } from "lucide-react"
import RequestButton from "./RequestButton"

export function FinalCTA() {
  const benefits = [
    "Personalized learning plans",
    "Expert AP tutors",
    "Flexible scheduling",
    "Regular progress reports",
    "Proven results",
    "Money-back guarantee"
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-primary text-white relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3 mb-8">
              <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Ready to Secure Your Child's Academic Future?
              </h2>
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Join thousands of parents who have helped their children achieve academic excellence with Vidyalai
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left w-full">
              <div className="space-y-4">
                {benefits.slice(0, 3).map((benefit, index) => (
                  <BenefitItem key={index} text={benefit} />
                ))}
              </div>
              
              <div className="space-y-4">
                {benefits.slice(3).map((benefit, index) => (
                  <BenefitItem key={index + 3} text={benefit} />
                ))}
              </div>
            </div>
            <RequestButton className="bg-white text-blue-800 hover:text-white"/>
          </div>
        </div>
      </div>
    </section>
  )
}

function BenefitItem({ text }: { text: string }) {
  return (
    <div className="flex items-start">
      <Check className="h-5 w-5 mr-3 text-white flex-shrink-0 mt-0.5" />
      <span className="text-white font-medium">{text}</span>
    </div>
  )
}