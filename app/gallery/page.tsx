import PageHeader from "@/components/page-header"
import BeforeAfterSlider from "@/components/before-after-slider"
import RainAnimation from "@/components/rain-animation"

export default function GalleryPage() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader
        title="Before & After Gallery"
        subtitle="See the dramatic difference our professional cleaning services make - Drag the slider on each photo to compare before and after results"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Gutters"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Gutters"
                beforeAlt="Gutter filled with heavy moss and debris before cleaning"
                afterAlt="Clean gutters after professional cleaning"
              />
              <h3 className="text-lg font-semibold">Gutter filled with heavy moss and debris before cleaning</h3>
            </div>

            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Fascia"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Fascia"
                beforeAlt="Green algae and dirt on fascia and gutter before cleaning"
                afterAlt="Clean fascia and gutters after professional cleaning"
              />
              <h3 className="text-lg font-semibold">Green algae and dirt on fascia and gutter before cleaning</h3>
            </div>

            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Windows"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Windows"
                beforeAlt="Dirty windows with water spots before cleaning"
                afterAlt="Crystal clear windows after professional cleaning"
              />
              <h3 className="text-lg font-semibold">Dirty windows with water spots before cleaning</h3>
            </div>

            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Driveway"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Driveway"
                beforeAlt="Driveway with moss and algae before pressure washing"
                afterAlt="Clean driveway after pressure washing"
              />
              <h3 className="text-lg font-semibold">Driveway with moss and algae before pressure washing</h3>
            </div>

            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Conservatory"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Conservatory"
                beforeAlt="Conservatory roof with green algae and dirt before cleaning"
                afterAlt="Clean conservatory roof after professional cleaning"
              />
              <h3 className="text-lg font-semibold">Conservatory roof with green algae and dirt before cleaning</h3>
            </div>

            <div className="space-y-4">
              <BeforeAfterSlider
                beforeImage="/placeholder.svg?height=400&width=600&text=Dirty+Patio"
                afterImage="/placeholder.svg?height=400&width=600&text=Clean+Patio"
                beforeAlt="Patio with moss, weeds and stains before pressure washing"
                afterAlt="Clean patio after pressure washing"
              />
              <h3 className="text-lg font-semibold">Patio with moss, weeds and stains before pressure washing</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

