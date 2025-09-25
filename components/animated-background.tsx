"use client"

import { useEffect, useRef } from "react"

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId = 0
    let particles: Particle[] = []
    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    const colors = [
      getComputedStyle(document.documentElement).getPropertyValue("--neon-blue").trim() || "#63b3ed",
      getComputedStyle(document.documentElement).getPropertyValue("--neon-green").trim() || "#34d399",
      getComputedStyle(document.documentElement).getPropertyValue("--neon-purple").trim() || "#a78bfa",
    ]

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      initParticles()
    }

    const density = 0.08 // particles per 10,000 px^2 (balanced for performance)
    const maxParticles = 180

    const initParticles = () => {
      const targetCount = Math.min(Math.floor((width * height) / 10000 * density * 100), maxParticles)
      particles = new Array(targetCount).fill(0).map(() => createParticle())
    }

    const rand = (min: number, max: number) => Math.random() * (max - min) + min

    const createParticle = (): Particle => {
      const speed = rand(0.05, 0.25)
      const angle = rand(0, Math.PI * 2)
      return {
        x: rand(0, width),
        y: rand(0, height),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        radius: rand(0.6, 1.6),
        color: colors[Math.floor(rand(0, colors.length))],
      }
    }

    let lastTime = performance.now()

    const draw = (now: number) => {
      const dt = Math.min(32, now - lastTime)
      lastTime = now

      ctx.clearRect(0, 0, width, height)

      // Background subtle fade for trails
      // ctx.fillStyle = "rgba(0,0,0,0.02)"
      // ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      const mouse = mouseRef.current

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // slight mouse repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const influenceRadius = 120
          if (dist2 < influenceRadius * influenceRadius && dist2 > 0.0001) {
            const force = 0.15 / (dist2 + 40)
            p.vx += (dx * force)
            p.vy += (dy * force)
          }
        }

        p.x += p.vx * dt
        p.y += p.vy * dt

        // soft bounds (wrap)
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        if (p.y > height + 20) p.y = -20

        // draw particle glow
        ctx.beginPath()
        ctx.fillStyle = p.color
        ctx.globalAlpha = 0.45
        ctx.shadowBlur = 12
        ctx.shadowColor = p.color
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // draw linking lines
      ctx.shadowBlur = 0
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist2 = dx * dx + dy * dy
          const maxDist = 140
          if (dist2 < maxDist * maxDist) {
            const t = 1 - Math.sqrt(dist2) / maxDist
            ctx.beginPath()
            ctx.strokeStyle = p1.color
            ctx.globalAlpha = 0.08 + t * 0.10
            ctx.lineWidth = 0.8
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      ctx.globalAlpha = 1
      animationFrameId = requestAnimationFrame(draw)
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }
    const handleMouseLeave = () => {
      mouseRef.current.active = false
    }

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("mouseleave", handleMouseLeave)
    resize()
    animationFrameId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />
    </div>
  )
}


