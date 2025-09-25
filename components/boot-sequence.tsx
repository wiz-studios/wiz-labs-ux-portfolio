"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import "@/app/terminal.css"

const bootSequences = [
  { text: "[INIT] Mounting virtual filesystem...", delay: 600 },
  { text: "[BOOT] Loading system kernel v3.4.2...", delay: 700 },
  { text: "[MEM] Allocating 256MB creative buffer...", delay: 800 },
  { text: "[GPU] Initializing neon matrix renderer...", delay: 750 },
  { text: "[NET] Establishing quantum design link...", delay: 900 },
  { text: "[SYS] Running integrity checks...", delay: 600 },
  { text: "[LOG] All systems nominal...", delay: 500 },
  { text: "[OK] Terminal ready. Type 'help' for commands.", delay: 400, class: "text-neon-success" },
]

// Helper for random typing delays
const getRandomDelay = () => Math.floor(Math.random() * (80 - 30 + 1) + 30)

export function BootSequence() {
  const [hasSeenBoot, setHasSeenBoot] = useState(false)
  const [currentLine, setCurrentLine] = useState(0)
  const [currentChar, setCurrentChar] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const [skipAnimation, setSkipAnimation] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        setSkipAnimation(true)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])

  useEffect(() => {
    // Reset storage for testing
    localStorage.removeItem("systemBooted")
  }, [])

  // Handle typing animation
  useEffect(() => {
    if (skipAnimation) {
      setDisplayedLines(bootSequences.map(seq => seq.text))
      setCurrentLine(bootSequences.length)
      setIsTyping(false)
      setTimeout(() => setIsComplete(true), 500)
      return
    }

    if (!hasSeenBoot && currentLine < bootSequences.length) {
      const sequence = bootSequences[currentLine]
      const text = sequence.text

      if (currentChar === 0) {
        setIsTyping(true)
        setDisplayedLines(prev => [...prev, ""])
      }

      if (currentChar < text.length) {
        const timer = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev]
            newLines[currentLine] = text.substring(0, currentChar + 1)
            return newLines
          })
          setCurrentChar(prev => prev + 1)
        }, getRandomDelay())

        return () => clearTimeout(timer)
      } else {
        const timer = setTimeout(() => {
          setCurrentLine(prev => prev + 1)
          setCurrentChar(0)
          setIsTyping(false)

          if (currentLine === bootSequences.length - 1) {
            setTimeout(() => setIsComplete(true), 1000)
          }
        }, sequence.delay)

        return () => clearTimeout(timer)
      }
    }
  }, [currentLine, currentChar, hasSeenBoot, skipAnimation])

  // Don't render if user has seen boot sequence
  if (hasSeenBoot) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-background flex items-center justify-center transition-opacity duration-1000 
      ${isComplete ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      role="region"
      aria-label="System Boot Sequence"
      style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.98) 100%)',
        fontFamily: 'Geist Mono, monospace',
        textShadow: '0 0 5px rgba(0,255,0,0.5)'
      }}
    >
      {/* Skip button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setSkipAnimation(true)}
        className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
        aria-label="Skip Intro"
      >
        <X className="h-4 w-4" />
      </Button>

      {/* Boot sequence content */}
      <div className="terminal-container">
        {displayedLines.map((line, index) => (
          <div
            key={index}
            className={`terminal-line ${
              bootSequences[index]?.class || ""
            } ${index === currentLine && isTyping ? "terminal-cursor" : ""}`}
          >
            <span className="text-[#00aa00]">[TERM]</span> {line}
          </div>
        ))}
      </div>

      {/* Tech grid background with pulse effect */}
      <div className="absolute inset-0 tech-grid animate-grid-pulse opacity-10 pointer-events-none" />
      
      {/* Enhanced glow effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/10 via-neon-blue/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-neon-blue/5 to-transparent pointer-events-none" />
    </div>
  )
}