
"use client"

import { useEffect, useRef } from "react"

interface Drop {
  x: number
  y: number
  size: number
  speed: number
}

export default function RainAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const drops: Drop[] = []
    const dropCount = Math.floor(window.innerWidth / 200)

    for (let i = 0; i < dropCount; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height * -1,
        size: Math.random() * 10 + 8,
        speed: Math.random() * 1.2 + 0.6,
      })
    }

    const drawDroplet = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      const gradient = ctx.createRadialGradient(x, y, size * 0.2, x, y, size)
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.6)")
      gradient.addColorStop(1, "rgba(135, 206, 235, 0.2)")

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.bezierCurveTo(x - size * 0.6, y - size * 0.8, x + size * 0.6, y - size * 0.8, x, y)
      ctx.bezierCurveTo(x + size * 0.6, y + size * 0.6, x - size * 0.6, y + size * 0.6, x, y)
      ctx.fill()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop) => {
        drawDroplet(ctx, drop.x, drop.y, drop.size)
        drop.y += drop.speed
        if (drop.y > canvas.height) {
          drop.y = -drop.size
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

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]" />
}
