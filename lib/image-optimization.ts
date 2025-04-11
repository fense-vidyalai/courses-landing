import type { ImageProps } from "next/image"

type OptimizedImageProps = {
  src: string
  alt: string
  priority?: boolean
}

export function getOptimizedImageProps(props: OptimizedImageProps): Partial<ImageProps> {
  const { src, alt, priority = false } = props

  return {
    src,
    alt,
    quality: 80,
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    priority: priority,
    loading: priority ? undefined : "lazy",
  }
}
