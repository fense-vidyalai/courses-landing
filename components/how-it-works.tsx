import { ClipboardList, Users, BookOpen, LucideIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import RequestButton from "./RequestButton"

// Define a consistent structure for each step
type Step = {
  icon: LucideIcon
  title: string
  description: string
}

// Array of steps to avoid repetition
const STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: "Step 1: Personalized Plan",
    description: "We assess strengths, challenges, and goals to craft a tailored AP prep plan."
  },
  {
    icon: Users,
    title: "Step 2: Expert Tutor Match",
    description: "Get paired with a top AP tutor who fits your subject needs and learning style."
  },
  {
    icon: BookOpen,
    title: "Step 3: First Lesson, Real Results",
    description: "Jumpstart your AP success with an engaging, structured first session."
  }
]

// Reusable StepCard component
const StepCard = ({ step }: { step: Step }) => {
  const { icon: Icon, title, description } = step
  
  return (
    <Card className="flex flex-col items-center text-center p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 bg-white h-full">
      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
        <Icon className="h-8 w-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-sm text-text-secondary">
        {description}
      </p>
    </Card>
  )
}

export function HowItWorks() {
  return (
    <section className="w-full bg-white py-8 md:py-12 border-t border-gray-100" id="about">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-2 md:mb-3">How Vidyalai Works</h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step, index) => (
            <StepCard key={index} step={step} />
          ))}
        </div>

        <RequestButton buttonText="Get Started"/>
      </div>
    </section>
  )
}