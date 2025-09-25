"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"

const portfolioProjects = [
  {
    id: "fintech-mobile-app",
    title: "Fintech Mobile App Redesign",
    description:
      "UX audit and redesign of cluttered dashboard with simplified onboarding flow for seed-stage fintech startup.",
    image: "/mobile-banking-app.png",
    category: "FinTech",
    tags: ["UX Audit", "Wireframes", "Design System", "Mobile UX"],
    year: "2024",
    client: "Seed-stage Fintech Startup",
    results: "42% increase in onboarding completion, 30% increase in daily active users",
    problem: "Existing app had cluttered dashboard and poor onboarding flow",
    process: "UX audit, wireframes, modular design system, simplified onboarding",
    result: "Onboarding completion +42%, daily active users +30%",
  },
  {
    id: "ecommerce-optimization",
    title: "E-commerce UI/UX Optimization",
    description:
      "Simplified checkout process and mobile-first design to reduce cart abandonment for mid-size online retailer.",
    image: "/modern-ecommerce-website.png",
    category: "E-commerce",
    tags: ["Checkout Optimization", "Mobile-First", "Trust Signals", "Conversion"],
    year: "2024",
    client: "Mid-size Online Retailer",
    results: "Cart abandonment dropped from 65% to 38%, conversions up 22%, AOV up 15%",
    problem: "Checkout process too complex, cart abandonment at 65%",
    process: "Simplified checkout, mobile-first design, trust signals",
    result: "Cart abandonment dropped to 38%, conversions up 22%, AOV up 15%",
  },
  {
    id: "healthcare-portal-refresh",
    title: "Healthcare Web Portal UX Refresh",
    description:
      "Usability testing and accessibility-first design for doctor directory and appointment booking system.",
    image: "/healthcare-management-platform-interface.jpg",
    category: "Healthcare",
    tags: ["Usability Testing", "Accessibility", "Directory Design", "Booking UX"],
    year: "2023",
    client: "Regional Healthcare Provider",
    results: "Online bookings +55%, call-center load -40%, higher patient satisfaction",
    problem: "Hard to find doctors and book appointments",
    process: "Usability testing, filterable doctor directory, accessibility-first design",
    result: "Online bookings +55%, call-center load -40%, higher patient satisfaction",
  },
]

const categories = ["All", "FinTech", "E-commerce", "Healthcare"]

export function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((project) => project.category === selectedCategory)

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "scroll-animate" : ""}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="font-mono text-neon-blue">&lt;</span>
            UI/UX Design Portfolio
            <span className="font-mono text-neon-blue">/&gt;</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore my latest UI/UX design projects that have delivered measurable results for clients across various
            industries. Each case study demonstrates conversion-focused design solutions.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-2 mb-12 ${isVisible ? "scroll-animate" : ""}`}
          style={{ animationDelay: "0.2s" }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-300 font-mono ${
                selectedCategory === category ? "btn-tech hover-glow shadow-lg shadow-primary/25" : "glass hover-lift"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group cursor-pointer overflow-hidden border-border hover:border-neon-blue/50 transition-all duration-500 hover-glow glass-dark hover:rotate-1 hover:scale-105 ${
                isVisible ? "scroll-animate" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} - UI/UX Design Case Study showcasing ${project.category.toLowerCase()} design solutions`}
                  className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  loading={index < 3 ? "eager" : "lazy"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/50 transition-all duration-500 rounded-lg"></div>

                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="glass font-mono text-xs">
                    {project.category}
                  </Badge>
                </div>

                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                    hoveredProject === project.id ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                >
                  <Link href={`/case-study/${project.id}`}>
                    <Button
                      size="sm"
                      className="glass hover-glow btn-tech font-mono group/btn relative overflow-hidden"
                    >
                      <span className="relative z-10">Dive Into UX Flow</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      <ExternalLink className="ml-2 h-4 w-4 relative z-10" />
                      {/* Hover tooltip */}
                      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-blue/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-blue opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                        Measured in pixels & performance.
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>

              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-blue transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 line-clamp-2 font-mono text-sm">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className={`text-xs font-mono transition-colors duration-300 hover:border-neon-purple/50 hover:text-neon-purple`}
                        style={{ animationDelay: `${tagIndex * 0.1}s` }}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="text-sm text-muted-foreground font-mono">
                      <span className="font-medium text-foreground">{project.client}</span> • {project.year}
                    </div>
                    <Link href={`/case-study/${project.id}`}>
                      <Button variant="ghost" size="sm" className="group/btn font-mono hover:text-neon-green relative">
                        Interactive Preview
                        <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        {/* Hover tooltip */}
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-green/30 rounded-lg px-2 py-1 text-xs font-mono text-neon-green opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                          Where design meets tech.
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className={`text-center mt-12 ${isVisible ? "scroll-animate" : ""}`} style={{ animationDelay: "0.8s" }}>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="glass hover-glow btn-tech font-mono bg-transparent group relative overflow-hidden"
          >
            <a href="#contact">
              <span className="relative z-10">Deploy My Expertise</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/10 to-neon-blue/10 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500"></div>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10" />
              {/* Hover tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-green/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-green opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Fast-track your UI/UX success.
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
