import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span className="font-mono text-sm">Back to Home</span>
            </Link>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-muted-foreground text-lg">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <div className="space-y-8">
              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Agreement to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Wiz Labs' services, you accept and agree to be bound by the terms and provision
                  of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Services Provided</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Wiz Labs provides the following design and development services:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• UX/UI Design and Research</li>
                  <li>• Web Development and Implementation</li>
                  <li>• Design System Creation</li>
                  <li>• Prototyping and User Testing</li>
                  <li>• Consultation and Strategy</li>
                </ul>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Project Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Project Scope</h3>
                    <p className="leading-relaxed">
                      All projects begin with a detailed scope of work that outlines deliverables, timelines, and
                      expectations. Changes to the scope may result in additional costs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Revisions</h3>
                    <p className="leading-relaxed">
                      Each project includes a specified number of revision rounds. Additional revisions beyond the
                      agreed scope will be billed at our standard hourly rate.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Timeline</h3>
                    <p className="leading-relaxed">
                      Project timelines are estimates based on the agreed scope. Delays caused by client feedback,
                      content provision, or scope changes may extend the timeline.
                    </p>
                  </div>
                </div>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Payment Terms</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Payment terms will be specified in individual project agreements. Generally:
                  </p>
                  <ul className="space-y-2">
                    <li>• 50% deposit required to begin work</li>
                    <li>• Remaining balance due upon project completion</li>
                    <li>• Late payments may incur additional fees</li>
                    <li>• All prices are in USD unless otherwise specified</li>
                  </ul>
                </div>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Intellectual Property</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Upon full payment, clients receive full ownership of the final deliverables created specifically for
                    their project. However:
                  </p>
                  <ul className="space-y-2">
                    <li>• Wiz Labs retains the right to showcase work in portfolios</li>
                    <li>• Pre-existing tools, frameworks, and methodologies remain our property</li>
                    <li>• Source files may be provided upon request</li>
                  </ul>
                </div>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Client Responsibilities</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p className="leading-relaxed mb-4">Clients are responsible for:</p>
                  <ul className="space-y-2">
                    <li>• Providing necessary content, assets, and information in a timely manner</li>
                    <li>• Giving clear, constructive feedback within agreed timeframes</li>
                    <li>• Ensuring all provided content is legally owned or licensed</li>
                    <li>• Making payments according to the agreed schedule</li>
                  </ul>
                </div>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Wiz Labs' liability is limited to the total amount paid for services. We are not responsible for any
                  indirect, incidental, or consequential damages arising from the use of our services.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate a project with written notice. In case of termination, payment is due for
                  all work completed up to the termination date.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of the jurisdiction where Wiz Labs operates. Any disputes will be
                  resolved through binding arbitration.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us through our website contact form or
                  reach out directly via email.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
