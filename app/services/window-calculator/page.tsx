"use client"

import { useState } from "react"
import PageHeader from "@/components/page-header"
import RainAnimation from "@/components/rain-animation"
import Link from "next/link"

interface WindowType {
  name: string
  price: number
  count: number
}

export default function WindowCalculatorPage() {
  const [windowTypes, setWindowTypes] = useState<WindowType[]>([
    { name: "Small Window(s)", price: 1, count: 0 },
    { name: "Standard Window(s)", price: 1.5, count: 0 },
    { name: "Large/Bay Window(s)", price: 2, count: 0 },
    { name: "Door(s)", price: 1, count: 0 },
    { name: "Patio Door(s)", price: 2, count: 0 },
    { name: "Skylight(s)", price: 2, count: 0 },
    { name: "Conservatory Window(s)", price: 2, count: 0 },
  ])

  const handleIncrement = (index: number) => {
    const newWindowTypes = [...windowTypes]
    newWindowTypes[index].count += 1
    setWindowTypes(newWindowTypes)
  }

  const handleDecrement = (index: number) => {
    const newWindowTypes = [...windowTypes]
    if (newWindowTypes[index].count > 0) {
      newWindowTypes[index].count -= 1
    }
    setWindowTypes(newWindowTypes)
  }

  const calculateTotal = () => {
    const total = windowTypes.reduce((sum, window) => {
      return sum + window.price * window.count
    }, 0)

    // Minimum charge of £15
    return Math.max(15, total)
  }

  const resetForm = () => {
    setWindowTypes(windowTypes.map((window) => ({ ...window, count: 0 })))
  }

  return (
    <div className="relative">
      {/* Rain Animation Background */}
      <RainAnimation />

      <PageHeader title="Calculate Your Window Cleaning Quote" />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            {windowTypes.map((window, index) => (
              <div key={index} className="mb-6">
                <div className="flex items-center justify-between">
                  <label className="text-gray-700 font-medium">
                    {window.name} <span className="text-sm text-gray-500">(£{window.price.toFixed(2)} each)</span>
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="w-8 h-8 rounded-l-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      -
                    </button>
                    <div className="w-12 h-8 bg-gray-100 flex items-center justify-center">{window.count}</div>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="w-8 h-8 rounded-r-md bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 bg-gray-100 p-6 rounded-md">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">Regular Clean Price:</span>
                <span className="text-xl font-bold text-blue-500">£{calculateTotal().toFixed(2)}</span>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700 font-medium">First Clean Price:</span>
                <span className="text-xl font-bold text-blue-500">£{(calculateTotal() * 2).toFixed(2)}</span>
              </div>

              <div className="text-sm text-gray-600 mt-2">
                <p>First clean price includes extra frame & sill detailing.</p>
                <p>Minimum charge: £15</p>
              </div>
            </div>

            <div className="mt-8 flex justify-between">
              <button
                onClick={resetForm}
                className="px-6 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-gray-700 font-medium"
              >
                Reset
              </button>

              <Link
                href="/contact"
                className="px-6 py-2 bg-[#1e3a4c] hover:bg-opacity-90 text-white rounded-md font-medium"
              >
                Request Detailed Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

