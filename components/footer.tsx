import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Twitter, Dribbble, ExternalLink } from "lucide-react"

const footerLinks = {
  services: [
    { name: "UI Design", href: "#services" },
    { name: "UX Research", href: "#services" },
    { name: "Mobile App Design", href: "#services" },
    { name: "Web Application Design", href: "#services" },
    { name: "Design Systems", href: "#services" },
    { name: "Conversion Optimization", href: "#services" },
  ],
  projects: [
    { name: "E-commerce Redesign", href: "/case-study/ecommerce-redesign" },
    { name: "SaaS Dashboard", href: "/case-study/saas-dashboard" },
    { name: "Mobile Banking App", href: "/case-study/mobile-banking-app" },
    { name: "Healthcare Platform", href: "/case-study/healthcare-platform" },
    { name: "Travel Booking App", href: "/case-study/travel-booking-app" },
    { name: "Learning Platform", href: "/case-study/education-platform" },
  ],
  company: [
    { name: "About Me", href: "#about" },
    { name: "My Process", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ],
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/wiz-studios/",
    icon: ({ ...props }) => (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        {...props}
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://x.com/_wiz001",
    icon: Twitter,
  },
  {
    name: "Dribbble",
    href: "https://dribbble.com/wiz-lab",
    icon: Dribbble,
  },
  {
    name: "Behance",
    href: "https://www.behance.net/wizlabs",
    icon: ExternalLink,
  },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Brand & CTA */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Digital Presence?</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Contact a freelance UI/UX designer today and let's create something amazing together. I specialize in
                  UI/UX design, product design, and conversion optimization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="#contact">Start Your Project</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:wiz.labs1@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      wiz.labs1@gmail.com
                    </a>
                  </Button>
                </div>
              </div>

              {/* Other Site Link */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">Check out my development work:</p>
                <Button variant="outline" asChild>
                  <a href="https://wiz-dev-studios.vercel.app" target="_blank" rel="noopener noreferrer">
                    Wiz Dev Studios
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-6">Projects</h4>
              <ul className="space-y-3">
                {footerLinks.projects.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-foreground mb-6">About</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Social Links */}
              <div className="mt-8">
                <h5 className="font-semibold text-foreground mb-4">Follow Me</h5>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={social.name}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Wiz Labs. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="/privacy" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
                <a
                href="https://buymeacoffee.com/70vqXe5paD"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center"
                >
                <span role="img" aria-label="coffee" className="mr-1">☕</span>
                Buy me a coffee
                </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
