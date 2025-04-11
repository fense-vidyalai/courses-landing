export function Stats() {
  return (
    <section className="w-full bg-white py-16 md:py-20 border-y border-gray-100">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-2 text-center h-full">
            <div className="text-2xl md:text-3xl font-bold text-black">100+</div>
            <p className="text-sm font-medium text-black">Empowered Tutors</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center h-full">
            <div className="text-2xl md:text-3xl font-bold text-black">10,000+</div>
            <p className="text-sm font-medium text-black">Students Coached</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2 text-center h-full">
            <div className="text-2xl md:text-3xl font-bold text-black">92%</div>
            <p className="text-sm font-medium text-black">Parent Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}
