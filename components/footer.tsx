import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="relative h-24 w-24 mb-4">
              <Image
                src="/images/droplet-no-background.png"
                alt="Reflect Exterior Property Cleaning"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-gray-400 mt-4">
              Professional exterior cleaning services in Dorset. Transforming properties one clean at a time.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://www.facebook.com/ReflectWindowsAndGuttering"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/reflect.exterior.cleaning/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white p-2 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services/window-cleaning" },
                { name: "Gallery", path: "/gallery" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "About", path: "/about" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Window Cleaning", path: "/services/window-cleaning" },
                { name: "Gutter Cleaning", path: "/services/gutter-cleaning" },
                { name: "Pressure Washing", path: "/services/pressure-washing" },
                { name: "Conservatory Cleaning", path: "/services/window-cleaning" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.path} className="text-gray-400 hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start">
                <Phone size={16} className="mr-2 mt-1" />
                <a href="tel:07775083009" className="hover:text-white transition-colors">
                  07775 083009
                </a>
              </li>
              <li className="flex items-start">
                <Mail size={16} className="mr-2 mt-1" />
                <a
                  href="mailto:laurence@reflectexteriorpropertycleaning.com"
                  className="hover:text-white transition-colors"
                >
                  laurence@reflectexteriorpropertycleaning.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1" />
                <span>Dorset, UK</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Reflect Exterior Property Cleaning. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

