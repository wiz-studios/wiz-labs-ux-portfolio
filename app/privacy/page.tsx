import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
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
                Privacy Policy
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
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When you contact us through our website, we may collect the following information:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Name and email address (when you submit the contact form)</li>
                  <li>• Project details and messages you send to us</li>
                  <li>• Basic analytics data (page views, session duration) via standard web analytics</li>
                </ul>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Respond to your inquiries and project requests</li>
                  <li>• Provide design and development services</li>
                  <li>• Improve our website and user experience</li>
                  <li>• Send project updates and communications (only when relevant to your project)</li>
                </ul>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties. We may share
                  information only in the following circumstances:
                </p>
                <ul className="space-y-2 text-muted-foreground mt-4">
                  <li>• With your explicit consent</li>
                  <li>• To comply with legal obligations</li>
                  <li>• To protect our rights and safety</li>
                </ul>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. However, no method of
                  transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Cookies and Analytics</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar technologies to enhance user experience and gather analytics
                  data. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Request access to your personal information</li>
                  <li>• Request correction of inaccurate information</li>
                  <li>• Request deletion of your information</li>
                  <li>• Opt out of communications</li>
                </ul>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us
                  through our contact form or email us directly.
                </p>
              </section>

              <section className="border border-border/50 rounded-lg p-6 bg-card/50 backdrop-blur-sm">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date.
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
