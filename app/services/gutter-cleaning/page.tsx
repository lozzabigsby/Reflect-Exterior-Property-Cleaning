import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import RainAnimation from "@/components/rain-animation"

export default function GutterCleaningPage() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader title="Our Gutter Cleaning Service" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <p className="text-gray-700 mb-8 text-lg">
                At Reflect Exterior Property Cleaning, we provide thorough gutter cleaning services to prevent water
                damage and maintain your property's integrity. Blocked gutters can lead to serious issues including
                water damage to walls and foundations, so regular maintenance is essential.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Before"
                    alt="Gutters before cleaning"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=After"
                    alt="Gutters after cleaning"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Gutter Cleaning Process</h2>
              <p className="text-gray-700 mb-6">Our comprehensive gutter cleaning service includes:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Complete removal of leaves, moss, and debris from gutters</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Clearing and testing of downpipes to ensure proper water flow</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Inspection of gutter joints and brackets</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Cleaning of fascia boards and soffits</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Removal of moss and algae growth</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Minor repairs to guttering where possible</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Regular Gutter Cleaning</h2>
              <p className="text-gray-700 mb-6">Regular gutter maintenance provides several important benefits:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Prevents water damage to your property's walls and foundations</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Reduces the risk of damp and mold inside your home</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Extends the lifespan of your guttering system</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Improves the appearance of your property</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Prevents pest infestations in blocked gutters</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>

                <p className="text-gray-700 mb-6">
                  Don't wait until your gutters are overflowing. Contact us today for a free quote on our professional
                  gutter cleaning service.
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
                    We provide gutter cleaning services across Dorset, Hampshire, Wiltshire, and parts of Somerset.
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

