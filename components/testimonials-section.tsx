"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechStore",
    image: "/professional-woman-headshot.png",
    rating: 5,
    quote:
      "The redesign exceeded our expectations. The new user experience is intuitive and our customers love it. We've seen a 45% increase in conversions since launch.",
    project: "E-commerce Platform Redesign",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "DataFlow",
    image: "/professional-man-headshot.png",
    rating: 5,
    quote:
      "Outstanding work on our analytics dashboard. The complex data is now presented in a clear, actionable way. Our users are 60% more engaged with the platform.",
    project: "SaaS Analytics Dashboard",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Head of Digital",
    company: "SecureBank",
    image: "/professional-woman-headshot.png",
    rating: 5,
    quote:
      "The mobile banking app design is exceptional. Security and usability are perfectly balanced. We've seen a 40% increase in mobile adoption rates.",
    project: "Mobile Banking App",
  },
  {
    id: 4,
    name: "David Park",
    role: "Founder",
    company: "MedConnect",
    image: "/professional-man-headshot.png",
    rating: 5,
    quote:
      "The healthcare platform design simplified complex workflows beautifully. Patient satisfaction scores increased by 35% and staff efficiency improved significantly.",
    project: "Healthcare Management Platform",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "WanderLust",
    image: "/professional-woman-headshot.png",
    rating: 5,
    quote:
      "The travel booking experience is seamless and intuitive. Our booking completion rate increased by 35% and customer complaints dropped by 50%.",
    project: "Travel Booking Experience",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Product Owner",
    company: "LearnHub",
    image: "/professional-man-headshot.png",
    rating: 5,
    quote:
      "The learning platform design is engaging and motivating. Course completion rates increased by 70% and user retention improved dramatically.",
    project: "Online Learning Platform",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">Client Testimonials</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take my word for it. Here's what clients say about working with me and the results we've achieved
            together.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto border-primary/20 shadow-2xl shadow-primary/10">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-xl lg:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                "{currentTestimonial.quote}"
              </blockquote>

              <div className="flex items-center justify-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={currentTestimonial.image || "/placeholder.svg"} alt={currentTestimonial.name} />
                  <AvatarFallback>
                    {currentTestimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <div className="font-semibold text-foreground text-lg">{currentTestimonial.name}</div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                  <div className="text-sm text-primary font-medium">{currentTestimonial.project}</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:border-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Avg. Conversion Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
