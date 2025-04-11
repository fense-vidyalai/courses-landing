import { Clock, BookOpen, GraduationCap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"
import RequestButton from "./RequestButton"

export function Benefits() {
  return (
    <section className="w-full py-8 md:py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <SectionHeader badge="Why Choose Vidyalai" title="Why choose Vidyalai for AP Lessons" />

        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Benefit 1: Flexible & Effective */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full text-center transform hover:-translate-y-2 overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <Clock className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Flexible & Effective</h3>
                <p className="text-text-secondary text-base mb-4 flex-grow">
                  Online sessions that fit your schedule without sacrificing results.
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    Convenient Learning
                  </span>
                </div>
              </div>
            </div>

            {/* Benefit 2: Curriculum-Aligned Learning */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full text-center transform hover:-translate-y-2 overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Curriculum-Aligned Learning</h3>
                <p className="text-text-secondary text-base mb-4 flex-grow">
                  Study with the same textbooks and tutors who know your coursework inside out.
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    100% Curriculum Aligned
                  </span>
                </div>
              </div>
            </div>

            {/* Benefit 3: Elite AP Tutors */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 h-full text-center transform hover:-translate-y-2 overflow-hidden">
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">Elite AP Tutors</h3>
                <p className="text-text-secondary text-base mb-4 flex-grow">
                  Learn from experts with advanced degrees and a 98% success rate in AP exams.
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    98% Success Rate
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RequestButton />
      </div>
    </section>
  )
}
