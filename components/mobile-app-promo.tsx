import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Apple, Play } from "lucide-react"
import { LazyComponent } from "./lazy-component"

export function MobileAppPromo() {
  return (
    <LazyComponent height="500px">
      <section className="w-full py-8 md:py-16 lg:py-20 bg-primary/5">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1 col-span-2 sm:col-span-1">
              <div className="space-y-3 md:space-y-4">
                <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium text-primary">
                  <span>Learn Anywhere</span>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-text-primary">
                  Take Your AP Tutoring On The Go
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-text-secondary">
                  Access tutoring sessions, study materials, and progress tracking from anywhere with our mobile app.
                </p>
              </div>

              <div className="flex flex-row gap-3 mt-4 md:mt-6">
                <Button className="flex items-center justify-center gap-1 h-10 md:h-14 px-3 md:px-6 bg-black text-white hover:bg-black/90 text-xs md:text-sm">
                  <Apple className="h-4 w-4 md:h-6 md:w-6" />
                  <div className="hidden md:flex md:flex-col">
                    <span className="text-xs text-white/80 w-full text-left">Download on the</span>
                    <span className="text-sm font-medium w-full text-left">App Store</span>
                  </div>
                  <span className="md:hidden">App Store</span>
                </Button>
                <Button className="flex items-center justify-center gap-1 h-10 md:h-14 px-3 md:px-6 bg-black text-white hover:bg-black/90 text-xs md:text-sm">
                  <Play className="h-4 w-4 md:h-6 md:w-6" />
                  <div className="hidden md:flex md:flex-col">
                    <span className="text-xs text-white/80 w-full text-left">GET IT ON</span>
                    <span className="text-sm font-medium w-full text-left">Google Play</span>
                  </div>
                  <span className="md:hidden">Google Play</span>
                </Button>
              </div>

              <div className="hidden md:flex items-center gap-2 mt-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="inline-block h-8 w-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                    >
                      <Image
                        src={`/images/parent-${i}.png`}
                        width={32}
                        height={32}
                        alt={`User ${i}`}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  <span className="font-bold text-primary">4.8★</span> from 2,000+ reviews
                </span>
              </div>
            </div>

            <div className="order-1 md:order-2 col-span-2 sm:col-span-1 flex justify-center sm:justify-end">
              <div className="relative h-[300px] w-[160px] sm:h-[350px] sm:w-[180px] md:h-[500px] md:w-[280px] lg:h-[600px] lg:w-[320px]">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-white rounded-3xl shadow-xl overflow-hidden border-4 md:border-8 border-gray-100">
                  <Image
                    src="/images/vidyalai-app-login.png"
                    alt="Vidyalai Mobile App interface showing login screen"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 180px, (max-width: 1024px) 280px, 320px"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LazyComponent>
  )
}
