"use client"

import { useEffect, useRef } from "react"

interface Drop {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export default function RainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create raindrops
    const drops: Drop[] = []
    const dropCount = Math.floor(window.innerWidth / 15) // Adjust density based on screen width

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1, // Start above the canvas
        size: Math.random() * 2 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.3 + 0.1, // Very subtle opacity
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw and update each drop
      drops.forEach((drop, index) => {
        ctx.beginPath()
        ctx.arc(drop.x, drop.y, drop.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(120, 180, 255, ${drop.opacity})`
        ctx.fill()

        // Update position
        drop.y += drop.speed

        // Reset if off screen
        if (drop.y > canvas.height) {
          drop.y = -10
          drop.x = Math.random() * canvas.width
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
}

