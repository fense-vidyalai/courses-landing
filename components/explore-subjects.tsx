"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  MicroscopeIcon,
  Atom,
  FlaskRoundIcon as Flask,
  CalculatorIcon,
  ChartBarIcon,
  BitcoinIcon,
} from "lucide-react";
import { SectionHeader } from "./section-header";
import { SubjectCard } from "./subjectCard.jsx";
import RequestButton from "./RequestButton";

export function ExploreSubjects() {
  const subjects = [
    {
      href: "/ap/ap-biology",
      icon: MicroscopeIcon,
      title: "AP Biology",
      description:
        "Help your child master complex biological concepts and excel in their AP Biology exam with our expert tutors.",
    },
    {
      href: "/ap/ap-chemistry",
      icon: Flask,
      title: "AP Chemistry",
      description:
        "Your child will build a strong foundation in chemical principles and laboratory techniques for AP Chemistry success.",
    },
    {
      href: "/ap/ap-physics-1",
      icon: Atom,
      title: "AP Physics 1: Algebra-Based",
      description:
        "Strengthen your child's grasp on algebra-based physics concepts and problem-solving techniques to ensure success in the AP Physics 1 exam.",
    },
    {
      href: "/ap/ap-physics-2",
      icon: Atom,
      title: "AP Physics 2: Algebra-Based",
      description:
        "Encourage your child to build on their knowledge of algebra-based physics, preparing them to excel in the AP Physics 2 exam with expert support.",
    },
    {
      href: "/ap/ap-physics-c-electricity-and-magnetism",
      icon: Atom,
      title: "AP Physics C: Electricity and Magnetism",
      description:
        "Enrich your child's understanding of electricity and magnetism with tailored tutoring that paves the way for AP Physics C exam success.",
    },
    {
      href: "/ap/ap-physics-c-mechanics",
      icon: Atom,
      title: "AP Physics C: Mechanics",
      description:
        "Empower your child to master the dynamics of mechanics and achieve exceptional results in the AP Physics C exam with our expert tutors.",
    },
    {
      href: "/ap/ap-calculus",
      icon: CalculatorIcon,
      title: "AP Calculus",
      description:
        "Empower your child to grasp essential calculus concepts and enhance their problem-solving skills to shine in the exam.",
    },
    {
      href: "/ap/ap-calculus-ab",
      icon: CalculatorIcon,
      title: "AP Calculus AB",
      description:
        "Support your child in understanding core calculus principles and achieving standout results on the AP Calculus AB exam with our experienced guidance.",
    },
    {
      href: "/ap/ap-calculus-bc",
      icon: CalculatorIcon,
      title: "AP Calculus BC",
      description:
        "Equip your child with advanced calculus strategies and the confidence to excel in the challenging AP Calculus BC exam.",
    },
    {
      href: "/ap/ap-statistics",
      icon: ChartBarIcon,
      title: "AP Statistics",
      description:
        "Guide your child to a deeper understanding of data analysis and statistical methods, ensuring they excel in their AP Statistics exam.",
    },
    {
      href: "/ap/ap-microeconomics",
      icon: BitcoinIcon,
      title: "AP Microeconomics",
      description:
        "Help your child navigate the fundamentals of microeconomic theories and market dynamics to achieve high marks in AP Microeconomics.",
    },
    {
      href: "/ap/ap-macroeconomics",
      icon: BitcoinIcon,
      title: "AP Macroeconomics",
      description:
        "Enable your child to explore the broader economic landscape and excel in the AP Macroeconomics exam with our knowledgeable tutors.",
    },
  ];

  // Slider settings
  const itemsPerSlide = 3;
  const totalSubjects = subjects.length;
  const totalSlides = Math.ceil(totalSubjects / itemsPerSlide);

  // Track the starting index of the current slide.
  const [startIndex, setStartIndex] = useState(0);
  const activeSlide = startIndex / itemsPerSlide;

  // Handlers for navigation
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsPerSlide, 0));
  };

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + itemsPerSlide, totalSubjects - itemsPerSlide)
    );
  };

  // Subjects to display in the current slide
  const visibleSubjects = subjects.slice(
    startIndex,
    startIndex + itemsPerSlide
  );

  return (
    <section
      className="w-full py-12 md:py-16 lg:py-20 bg-white border-t border-gray-100"
      id="subjects"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader badge="AP Subjects" title="Explore Subjects" />

        <div className="relative">
          {/* Slider Content */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-3 gap-6">
            {visibleSubjects.map((subject, index) => (
              <SubjectCard
                key={index}
                href={subject.href}
                icon={subject.icon}
                title={subject.title}
                description={subject.description}
              />
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-200 disabled:opacity-50"
              aria-label="Previous subjects"
            >
              <ChevronLeft className="h-5 w-5 text-black" />
            </button>
            <div className="flex items-center justify-center gap-3 mx-2 mt-4">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <div
                  key={index}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-6 bg-primary"
                      : "w-2.5 bg-gray-300"
                  }`}
                  aria-hidden="true"
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={startIndex >= totalSubjects - itemsPerSlide}
              className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 border border-gray-200 disabled:opacity-50"
              aria-label="Next subjects"
            >
              <ChevronRight className="h-5 w-5 text-black" />
            </button>
          </div>
        </div>
        <div className="mt-12">
          <RequestButton />
        </div>
      </div>
    </section>
  );
}
