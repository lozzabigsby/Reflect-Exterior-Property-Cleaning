interface PageHeaderProps {
  title: string
  subtitle?: string
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="bg-[#004165] text-white py-16 text-center relative">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        {subtitle && <p className="text-lg max-w-3xl mx-auto">{subtitle}</p>}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-blue-400 mt-4"></div>
      </div>
    </div>
  )
}

