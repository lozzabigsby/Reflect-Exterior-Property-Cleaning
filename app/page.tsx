"use client"

import Link from "next/link"
import Image from "next/image"
import RainAnimation from "@/components/rain-animation"
import { Monitor, Trash2, Droplets } from "lucide-react"

export default function Home() {
  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      {/* Hero Section with patterned background */}
      <section
        className="relative py-20 md:py-32 text-white"
        style={{
          background: `#004165`,
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.1) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.1) 2%, transparent 0%)`,
          backgroundSize: `100px 100px`,
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Transform Your Property's Exterior
              </h1>
              <p className="text-lg mb-8 max-w-lg">
                We specialise in revitalising the exterior of your property, ensuring it looks its best year-round.
                Serving Dorset, Hampshire, Wiltshire, and parts of Somerset.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
                >
                  Get A Free Quote
                </Link>
                <Link
                  href="/services/window-cleaning"
                  className="bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
                >
                  Explore Our Services
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/droplet-no-background.png"
                  alt="Reflect Exterior Property Cleaning Logo"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We offer a variety of professional cleaning services to keep your property looking its best.
            </p>
            <div className="w-16 h-1 bg-blue-400 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Window Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="text-blue-500">
                  <Monitor size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Window Cleaning</h3>
              <p className="text-gray-700 mb-6">
                Professional window cleaning using both waterfed pole and up a ladder methods for a streak-free finish.
              </p>
              <Link
                href="/services/window-cleaning"
                className="inline-block bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Gutter Cleaning */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="text-blue-500">
                  <Trash2 size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Gutter Cleaning</h3>
              <p className="text-gray-700 mb-6">
                Manual removal of debris using hot water and specialised detergents to ensure clear and functional
                gutters.
              </p>
              <Link
                href="/services/gutter-cleaning"
                className="inline-block bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Learn More →
              </Link>
            </div>

            {/* Pressure Washing */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="text-blue-500">
                  <Droplets size={48} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Pressure Washing</h3>
              <p className="text-gray-700 mb-6">
                Effective cleaning of garage doors, patios, driveways, decking, and house fascias/cladding.
              </p>
              <Link
                href="/services/pressure-washing"
                className="inline-block bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Learn More →
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services/window-cleaning"
              className="inline-block bg-[#1e3a4c] hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-colors"
            >
              Explore All Services →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

