import Image from "next/image";

export function CombinedStatsTrust() {
  const stats = [
    { value: "100+", label: "Empowered Tutors" },
    { value: "10,000+", label: "Students Coached" },
    { value: "92%", label: "Parent Satisfaction" },
  ];

  const universityLogos = [
    { name: "University of Cambridge", src: "/images/cambridge-logo.png" },
    { name: "UC Berkeley", src: "/images/berkeley-logo.png" },
    { name: "Columbia University", src: "/images/columbia-logo.png" },
    { name: "Stanford University", src: "/images/stanford-logo.png" },
  ];

  return (
    <section className="w-full relative py-16 md:py-20 lg:py-24 overflow-hidden bg-white border-t border-gray-100">
      <div className="container relative z-10 px-4 md:px-6">
        <SectionHeader
          title="Make Your Dreams Come True"
          subtitle="Join thousands of students who achieved their academic goals and now attend prestigious universities"
        />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-black font-bold mb-6 text-sm md:text-base">
            VIDYALAI STUDENTS NOW ATTEND
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            {universityLogos.map((logo) => (
              <UniversityLogo key={logo.name} name={logo.name} src={logo.src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-4">
        {title}
      </h2>
      <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium">
        {subtitle}
      </p>
    </div>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center h-[140px] text-center bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <div className="text-2xl md:text-3xl font-bold text-black mb-2">
        {value}
      </div>
      <p className="text-sm font-medium text-black">{label}</p>
    </div>
  );
}

function UniversityLogo({ name, src }: { name: string; src: string }) {
  return (
    <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-md shadow-sm border border-gray-200 p-4">
      <div className="relative w-full h-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={name}
          fill
          sizes="(max-width: 768px) 96px, 128px"
          className="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
