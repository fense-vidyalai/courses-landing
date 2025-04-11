"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface LazyLoadSectionProps {
  children: ReactNode
  placeholder?: ReactNode
  threshold?: number
  height?: string
}

export function LazyLoadSection({ children, placeholder, threshold = 0.1, height = "auto" }: LazyLoadSectionProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView && !isLoaded) {
      // Use requestAnimationFrame to prevent layout shifts
      requestAnimationFrame(() => {
        setIsLoaded(true)
      })
    }
  }, [inView, isLoaded])

  // Create default placeholder based on height if none provided
  const defaultPlaceholder = (
    <div className="bg-gray-50 animate-pulse rounded-lg" style={{ height: height !== "auto" ? height : "300px" }} />
  )

  return (
    <div ref={ref} style={{ minHeight: isLoaded ? "auto" : height }}>
      {isLoaded ? children : placeholder || defaultPlaceholder}
    </div>
  )
}
