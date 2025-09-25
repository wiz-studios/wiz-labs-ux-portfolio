"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Palette, Layers, Smartphone, Monitor, Search, TrendingUp, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI Design",
    description: "Beautiful, pixel-perfect user interfaces that capture your brand essence and engage users.",
    benefits: [
      "Custom visual design systems",
      "Responsive web & mobile interfaces",
      "Brand-aligned color schemes & typography",
      "Interactive prototypes & animations",
    ],
    deliverables: ["Design mockups", "Style guides", "Component libraries", "Interactive prototypes"],
    price: "Starting at $2,500",
  },
  {
    icon: Layers,
    title: "UX Design & Research",
    description: "Data-driven user experience design that converts visitors into customers and drives business growth.",
    benefits: [
      "User journey mapping & optimization",
      "Conversion rate optimization",
      "Usability testing & research",
      "Information architecture planning",
    ],
    deliverables: ["User research reports", "Journey maps", "Wireframes", "Usability test results"],
    price: "Starting at $3,000",
  },
  {
    icon: Smartphone,
    title: "Mobile App Design",
    description: "Native iOS and Android app designs that provide seamless user experiences across all devices.",
    benefits: [
      "Platform-specific design guidelines",
      "Intuitive navigation patterns",
      "Touch-optimized interactions",
      "App store optimization ready",
    ],
    deliverables: ["App mockups", "User flows", "Icon sets", "App store assets"],
    price: "Starting at $4,000",
  },
  {
    icon: Monitor,
    title: "Web Application Design",
    description: "Complex web application interfaces that simplify complicated workflows and improve productivity.",
    benefits: [
      "Dashboard & admin panel design",
      "Complex data visualization",
      "Multi-user role interfaces",
      "Workflow optimization",
    ],
    deliverables: ["Dashboard designs", "User role interfaces", "Data visualizations", "Workflow diagrams"],
    price: "Starting at $5,000",
  },
  {
    icon: Search,
    title: "Design System Creation",
    description: "Comprehensive design systems that ensure consistency and scalability across your entire product.",
    benefits: [
      "Reusable component libraries",
      "Brand consistency guidelines",
      "Developer handoff documentation",
      "Scalable design tokens",
    ],
    deliverables: ["Component library", "Design tokens", "Usage guidelines", "Developer documentation"],
    price: "Starting at $3,500",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Strategic design improvements that increase conversion rates and maximize your business ROI.",
    benefits: [
      "A/B testing & optimization",
      "Landing page optimization",
      "Checkout flow improvements",
      "Performance analytics setup",
    ],
    deliverables: ["Optimization reports", "A/B test designs", "Performance metrics", "Implementation roadmap"],
    price: "Starting at $2,000",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description:
      "Understanding your business goals, target audience, and project requirements through detailed consultation.",
  },
  {
    step: "02",
    title: "Research & Analysis",
    description: "Conducting user research, competitor analysis, and market validation to inform design decisions.",
  },
  {
    step: "03",
    title: "Design & Prototyping",
    description: "Creating wireframes, visual designs, and interactive prototypes with multiple iteration rounds.",
  },
  {
    step: "04",
    title: "Testing & Refinement",
    description: "User testing, feedback incorporation, and design optimization for maximum effectiveness.",
  },
  {
    step: "05",
    title: "Delivery & Support",
    description: "Final deliverables, developer handoff, and ongoing support to ensure successful implementation.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="font-mono text-neon-purple">&lt;</span>
            Services
            <span className="font-mono text-neon-purple">/&gt;</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive UI/UX design services that transform your digital presence and drive measurable business
            results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 glass-dark hover:rotate-1 hover:scale-105"
            >
              <CardHeader>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors hover-glow">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl font-mono">{service.title}</CardTitle>
                    <Badge variant="outline" className="mt-1 font-mono">
                      {service.price}
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3 font-mono">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3 font-mono">Deliverables:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs font-mono">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full group/btn btn-tech hover-glow font-mono relative overflow-hidden" asChild>
                  <a href="#contact">
                    <span className="relative z-10">
                      {index === 0 && "See the System in Action"}
                      {index === 1 && "Optimize UX Now"}
                      {index === 2 && "Prototype Your Idea"}
                      {index === 3 && "Audit & Elevate"}
                      {index === 4 && "Build Design System"}
                      {index === 5 && "Boost Conversions"}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform relative z-10" />
                    {/* Hover tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-blue/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-blue opacity-0 group-hover/btn:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {index % 2 === 0 ? "Powered by insight & motion." : "From wireframe to wow."}
                    </div>
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process */}
        <div className="glass-dark rounded-3xl p-8 lg:p-12 hover-lift">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 font-mono">
              <span className="text-neon-green">&lt;</span>My Design Process
              <span className="text-neon-green">/&gt;</span>
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven 5-step process that ensures every project delivers exceptional results and exceeds client
              expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group hover-lift">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover-glow group-hover:scale-110 transition-all duration-300">
                  <span className="text-primary-foreground font-bold text-lg font-mono">{step.step}</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2 group-hover:text-neon-blue transition-colors font-mono">
                  {step.title}
                </h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">Ready to Start Your Project?</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your design needs and create something amazing together. Contact a freelance UI/UX designer
            today.
          </p>
          <Button size="lg" asChild className="btn-tech hover-glow font-mono group relative overflow-hidden">
            <a href="#contact">
              <span className="relative z-10">Collaborate on Tech + Design</span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/20 to-neon-green/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              {/* Hover tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-neon-purple/30 rounded-lg px-3 py-1 text-xs font-mono text-neon-purple opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                Let's make users happy.
              </div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
