"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, MessageCircle, Clock, CheckCircle, Send, AlertCircle } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    timeline: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setIsSubmitting(false)

      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          timeline: "",
          message: "",
        })
      }, 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send message. Please try again.")
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 tech-grid opacity-10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Card className="glass-dark border-neon-green/50 shadow-2xl shadow-neon-green/20 hover-glow">
            <CardContent className="p-12">
              <CheckCircle className="h-16 w-16 text-neon-green mx-auto mb-6 animate-float" />
              <h3 className="text-2xl font-bold text-foreground mb-4 font-mono">Message sent successfully 🚀</h3>
              <p className="text-muted-foreground mb-6 font-mono">
                Your message has been sent successfully. I'll get back to you within 24 hours to discuss your project.
              </p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    budget: "",
                    timeline: "",
                    message: "",
                  })
                }}
                className="btn-tech hover-glow font-mono"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 ${isVisible ? "scroll-animate" : ""}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            <span className="font-mono text-neon-blue">&lt;</span>
            Let's Work Together
            <span className="font-mono text-neon-blue">/&gt;</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-mono">
            Ready to transform your digital presence? Contact a freelance UI/UX designer today and let's create
            something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <Card
            className={`glass-dark border-neon-blue/30 shadow-2xl shadow-neon-blue/10 hover-glow ${isVisible ? "scroll-animate" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-mono">
                <span className="text-neon-blue">function</span> startProject() {"{"}
              </CardTitle>
              <p className="text-muted-foreground font-mono text-sm ml-4">
                // Fill out the form below and I'll get back to you within 24 hours
              </p>
            </CardHeader>
            <CardContent className="ml-4">
              {error && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400 font-mono text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-neon-blue">
                      const name =
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="glass font-mono focus:border-neon-blue/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-neon-purple">
                      const email =
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="glass font-mono focus:border-neon-purple/50"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="font-mono text-neon-green">
                    const company =
                  </Label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="glass font-mono focus:border-neon-green/50"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="budget" className="font-mono text-neon-blue">
                      const budget =
                    </Label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="glass font-mono focus:border-neon-blue/50 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:text-black"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under $5,000</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="over-50k">Over $50,000</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline" className="font-mono text-neon-purple">
                      const timeline =
                    </Label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="glass font-mono focus:border-neon-purple/50 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>option]:text-black"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-neon-green">
                    const projectDetails =
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={5}
                    required
                    className="glass font-mono focus:border-neon-green/50"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-tech hover-glow font-mono"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
              <p className="font-mono text-neon-blue mt-4">{"}"}</p>
            </CardContent>
          </Card>

          <div className={`space-y-8 ${isVisible ? "scroll-animate" : ""}`} style={{ animationDelay: "0.4s" }}>
            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-primary rounded-lg flex items-center justify-center hover-glow">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-mono">Email Me Directly</h3>
                    <p className="text-muted-foreground font-mono text-sm">For quick questions or inquiries</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full glass hover-glow font-mono bg-transparent" asChild>
                  <a href="mailto:wiz.labs1@gmail.com">wiz.labs1@gmail.com</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-purple to-accent rounded-lg flex items-center justify-center hover-glow">
                    <MessageCircle className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-mono">Response Time</h3>
                    <p className="text-muted-foreground font-mono text-sm">I typically respond within</p>
                  </div>
                </div>
                <div className="text-2xl font-bold text-neon-purple font-mono">24 hours</div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-neon-green to-chart-2 rounded-lg flex items-center justify-center hover-glow">
                    <Clock className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground font-mono">Availability</h3>
                    <p className="text-muted-foreground font-mono text-sm">Currently accepting new projects</p>
                  </div>
                </div>
                <div className="text-lg font-semibold text-neon-green font-mono">Available for hire</div>
              </CardContent>
            </Card>

            <div className="glass-dark rounded-2xl p-6 hover-glow">
              <h3 className="font-semibold text-foreground mb-4 font-mono">
                <span className="text-neon-blue">const</span> nextSteps = [
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground ml-4">
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-neon-blue to-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5 font-mono">
                    1
                  </span>
                  <span className="font-mono">"I'll review your project details and respond within 24 hours"</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-neon-purple to-accent rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5 font-mono">
                    2
                  </span>
                  <span className="font-mono">
                    "We'll schedule a discovery call to discuss your goals and requirements"
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-neon-green to-chart-2 rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold flex-shrink-0 mt-0.5 font-mono">
                    3
                  </span>
                  <span className="font-mono">"I'll provide a detailed proposal with timeline and pricing"</span>
                </div>
              </div>
              <p className="text-neon-blue font-mono mt-4">]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
