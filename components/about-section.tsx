"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Download, Award, Users, Zap, Target } from "lucide-react"

const skills = [
  "UI/UX Design",
  "Product Design",
  "User Research",
  "Prototyping",
  "Design Systems",
  "Figma",
  "Adobe Creative Suite",
  "Sketch",
  "InVision",
  "Principle",
  "Framer",
  "HTML/CSS",
]

const achievements = [
  {
    icon: Award,
    title: "Design Awards",
    description: "Winner of 3 international design awards including UX Design Awards 2023",
    color: "neon-blue",
  },
  {
    icon: Users,
    title: "Happy Clients",
    description: "Successfully delivered projects for 50+ clients across various industries",
    color: "neon-purple",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Average project completion time reduced by 30% through efficient design processes",
    color: "neon-green",
  },
  {
    icon: Target,
    title: "Results Driven",
    description: "Achieved an average of 40% improvement in key business metrics for clients",
    color: "primary",
  },
]

export function AboutSection() {
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

  return (
    <section ref={sectionRef} id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-5"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${isVisible ? "scroll-animate" : ""}`}>
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                <span className="font-mono text-neon-blue">&lt;</span>
                About Me
                <span className="font-mono text-neon-blue">/&gt;</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate UI/UX designer with over 5 years of experience creating digital experiences that not
                  only look beautiful but drive real business results. My approach combines user-centered design
                  principles with conversion optimization strategies to deliver products that users love and businesses
                  profit from.
                </p>
                <p>
                  Specializing in <strong className="text-neon-blue">UI/UX design</strong>,{" "}
                  <strong className="text-neon-purple">product design</strong>, and{" "}
                  <strong className="text-neon-green">user research</strong>, I help startups and established companies
                  transform their digital presence. From initial concept to final implementation, I ensure every pixel
                  serves a purpose.
                </p>
                <p>
                  When I'm not designing, you'll find me staying up-to-date with the latest design trends, contributing
                  to design communities, and mentoring aspiring designers. I believe great design is not just about
                  aesthetics—it's about solving real problems for real people.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4 font-mono">
                <span className="text-neon-blue">const</span> skills = [
              </h3>
              <div className="flex flex-wrap gap-2 ml-4">
                {skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`text-sm font-mono hover:border-neon-blue/50 hover:text-neon-blue transition-all duration-300 hover-lift ${
                      isVisible ? "scroll-animate" : ""
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    "{skill}"
                  </Badge>
                ))}
              </div>
              <p className="text-neon-blue font-mono mt-2">]</p>
            </div>

            <div
              className={`flex flex-col sm:flex-row gap-4 ${isVisible ? "scroll-animate" : ""}`}
              style={{ animationDelay: "0.6s" }}
            >
              <Button size="lg" asChild className="btn-tech hover-glow font-mono">
                <a href="#contact">Let's Work Together</a>
              </Button>
              <Button variant="outline" size="lg" className="glass hover-lift font-mono bg-transparent">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className={`space-y-8 ${isVisible ? "scroll-animate" : ""}`} style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-green/20 rounded-2xl blur-3xl animate-pulse-slow"></div>
              <Card className="relative glass-dark hover-lift">
                <CardContent className="p-8 text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue via-primary to-neon-purple flex items-center justify-center hover-glow animate-float">
                    <span className="text-4xl font-bold text-primary-foreground font-mono">UX</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2 font-mono">Senior UI/UX Designer</h3>
                  <p className="text-muted-foreground mb-6 font-mono text-sm">
                    Crafting exceptional digital experiences that convert visitors into customers
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="hover-lift cursor-pointer">
                      <div className="text-2xl font-bold text-neon-blue font-mono">5+</div>
                      <div className="text-sm text-muted-foreground font-mono">Years Experience</div>
                    </div>
                    <div className="hover-lift cursor-pointer">
                      <div className="text-2xl font-bold text-neon-purple font-mono">50+</div>
                      <div className="text-sm text-muted-foreground font-mono">Projects Completed</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className={`group glass hover:border-neon-blue/50 transition-all duration-500 hover-glow ${
                    isVisible ? "scroll-animate" : ""
                  }`}
                  style={{ animationDelay: `${0.4 + index * 0.1}s` }}
                >
                  <CardContent className="p-4 text-center">
                    <achievement.icon
                      className={`h-8 w-8 mx-auto mb-3 text-${achievement.color} group-hover:scale-110 group-hover:text-neon-blue transition-all duration-300`}
                    />
                    <h4 className="font-semibold text-foreground text-sm mb-2 font-mono">{achievement.title}</h4>
                    <p className="text-xs text-muted-foreground leading-tight">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
