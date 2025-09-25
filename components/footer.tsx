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
              <span>Made with ❤️ for great design</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
