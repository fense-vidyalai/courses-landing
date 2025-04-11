import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Testimonials } from "@/components/testimonials";
import { FinalCTA } from "@/components/final-cta";
import { getCourseBySlug, getAllCourses } from "../../data/courses";
import Link from "next/link";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found",
    };
  }

  return {
    title: `${course.title} Tutoring | Vidyalai`,
    description: course.metaDescription,
  };
}

export async function generateStaticParams() {
  const courses = getAllCourses();
  return courses.map((course) => ({
    slug: course.slug,
  }));
}

export default function APCoursePage({ params }: Props) {
  const course = getCourseBySlug(params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-white pt-6 pb-8 md:py-16 lg:py-20 overflow-hidden">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 lg:pr-8">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-primary mb-2">
                  <span>{course.title}</span>
                </div>
                <div className="space-y-3">
                  <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black">
                    {course.heroTitle.before}{" "}
                    <span className="text-primary">
                      {course.heroTitle.highlight}
                    </span>{" "}
                    {course.heroTitle.after}
                  </h1>
                  <p className="text-lg md:text-xl text-text-secondary font-medium">
                    {course.heroSubtitle}
                  </p>
                </div>

                <div className="flex flex-col space-y-2 mt-2">
                  {course.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-primary" />
                      <span className="text-black font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href={`https://www.vidyalai.com/request?exam=AP&subject=${course.title}`}
                    target="_blank"
                  >
                    <Button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white transition-all duration-300 transform hover:scale-105 font-medium">
                      Request {course.title} Lesson
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-[#0a1e3c]">
                  <div className="hidden md:block relative w-full aspect-[4/5]">
                    <Image
                      src={course.heroImage}
                      alt={`Student studying ${course.title}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 50vw, 600px"
                      priority
                    />
                  </div>
                  <div className="block md:hidden relative w-full aspect-[16/9]">
                    <Image
                      src={course.heroImage}
                      alt={`Student studying ${course.title}`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Overview */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span>Course Overview</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-black">
                  {course.title} Curriculum
                </h2>
                <p className="text-lg text-text-secondary max-w-[800px] mx-auto">
                  {course.curriculumDescription}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {course.icon}
                </div>
                <h3 className="text-xl font-bold text-black mb-3">
                  Course Units
                </h3>
                <ul className="space-y-2 text-text-secondary">
                  {course.units.map((unit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                      <span>{unit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-black mb-3">
                  {course.title} Exam Structure
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-black">
                      Section I: Multiple Choice
                    </h4>
                    <p className="text-text-secondary">
                      {course.examStructure.multipleChoice}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-black">
                      Section II: Free Response
                    </h4>
                    <p className="text-text-secondary">
                      {course.examStructure.freeResponse.details}
                    </p>
                    <ul className="mt-2 space-y-1 text-text-secondary">
                      {course.examStructure.freeResponse.questions.map(
                        (question, index) => (
                          <li key={index}>• {question}</li>
                        )
                      )}
                    </ul>
                  </div>
                  <div className="pt-2">
                    <p className="text-text-secondary">
                      The exam tests your understanding of the {course.subject}{" "}
                      concepts covered in the course units, as well as your
                      ability to:
                    </p>
                    <ul className="mt-2 space-y-1 text-text-secondary">
                      {course.examSkills.map((skill, index) => (
                        <li key={index}>• {skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Vidyalai */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 md:mb-10">
              <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                <span>Why Choose Us</span>
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-black">
                  Why Choose Vidyalai for {course.title}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {course.whyChooseUs.map((reason, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                >
                  <h3 className="text-xl font-bold text-black mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-text-secondary">{reason.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-10">
              <Link
                href={`https://www.vidyalai.com/request?exam=AP&subject=${course.title}`}
                target="_blank"
              >
                <Button className="h-12 px-8 bg-primary hover:bg-primary-dark text-white transition-all duration-300 transform hover:scale-105 font-medium">
                  Find Your {course.title} Tutor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-16 lg:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 md:mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-black">
                  Frequently Asked Questions
                </h2>
              </div>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {course.faqs.map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-black mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Final CTA */}
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
