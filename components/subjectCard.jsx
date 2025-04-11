// components/SubjectCard.jsx
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function SubjectCard({ href, icon: Icon, title, description }) {
  return (
    <Link href={href} className="group">
      <Card className="overflow-hidden transition-all duration-300 hover:shadow-hover border-gray-200 h-full transform hover:-translate-y-2">
        <div className="h-40 md:h-48 bg-primary/10 flex items-center justify-center p-6">
          <div className="rounded-full bg-white p-3 md:p-4 shadow-soft group-hover:shadow-md transition-all duration-300">
            <Icon className="h-8 w-8 md:h-10 md:w-10 text-primary" />
          </div>
        </div>
        <CardContent className="p-6 md:p-8 flex flex-col h-[calc(100%-10rem)] md:h-[calc(100%-12rem)]">
          <h3 className="text-xl md:text-2xl font-bold text-black mb-3 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm md:text-base text-text-secondary mb-4 flex-grow">
            {description}
          </p>
          <div className="flex items-center text-primary font-medium">
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}