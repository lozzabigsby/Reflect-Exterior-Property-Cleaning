import PageHeader from "@/components/page-header"
import Image from "next/image"
import RainAnimation from "@/components/rain-animation"

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <RainAnimation />
      </div>

      <PageHeader
        title="About Us"
        subtitle="Learn more about Reflect Exterior Property Cleaning and our commitment to excellence"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
              <div className="w-16 h-1 bg-blue-400 mb-6"></div>

              <p className="text-gray-700 mb-6">
                Welcome to Reflect Exterior Property Cleaning — your trusted local specialist for window cleaning,
                gutter cleaning, and pressure washing services across Dorset, Somerset, Hampshire, and parts of
                Wiltshire.
              </p>

              <p className="text-gray-700 mb-6">
                We're committed to helping homeowners and businesses maintain clean, safe, and visually appealing
                properties. Whether it's removing built-up debris from your gutters, restoring shine to your windows, or
                power washing driveways, patios, and building exteriors, Reflect delivers high-quality results every
                time.
              </p>

              <p className="text-gray-700 mb-6">
                Our attention to detail, reliability, and excellent customer service set us apart. We understand the
                importance of maintaining your property's appearance and protecting it from damage caused by dirt, moss,
                and weather-related wear. That's why we use professional-grade equipment and eco-friendly cleaning
                methods to get the job done right.
              </p>

              <p className="text-gray-700 mb-6">
                At Reflect, we believe in honest work, clear communication, and building lasting relationships with our
                customers. From one-off cleans to regular maintenance, we offer flexible and affordable solutions
                tailored to your needs.
              </p>

              <p className="text-gray-700">
                Let Reflect Exterior Property Cleaning take care of the dirty work — so you can enjoy a cleaner,
                brighter property.
              </p>
            </div>

            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/placeholder.svg?height=600&width=600&text=REFLECT+LOGO"
                  alt="Reflect Exterior Property Cleaning Logo"
                  width={600}
                  height={600}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

