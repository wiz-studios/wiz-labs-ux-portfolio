"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 tech-grid animate-tech-grid opacity-30"></div>

      <div className="absolute top-20 left-10 w-20 h-20 border border-neon-blue/30 rotate-45 animate-float opacity-20"></div>
      <div
        className="absolute top-40 right-20 w-16 h-16 border border-neon-purple/30 rotate-12 animate-float opacity-20"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-12 h-12 border border-neon-green/30 rotate-45 animate-float opacity-20"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                <span className="block">Freelance</span>
                <span className="block text-primary neon-text">UI/UX Designer</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-light font-mono">
                I design clean, modern, and conversion-focused digital experiences that help businesses grow and users
                stay delighted.
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I specialize in creating pixel-perfect user interfaces and seamless user experiences for modern digital
              products. From concept to conversion, I help businesses build design systems that drive results through{" "}
              <strong className="text-foreground">UI/UX design</strong>,{" "}
              <strong className="text-foreground">product design</strong>, and{" "}
              <strong className="text-foreground">user research</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="group btn-tech hover-glow relative overflow-hidden">
                <a href="#contact" aria-label="Contact freelance UI/UX designer">
                  <span className="relative z-10">Launch Your Project</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform relative z-10" />
                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-blue/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-blue opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Design, engineered for impact.
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="glass hover-lift bg-transparent group relative overflow-hidden"
              >
                <a href="#portfolio" aria-label="View UI/UX design portfolio">
                  <span className="relative z-10">Explore Design Process</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-purple/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
                  <Download className="ml-2 h-4 w-4 relative z-10" />
                  {/* Hover tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-green/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                    Where design meets tech.
                  </div>
                </a>
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-neon-blue font-mono">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-neon-purple font-mono">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="hover-lift cursor-pointer">
                <div className="text-2xl font-bold text-neon-green font-mono">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div
            className={`relative ${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-green/20 rounded-2xl blur-3xl animate-pulse-slow"></div>

              <div className="relative glass-dark rounded-2xl p-8 hover-lift">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-primary rounded-full flex items-center justify-center hover-glow">
                      <span className="text-primary-foreground font-bold text-lg font-mono">UI</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-neon-blue transition-colors">
                        User Interface Design
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">Pixel-perfect designs</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-accent rounded-full flex items-center justify-center hover-glow">
                      <span className="text-accent-foreground font-bold text-lg font-mono">UX</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-neon-purple transition-colors">
                        User Experience
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">Conversion-focused flows</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-chart-2 rounded-full flex items-center justify-center hover-glow">
                      <span className="text-primary-foreground font-bold text-lg font-mono">PD</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-neon-green transition-colors">
                        Product Design
                      </h3>
                      <p className="text-sm text-muted-foreground font-mono">End-to-end solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
