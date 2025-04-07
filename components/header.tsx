"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Phone, ChevronDown } from "lucide-react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-32">
            <Image
              src="/images/reflect-logo.png"
              alt="Reflect Exterior Property Cleaning"
              width={150}
              height={50}
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/"
            className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname === "/" ? "text-blue-600" : ""}`}
          >
            Home
          </Link>

          <div className="relative group">
            <button
              className={`flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname.includes("/services") ? "text-blue-600" : ""}`}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>

            <div
              className={`absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden z-50 ${servicesOpen ? "block" : "hidden"} group-hover:block`}
            >
              <Link
                href="/services/window-cleaning"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Window Cleaning
              </Link>
              <Link
                href="/services/gutter-cleaning"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Gutter Cleaning
              </Link>
              <Link
                href="/services/pressure-washing"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Pressure Washing
              </Link>
              <Link
                href="/services/window-calculator"
                className="block px-4 py-2 text-sm text-gray-800 hover:bg-blue-50 hover:text-blue-600"
              >
                Window Calculator
              </Link>
            </div>
          </div>

          <Link
            href="/gallery"
            className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname === "/gallery" ? "text-blue-600" : ""}`}
          >
            Gallery
          </Link>

          <Link
            href="/testimonials"
            className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname === "/testimonials" ? "text-blue-600" : ""}`}
          >
            Testimonials
          </Link>

          <Link
            href="/about"
            className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname === "/about" ? "text-blue-600" : ""}`}
          >
            About
          </Link>

          <Link
            href="/contact"
            className={`text-gray-800 hover:text-blue-600 font-medium transition-colors ${pathname === "/contact" ? "text-blue-600" : ""}`}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="tel:07775083009"
          className="flex items-center justify-center bg-[#1e3a4c] hover:bg-opacity-90 text-white rounded-md px-4 py-2 transition-colors"
        >
          <Phone className="mr-2 h-4 w-4" />
          <span>07775 083009</span>
        </Link>
      </div>
    </header>
  )
}

