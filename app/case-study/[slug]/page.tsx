import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, User, TrendingUp } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

const caseStudies = {
  "ecommerce-redesign": {
    title: "E-commerce Platform Redesign",
    subtitle: "Transforming Online Shopping Experience",
    description: "Complete UX overhaul that increased conversion rates by 45% and reduced cart abandonment by 30%.",
    client: "TechStore",
    year: "2024",
    duration: "3 months",
    category: "E-commerce",
    tags: ["UI Design", "UX Research", "Conversion Optimization"],
    heroImage: "/ecommerce-website-redesign-before-after.jpg",
    challenge:
      "TechStore was experiencing high cart abandonment rates and low conversion rates. Users found the checkout process confusing and the product discovery experience was poor.",
    solution:
      "I conducted comprehensive user research, redesigned the entire user journey, simplified the checkout process, and implemented a new product discovery system with advanced filtering and search capabilities.",
    results: [
      { metric: "Conversion Rate", improvement: "+45%", description: "Increased from 2.1% to 3.0%" },
      { metric: "Cart Abandonment", improvement: "-30%", description: "Reduced from 70% to 49%" },
      { metric: "User Engagement", improvement: "+60%", description: "Average session duration increased" },
      { metric: "Mobile Sales", improvement: "+80%", description: "Mobile conversion rate doubled" },
    ],
    process: [
      {
        phase: "Research & Discovery",
        description:
          "User interviews, analytics review, competitor analysis, and usability testing of the existing platform.",
        deliverables: ["User personas", "Journey maps", "Pain point analysis", "Competitive audit"],
      },
      {
        phase: "Design & Prototyping",
        description: "Wireframing, visual design, and interactive prototyping with multiple rounds of user testing.",
        deliverables: ["Wireframes", "Visual designs", "Interactive prototypes", "Design system"],
      },
      {
        phase: "Implementation & Testing",
        description: "Close collaboration with development team and continuous optimization based on user feedback.",
        deliverables: ["Development handoff", "QA testing", "Performance optimization", "Launch strategy"],
      },
    ],
    images: [
      "/ecommerce-homepage-design.jpg",
      "/modern-product-page.png",
      "/checkout-flow-design.jpg",
      "/mobile-ecommerce-design.jpg",
    ],
    testimonial: {
      quote:
        "The redesign exceeded our expectations. The new user experience is intuitive and our customers love it. We've seen significant improvements in all key metrics.",
      author: "Sarah Johnson",
      role: "Product Manager, TechStore",
    },
  },
  "healthcare-portal-refresh": {
    title: "Healthcare Portal UX Refresh",
    subtitle: "Modernizing Patient Experience with Chebigen HMS",
    description: "Complete UX overhaul of healthcare management system resulting in 55% increase in online bookings and 40% reduction in call-center load.",
    client: "Chebigen Healthcare",
    year: "2024",
    duration: "4 months",
    category: "Healthcare",
    tags: ["UX Research", "Healthcare UX", "System Design", "Accessibility"],
    heroImage: "/healthcare-management-platform-interface.jpg",
    challenge:
      "The existing healthcare portal was difficult to navigate, making it hard for patients to find doctors and book appointments. The system had poor accessibility and a confusing user interface that led to high call-center volume.",
    solution:
      "I redesigned the entire patient experience with a focus on accessibility, simplified navigation, and intuitive appointment booking. The new system features a clean, modern interface with clear information hierarchy and streamlined workflows.",
    results: [
      { metric: "Online Bookings", improvement: "+55%", description: "Patients now prefer online booking over phone calls" },
      { metric: "Call Center Load", improvement: "-40%", description: "Reduced support tickets and phone calls" },
      { metric: "Patient Satisfaction", improvement: "+35%", description: "Improved user experience scores" },
      { metric: "Accessibility Score", improvement: "+90%", description: "WCAG 2.1 AA compliance achieved" },
    ],
    process: [
      {
        phase: "User Research & Analysis",
        description:
          "Conducted patient interviews, usability testing, and accessibility audits to understand pain points and user needs.",
        deliverables: ["User personas", "Accessibility audit", "Usability testing report", "Journey mapping"],
      },
      {
        phase: "Design & Prototyping",
        description: "Created wireframes, visual designs, and interactive prototypes with focus on healthcare-specific workflows.",
        deliverables: ["Wireframes", "Visual designs", "Interactive prototypes", "Accessibility guidelines"],
      },
      {
        phase: "Development & Launch",
        description: "Collaborated with development team to implement the new system and conducted extensive testing.",
        deliverables: ["Development handoff", "QA testing", "Accessibility testing", "Launch strategy"],
      },
    ],
    images: [
      "/healthcare-dashboard-design.jpg",
      "/patient-booking-interface.jpg",
      "/doctor-directory-design.jpg",
      "/mobile-healthcare-app.jpg",
    ],
    testimonial: {
      quote:
        "The new system has transformed how our patients interact with our services. The improved accessibility and user experience has significantly reduced our support burden while increasing patient satisfaction.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, Chebigen Healthcare",
    },
    liveUrl: "https://chebigen-hms.vercel.app/",
  },
  // Add more case studies here...
}

type CaseStudyParams = {
  params: { slug: string }
}

export async function generateMetadata({ params }: CaseStudyParams): Promise<Metadata> {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
    }
  }

  return {
    title: `${caseStudy.title} - UI/UX Design Case Study`,
    description: caseStudy.description,
    keywords: [...caseStudy.tags, "UI/UX design", "case study", "product design"],
    openGraph: {
      title: `${caseStudy.title} - UI/UX Design Case Study`,
      description: caseStudy.description,
      type: "article",
      images: [caseStudy.heroImage],
    },
  }
}

export default function CaseStudyPage({ params }: CaseStudyParams) {
  const caseStudy = caseStudies[params.slug as keyof typeof caseStudies]

  if (!caseStudy) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span>Back to Portfolio</span>
            </Link>
            <Button asChild>
              <a href="/#contact">Hire Me</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">{caseStudy.category}</Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">{caseStudy.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{caseStudy.subtitle}</p>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{caseStudy.client}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{caseStudy.year}</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4" />
                <span>{caseStudy.duration}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={caseStudy.heroImage || "/placeholder.svg"}
              alt={`${caseStudy.title} case study hero image`}
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">The Challenge</h2>
                <p className="text-muted-foreground leading-relaxed">{caseStudy.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">The Solution</h2>
                <p className="text-muted-foreground leading-relaxed">{caseStudy.solution}</p>
              </div>

              {/* Process */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
                <div className="space-y-6">
                  {caseStudy.process.map((phase, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">{phase.phase}</h3>
                        <p className="text-muted-foreground mb-4">{phase.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {phase.deliverables.map((deliverable) => (
                            <Badge key={deliverable} variant="outline">
                              {deliverable}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Images */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Visual Design</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {caseStudy.images.map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${caseStudy.title} design showcase ${index + 1}`}
                      className="w-full rounded-lg shadow-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Key Results</h3>
                  <div className="space-y-4">
                    {caseStudy.results.map((result, index) => (
                      <div key={index}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">{result.metric}</span>
                          <span className="text-lg font-bold text-primary">{result.improvement}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{result.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Skills & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Testimonial */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Client Testimonial</h3>
                  <blockquote className="text-muted-foreground italic mb-4">"{caseStudy.testimonial.quote}"</blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{caseStudy.testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{caseStudy.testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Transform Your Product?</h2>
          <p className="text-muted-foreground mb-8">
            Let's discuss how I can help you achieve similar results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {caseStudy.liveUrl && (
              <Button size="lg" variant="outline" asChild>
                <a href={caseStudy.liveUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                </a>
              </Button>
            )}
            <Button size="lg" asChild>
              <a href="/#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
