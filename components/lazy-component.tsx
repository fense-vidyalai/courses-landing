"use client"

import { useEffect, useState, type ReactNode } from "react"
import { useInView } from "react-intersection-observer"

interface LazyComponentProps {
  children: ReactNode
  height?: string
  className?: string
}

export function LazyComponent({ children, height = "300px", className = "" }: LazyComponentProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setIsLoaded(true)
    }
  }, [inView])

  return (
    <div ref={ref} className={className}>
      {isLoaded ? children : <div className="bg-gray-100 animate-pulse rounded-lg" style={{ height }} />}
    </div>
  )
}
