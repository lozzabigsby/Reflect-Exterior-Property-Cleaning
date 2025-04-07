import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"
import RainAnimation from "@/components/rain-animation"

export default function WindowCleaningPage() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader title="Our Window Cleaning Service" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <p className="text-gray-700 mb-8 text-lg">
                At Reflect Exterior Property Cleaning, we offer comprehensive window cleaning services for both
                residential and commercial properties. We use both traditional methods and waterfed pole systems to
                ensure all windows are cleaned to the highest standard.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=Before"
                    alt="Windows before cleaning"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500&text=After"
                    alt="Windows after cleaning"
                    width={500}
                    height={300}
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Approach</h2>
              <p className="text-gray-700 mb-6">
                We take pride in our work and pay attention to every detail. Our window cleaning service includes:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Cleaning of all glass surfaces</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Cleaning of window frames and sills</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Removal of cobwebs and debris</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Streak-free finish using professional equipment</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Careful attention to detail around edges and corners</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">Environmentally friendly cleaning solutions</span>
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
              <p className="text-gray-700 mb-6">Our window cleaning service stands out because:</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">We're fully insured and professionally trained</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">We use high-quality, eco-friendly cleaning products</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">We offer flexible scheduling to suit your needs</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">We provide consistent, reliable service</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-blue-500 mr-2 mt-1 flex-shrink-0" size={18} />
                  <span className="text-gray-700">We guarantee customer satisfaction</span>
                </li>
              </ul>
            </div>

            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get Started Today</h3>

                <p className="text-gray-700 mb-6">
                  Ready to have spotless, streak-free windows? Contact us today for a free quote or use our calculator
                  for an instant estimate.
                </p>

                <Link
                  href="/contact"
                  className="block w-full bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-4 rounded-md transition-colors text-center mb-4"
                >
                  Enquire Now
                </Link>

                <Link
                  href="/services/window-calculator"
                  className="block w-full bg-white border border-[#1e3a4c] hover:bg-gray-50 text-[#1e3a4c] font-medium py-3 px-4 rounded-md transition-colors text-center mb-8"
                >
                  <span className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                    Calculate Price
                  </span>
                </Link>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-medium text-gray-900 mb-4">Service Areas</h4>
                  <p className="text-gray-700 mb-4">
                    We provide window cleaning services across Dorset, Hampshire, Wiltshire, and parts of Somerset.
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

