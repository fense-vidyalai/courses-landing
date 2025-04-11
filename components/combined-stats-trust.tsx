import Image from "next/image"

export function CombinedStatsTrust() {
  const universityLogos = [
    { name: "University of Cambridge", src: "/images/cambridge-logo.png" },
    { name: "UC Berkeley", src: "/images/berkeley-logo.png" },
    { name: "Columbia University", src: "/images/columbia-logo.png" },
    { name: "Stanford University", src: "/images/stanford-logo.png" },
  ]

  return (
    <section className="w-full relative py-16 md:py-20 lg:py-24 overflow-hidden bg-white border-t border-gray-100">
      {/* Content Container */}
      <div className="container relative z-10 px-4 md:px-6">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4">
            Make Your Dreams Come True
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium">
            Join thousands of students who achieved their academic goals and now attend prestigious universities
          </p>
        </div>

        {/* Stats Section - Equal height containers with smaller text */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {/* Using fixed height for all containers */}
          <div className="flex flex-col items-center justify-center h-[140px] text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">100+</div>
            <p className="text-sm font-medium text-black">Empowered Tutors</p>
          </div>
          <div className="flex flex-col items-center justify-center h-[140px] text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">10,000+</div>
            <p className="text-sm font-medium text-black">Students Coached</p>
          </div>
          <div className="flex flex-col items-center justify-center h-[140px] text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-2xl md:text-3xl font-bold text-black mb-2">92%</div>
            <p className="text-sm font-medium text-black">Parent Satisfaction</p>
          </div>
        </div>

        {/* University Logos Section */}
        <div className="text-center">
          <p className="text-black font-bold mb-6 text-sm md:text-base">VIDYALAI STUDENTS NOW ATTEND</p>
          <div className="flex flex-wrap justify-center gap-8">
            {universityLogos.map((logo) => (
              <div
                key={logo.name}
                className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-200 p-4"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.name}
                    fill
                    sizes="(max-width: 768px) 96px, 128px"
                    className="object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
