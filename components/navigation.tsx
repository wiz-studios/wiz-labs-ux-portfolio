"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ExternalLink } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-dark border-b border-neon-blue/20 shadow-2xl shadow-neon-blue/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#home"
              className="text-xl font-bold text-foreground hover:text-neon-blue transition-all duration-300 flex items-center space-x-2 group"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-primary rounded-lg flex items-center justify-center hover-glow group-hover:animate-neon-glow">
                <span className="text-primary-foreground font-bold text-sm font-mono">WL</span>
              </div>
              <span className="font-mono">Wiz Labs</span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-neon-blue transition-all duration-300 text-sm font-medium font-mono relative group hover-lift"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transition-all duration-300 group-hover:w-full"></span>
                  <span className="absolute inset-0 rounded-md bg-neon-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild className="glass hover-glow font-mono bg-transparent">
              <a href="https://wiz-dev-studios.vercel.app" target="_blank" rel="noopener noreferrer">
                Dev Studios
                <ExternalLink className="ml-2 h-3 w-3" />
              </a>
            </Button>
            <Button asChild className="btn-tech hover-glow font-mono">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover-glow"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 glass-dark border border-neon-blue/20 rounded-lg mt-2 shadow-2xl shadow-neon-blue/10">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-muted-foreground hover:text-neon-blue hover:bg-neon-blue/10 rounded-md transition-all duration-300 font-mono"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button variant="outline" size="sm" className="w-full glass font-mono bg-transparent" asChild>
                  <a href="https://wiz-dev-studios.vercel.app" target="_blank" rel="noopener noreferrer">
                    Dev Studios
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </a>
                </Button>
                <Button asChild className="w-full btn-tech font-mono">
                  <a href="#contact">Hire Me</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
