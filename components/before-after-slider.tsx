"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
  height?: number
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt,
  afterAlt,
  height = 400,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement> | MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const position = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement> | TouchEvent) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const position = (x / rect.width) * 100

    setSliderPosition(Math.min(Math.max(position, 0), 100))
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      isDragging.current = false
    }

    const handleGlobalMouseMove = (e: MouseEvent) => {
      handleMouseMove(e)
    }

    document.addEventListener("mouseup", handleGlobalMouseUp)
    document.addEventListener("mousemove", handleGlobalMouseMove)

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("mousemove", handleGlobalMouseMove)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg shadow-lg"
      style={{ height: `${height}px` }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Full width) */}
      <div className="absolute inset-0">
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
      </div>

      {/* Before Image (Clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" />
      </div>

      {/* Slider Control */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center">
          <div className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 17H3M21 7H3M18 12H6"></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">Before</div>
      <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-2 py-1 text-sm rounded">After</div>
    </div>
  )
}

