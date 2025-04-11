import Image from "next/image"

export function TrustBar() {
  return (
    <section className="w-full py-4 md:py-5 bg-gray-50 border-y border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center">
          <p className="text-xs md:text-sm text-gray-500 mb-3 md:mb-4 whitespace-nowrap">
            VIDYALAI STUDENTS NOW ATTEND
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-3xl mx-auto">
            {/* University of Cambridge */}
            <div className="flex items-center justify-center bg-white rounded-md p-2 shadow-sm hover:shadow-md transition-all duration-300 aspect-square">
              <div className="relative h-full w-full">
                <Image
                  src="/images/cambridge-logo.png"
                  alt="University of Cambridge"
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className="object-contain p-1"
                />
              </div>
            </div>

            {/* UC Berkeley */}
            <div className="flex items-center justify-center bg-white rounded-md p-2 shadow-sm hover:shadow-md transition-all duration-300 aspect-square">
              <div className="relative h-full w-full">
                <Image
                  src="/images/berkeley-logo.png"
                  alt="UC Berkeley"
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className="object-contain p-1"
                />
              </div>
            </div>

            {/* Columbia University */}
            <div className="flex items-center justify-center bg-white rounded-md p-2 shadow-sm hover:shadow-md transition-all duration-300 aspect-square">
              <div className="relative h-full w-full">
                <Image
                  src="/images/columbia-logo.png"
                  alt="Columbia University"
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className="object-contain p-1"
                />
              </div>
            </div>

            {/* Stanford University */}
            <div className="flex items-center justify-center bg-white rounded-md p-2 shadow-sm hover:shadow-md transition-all duration-300 aspect-square">
              <div className="relative h-full w-full">
                <Image
                  src="/images/stanford-logo.png"
                  alt="Stanford University"
                  fill
                  sizes="(max-width: 768px) 100px, 120px"
                  className="object-contain p-1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
