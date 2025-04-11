"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "./section-header"
import { useMobile } from "@/hooks/use-mobile"
import RequestButton from "./RequestButton"

const tutors = [
  {
    id: 1,
    name: "Arvind Menon",
    subject: "AP Calculus",
    position: "Five years of experience helping students excel in AP Calculus AB and BC",
    education: "B.Sc in Mathematics from IISc Bangalore, M.S. in Applied Mathematics from ETH Zurich",
    rating: 4.9,
    reviews: 127,
    price: 35,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-27_14-12-20.jpg-KtgmXfwPqQJwa9QxCwm9qaoOGuXCCe.jpeg",
    badges: ["IISc Graduate", "ETH Zurich Alum"],
  },
  {
    id: 2,
    name: "Meera Iyer",
    subject: "AP Biology",
    position: "Passionate about making complex biology topics easy to grasp",
    education: "B.Sc in Biotechnology from IISc Bangalore, M.S. in Molecular Biology from Johns Hopkins University",
    rating: 4.8,
    reviews: 93,
    price: 32,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-27_14-12-47.jpg-N2io0CkcQQg3hECj0Bu0BUoSMxKXhS.jpeg",
    badges: ["IISc Graduate", "Johns Hopkins Alum"],
  },
  {
    id: 3,
    name: "Jonathan Whitaker",
    subject: "AP Physics",
    position: "Former high school teacher with a hands-on approach to learning",
    education:
      "B.Sc in Physics from University of Illinois Urbana-Champaign, M.S. in Physics Education from University of Toronto",
    rating: 4.9,
    reviews: 156,
    price: 34,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo_2025-03-27_14-12-06.jpg-NYMqc7yQY2vxUajVBPM9PbXvZdURWK.jpeg",
    badges: ["UIUC Graduate", "Hands-on Learning"],
  },
  {
    id: 4,
    name: "Kenji Takahashi",
    subject: "AP Chemistry",
    position: "Specializes in guiding students through tricky AP Chemistry problem-solving",
    education: "B.Sc in Chemistry from University of Tokyo, M.S. in Organic Chemistry from University of Melbourne",
    rating: 4.7,
    reviews: 84,
    price: 30,
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/avatar-111a6bbc9a6e1776cbadee4670da36ee.jpg-poxwmdnIAx0C1upLdLzcjfeHPD76UO.jpeg",
    badges: ["Tokyo University Alum", "Problem-Solving Expert"],
  },
]

export function FeaturedTutors() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const isMobile = useMobile()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTutor = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tutors.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const prevTutor = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tutors.length) % tutors.length)
    setTimeout(() => setIsAnimating(false), 300)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (isAnimating) return

    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextTutor()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevTutor()
    }
  }

  // Render a single tutor card
  const renderTutorCard = (tutor: (typeof tutors)[0], index: number) => (
    <div key={tutor.id} className="w-full flex-shrink-0">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
        {/* Image section */}
        <div className="relative h-48 w-full bg-gray-100">
          <Image
            src={tutor.image || "/placeholder.svg"}
            alt={`${tutor.name}, ${tutor.subject} Tutor`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
            <div className="flex items-center">
              <div className="flex items-center text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="ml-1 text-white font-medium">{tutor.rating}</span>
              </div>
              <span className="text-xs text-white/80 ml-1">({tutor.reviews} reviews)</span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <CardContent className="p-4">
          <h3 className="font-bold text-lg mb-1 text-black">{tutor.name}</h3>
          <p className="text-primary font-medium text-sm mb-3">{tutor.subject} Tutor</p>

          <div className="flex flex-wrap gap-2 mb-3">
            {tutor.badges.map((badge, badgeIndex) => (
              <span key={badgeIndex} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>

          <div className="text-sm text-gray-600 space-y-1 mb-4">
            <p className="line-clamp-2">{tutor.position}</p>
            <p className="text-xs text-gray-500 line-clamp-2">{tutor.education}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white border-t border-gray-100" id="tutors">
      <div className="container px-4 md:px-6">
        <SectionHeader
          badge="Meet Our Tutors"
          title="Learn from the Best AP Tutors"
          description="Our tutors are experts in their fields with proven track records of student success"
        />

        {/* Mobile Slider View */}
        {isMobile && (
          <div className="mt-10">
            <div
              className="relative"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div ref={sliderRef} className="overflow-hidden">
                <div
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {tutors.map((tutor, index) => renderTutorCard(tutor, index))}
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex justify-between mt-6">
                <button
                  onClick={prevTutor}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border border-gray-200 touch-manipulation"
                  aria-label="Previous tutor"
                  disabled={isAnimating}
                >
                  <ChevronLeft className="h-5 w-5 text-black" />
                </button>

                <div className="flex items-center gap-2">
                  {tutors.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 rounded-full transition-all ${
                        index === currentIndex ? "w-6 bg-primary" : "w-2 bg-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <button
                  onClick={nextTutor}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 border border-gray-200 touch-manipulation"
                  aria-label="Next tutor"
                  disabled={isAnimating}
                >
                  <ChevronRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Grid View */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {tutors.map((tutor, index) => (
              <div key={tutor.id}>{renderTutorCard(tutor, index)}</div>
            ))}
          </div>
        )}

        <RequestButton />
      </div>
    </section>
  )
}
