interface SectionHeaderProps {
  badge?: string
  title: string
  description?: string
}

export function SectionHeader({ badge, title, description }: SectionHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-3 mb-8 md:mb-10">
      {badge && (
        <div className="inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
          <span>{badge}</span>
        </div>
      )}
      <div className="space-y-2">
        <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-black">{title}</h2>
      </div>
    </div>
  )
}
