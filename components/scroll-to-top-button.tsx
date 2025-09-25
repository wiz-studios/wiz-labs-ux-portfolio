"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset
      setIsVisible(y > 300)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    try {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } catch {
      // Fallback
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }
  }

  // Hidden until first mount to avoid hydration mismatch
  if (!hasMounted) return null

  return (
    <button
      onClick={handleClick}
      aria-label="Return to top"
      className={[
        "fixed z-50 bottom-6 right-6 md:bottom-8 md:right-8",
        "transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
        // Glassmorphism base with neon border
        "glass rounded-full",
        "border border-[color:var(--neon-blue)]",
        // Size and layout
        "w-12 h-12 md:w-14 md:h-14 grid place-items-center",
        // Shadow and glow baseline
        "shadow-[0_8px_30px_rgba(99,179,237,0.08)]",
        // Hover interactions
        "hover:scale-105",
        // Soft pulsing neon aura when visible
        isVisible ? "[animation:neonGlow_2s_ease-in-out_infinite]" : "",
      ].join(" ")}
      style={{
        background:
          "radial-gradient(120px 120px at 30% 30%, rgba(99,179,237,0.12), transparent 60%), rgba(255,255,255,0.04)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        boxShadow:
          "0 2px 8px rgba(0,0,0,0.25), inset 0 0 0 1px rgba(255,255,255,0.06), 0 0 12px rgba(99,179,237,0.25)",
      }}
    >
      <ArrowUp
        size={22}
        className="text-[color:var(--neon-blue)] drop-shadow-[0_0_8px_rgba(99,179,237,0.65)]"
        aria-hidden="true"
      />
      {/* Ring effect on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-[color:var(--neon-blue)]/20 hover:ring-[color:var(--neon-blue)]/40 transition-all duration-300"
      />
    </button>
  )
}


