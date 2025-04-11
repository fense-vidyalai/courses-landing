"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Check, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// Extracted feature item component
const FeatureItem = ({ text }) => (
  <div className="flex items-center">
    <Check className="mr-2 h-5 w-5 text-primary" />
    <span className="text-black font-medium">{text}</span>
  </div>
);

// Extracted student avatar component
const StudentAvatar = ({ num }) => (
  <div className="inline-block h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 rounded-full bg-gray-200 border-2 border-white overflow-hidden shadow-sm">
    <Image
      src={`/images/student-${num}.png`}
      width={36}
      height={36}
      alt={`Student ${num}`}
      className="h-full w-full object-cover"
      loading="lazy"
    />
  </div>
);

export function HeroSection() {
  const [subject, setSubject] = useState("");

  // AP subject options
  const apSubjects = [
    { value: "AP Biology", label: "AP Biology" },
    { value: "AP Chemistry", label: "AP Chemistry" },
    {
      value: "AP Physics 1: Algebra-Based",
      label: "AP Physics 1: Algebra-Based",
    },
    {
      value: "AP Physics 2: Algebra-Based",
      label: "AP Physics 2: Algebra-Based",
    },
    {
      value: "AP Physics C: Electricity and Magnetism",
      label: "AP Physics C: Electricity and Magnetism",
    },
    { value: "AP Physics C: Mechanics", label: "AP Physics C: Mechanics" },
    { value: "AP Calculus", label: "AP Calculus" },
    { value: "AP Calculus AB", label: "AP Calculus AB" },
    { value: "AP Calculus BC", label: "AP Calculus BC" },
    { value: "AP Statistics", label: "AP Statistics" },
    { value: "AP Microeconomics", label: "AP Microeconomics" },
    { value: "AP Macroeconomics", label: "AP Macroeconomics" },
  ];

  // Features list
  const features = [
    "Expert AP Tutors",
    "Flexible Scheduling",
    "Guaranteed Results",
  ];

  return (
    <section className="w-full bg-white pt-6 pb-8 md:py-16 lg:py-20 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1 lg:pr-8">
            {/* Hero Text */}
            <div className="space-y-3">
              <h1 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-black">
                Find Your Perfect <span className="text-primary">AP Tutor</span>{" "}
                Today
              </h1>
              <p className="text-lg md:text-xl text-text-secondary font-medium">
                Ace Your APs with Expert 1:1 Tutoring
              </p>
            </div>

            {/* Search/Filter Component */}
            <div className="mt-4 md:mt-6 bg-white rounded-lg shadow-lg p-4 border border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2">
                  <Search className="h-5 w-5 text-primary" />
                  <span className="font-medium text-black">
                    Pick the AP subject
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    aria-label="Select AP Subject"
                  >
                    <option value="">Select AP Subject</option>
                    {apSubjects.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <Link
                    href={`https://www.vidyalai.com/request?exam=AP&subject=${subject}`}
                    target="_blank"
                  >
                    <Button className="w-full h-12 md:col-span-2 bg-primary hover:bg-primary-dark text-white font-medium transition-all duration-300 transform hover:scale-105">
                      Request Lesson
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col space-y-2 mt-2">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>

            {/* Student Stats */}
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2 sm:-space-x-3">
                {[1, 2, 3, 4].map((num) => (
                  <StudentAvatar key={num} num={num} />
                ))}
              </div>
              <div className="ml-2 sm:ml-3 md:ml-4">
                <p className="text-xs sm:text-sm font-bold text-black">
                  <span className="text-primary">10,000+</span> Students
                </p>
                <p className="text-xs text-gray-600">
                  <span className="font-medium">1M+</span> Hours Taught
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-[#0a1e3c]">
              {/* Live Session Badge */}
              <div className="absolute top-2 right-2 z-10">
                <div className="bg-primary text-white text-[10px] font-medium px-1.5 py-0.5 rounded-sm shadow-md relative">
                  Live Session
                  <div className="absolute -bottom-0.5 -left-0.5 w-1 h-1 bg-primary-dark rounded-sm transform rotate-45"></div>
                </div>
              </div>

              {/* Responsive Image - Using a single responsive image with different class modifiers */}
              <div
                className="relative w-full 
                            block sm:block md:block 
                            aspect-[16/9] md:aspect-[4/5]
                            min-h-[180px]"
              >
                <Image
                  src="/images/online-tutoring-session.jpeg"
                  alt="Student engaged in online tutoring session with a tutor on screen"
                  fill
                  className="object-cover object-[center_55%] md:object-[center_center] scale-[1.3] md:scale-[1.4]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
