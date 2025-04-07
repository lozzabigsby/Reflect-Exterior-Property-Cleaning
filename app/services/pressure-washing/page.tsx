import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import RainAnimation from "@/components/rain-animation"

export default function PressureWashingPage() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader title="Our Pressure Washing Service" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <p className="text-gray-700 mb-8 text-lg">
                At Reflect Exterior Property Cleaning, we offer professional pressure washing services to restore the
                appearance of your outdoor surfaces. Our high-quality equipment and experienced team can effectively
                remove dirt, grime, algae, moss, and other contaminants from a variety of surfaces.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Before"
                    alt="Surface before pressure washing"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=After"
                    alt="Surface after pressure washing"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Surfaces We Clean</h2>
              <p className="text-gray-700 mb-6">
                Our pressure washing service is suitable for a wide range of surfaces, including:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Driveways and pathways</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Patios and decking</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Walls and fences</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Brickwork and stonework</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Concrete and tarmac</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Pressure Washing Process</h2>
              <p className="text-gray-700 mb-6">
                We take a methodical approach to pressure washing to ensure the best results:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Initial assessment of the surface and contaminants</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">
                    Pre-treatment with appropriate cleaning solutions when necessary
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">
                    Careful pressure washing at the optimal pressure for the surface
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Thorough rinsing to remove all cleaning agents</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Post-treatment sealing or protective coating (optional)</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>

                <p className="text-gray-700 mb-6">
                  Ready to transform your outdoor surfaces? Contact us today for a free quote on our professional
                  pressure washing service.
                </p>

                <Link
                  href="/contact"
                  className="block w-full bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-md transition-colors text-center mb-8"
                >
                  Enquire Now
                </Link>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Service Areas</h4>
                  <p className="text-gray-700 mb-4">
                    We provide pressure washing services across Dorset, Hampshire, Wiltshire, and parts of Somerset.
                  </p>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Contact Us</h4>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Phone:</span>{" "}
                    <a href="tel:07775083009" className="text-blue-500 hover:underline">
                      07775 083009
                    </a>
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Email:</span>{" "}
                    <a
                      href="mailto:laurence@reflectexteriorpropertycleaning.com"
                      className="text-blue-500 hover:underline"
                    >
                      laurence@reflectexteriorpropertycleaning.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

