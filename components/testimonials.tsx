"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./section-header";

const testimonials = [
  {
    id: 1,
    quote:
      "My daughter has been taking AP Chemistry with Vidyalai and is having a great learning so far. Her teacher Mr. Jake is very patient and teaches very well, he gives practice problems embedded in each lesson and make sure the concepts are clear. Also the Vidyalai team is very responsive and flexible. Our counselor Ms. Sowmya is easy to communicate with and make sure the classes run smoothly.",
    role: "Parent of AP Chemistry Student",
    image: "/images/parent-1.png",
  },
  {
    id: 2,
    quote:
      "My son's tutor broke down complex physics concepts in a way that finally made sense to him. He went from struggling to excelling, and we couldn't be happier with the results.",
    author: "Priya S.",
    role: "Parent of AP Physics Student",
    image: "/images/parent-2.png",
  },
  {
    id: 3,
    quote:
      "I arranged AP Biology online learning class for my daughter with at Vidyalai and I’m extremely satisfied with the experience. The instructor was very knowledgable on the subject and able to explain the concepts clearly. The rates are also affordable. I’m planning to book classes for other subjects as well. Surely recommend Vidyalai to other students looking to ace their grades.",
    author: "Paul Alappat",
    role: "Parent of AP Biology Student",
    image: "/images/parent-3.png",
  },
  {
    id: 4,
    quote:
      "I was skeptical about online tutoring at first, but Vidyalai proved me wrong. My son's AP Biology score improved from a 3 to a 5 after just three months of sessions.",
    author: "Anjali K.",
    role: "Parent of AP Biology Student",
    image: "/images/parent-4.png",
  },
  {
    id: 5,
    quote:
      "The tutors at Vidyalai don't just teach the material, they inspire a love for learning. My daughter now wants to pursue a career in environmental science after her AP experience.",
    author: "Sarah W.",
    role: "Parent of AP Environmental Science Student",
    image: "/images/parent-5.png",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100 relative overflow-hidden">
      <div className="container px-4 md:px-6 relative z-10">
        <SectionHeader
          badge="Parent Testimonials"
          title="What Parents Say"
          description="Hear from parents whose children have achieved academic excellence with Vidyalai"
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <Card className="border border-gray-200 shadow-lg overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <CardContent className="p-6 md:p-8 lg:p-10 bg-white">
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
                  {/* Profile Image - Improved mobile styling */}
                  <div className="relative w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto md:mx-0 flex-shrink-0">
                    <Image
                      src={
                        testimonials[currentIndex].image || "/placeholder.svg"
                      }
                      alt={`${testimonials[currentIndex].author} - ${testimonials[currentIndex].role}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 64px, (max-width: 1024px) 96px, 128px"
                    />
                  </div>

                  {/* Testimonial Content - Improved mobile styling */}
                  <div className="flex-1 text-left">
                    {/* Quote icon - Darker and better positioned */}
                    <Quote className="h-8 w-8 md:h-12 md:w-12 text-primary/40 mb-3 md:mb-4 mx-auto md:mx-0" />

                    <div className="min-h-[150px] md:min-h-[150px] h-full">
                      <blockquote className="text-base md:text-xl font-medium text-black leading-relaxed">
                        "{testimonials[currentIndex].quote}"
                      </blockquote>
                    </div>

                    {/* Author info - Better spacing and alignment */}
                    <div className="mt-4 md:mt-6 flex flex-col md:flex-row md:items-center">
                      <p className="font-bold text-black text-center md:text-left">
                        {testimonials[currentIndex].author}
                      </p>
                      <p className="text-sm text-primary md:ml-2 text-center md:text-left">
                        <span className="hidden md:inline">—</span>{" "}
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Improved Navigation Controls with better spacing and positioning */}
            <div className="mt-10 mb-4 flex w-full justify-center items-center">
              <button
                onClick={prevTestimonial}
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-200 touch-manipulation mr-4"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 text-black" />
              </button>

              <div className="flex items-center justify-center gap-3 mx-2">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "w-6 bg-primary"
                        : "w-2.5 bg-gray-300"
                    }`}
                    aria-hidden="true"
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-200 touch-manipulation ml-4"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
