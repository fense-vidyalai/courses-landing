import { Button } from "@/components/ui/button"
import { MicroscopeIcon, Atom, FlaskRoundIcon as Flask } from "lucide-react"
import { SectionHeader } from "./section-header"
import { SubjectCard } from "./subjectCard.jsx"
import RequestButton from "./RequestButton"

export function ExploreSubjects() {
  const subjects = [
    {
      href: "/ap-biology",
      icon: MicroscopeIcon,
      title: "AP Biology",
      description: "Help your child master complex biological concepts and excel in their AP Biology exam with our expert tutors."
    },
    {
      href: "/ap-physics",
      icon: Atom,
      title: "AP Physics",
      description: "Our tutors help your child understand complex physics principles and problem-solving techniques for AP Physics success."
    },
    {
      href: "/ap-chemistry",
      icon: Flask,
      title: "AP Chemistry",
      description: "Your child will build a strong foundation in chemical principles and laboratory techniques for AP Chemistry success."
    }
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white border-t border-gray-100" id="subjects">
      <div className="container px-4 md:px-6">
        <SectionHeader badge="AP Subjects" title="Explore Subjects" />

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => (
            <SubjectCard 
              key={index}
              href={subject.href}
              icon={subject.icon}
              title={subject.title}
              description={subject.description}
            />
          ))}
        </div>

        <RequestButton />
      </div>
    </section>
  )
}