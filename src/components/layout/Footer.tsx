import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button-enhanced"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

const footerSections = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Jobs", href: "/careers" },
      { name: "Contact", href: "/contact" }
    ]
  },
  {
    title: "Programs", 
    links: [
      { name: "SAT Prep", href: "/sat-tutoring" },
      { name: "LSAT Prep", href: "/lsat-tutoring" },
      { name: "MCAT Prep", href: "/mcat-tutoring" },
      { name: "Tutoring", href: "/tutoring" },
      { name: "Live Classes", href: "/classes" }
    ]
  },
  {
    title: "Resources",
    links: [
      { name: "Score Predictor", href: "/score-predictor" },
      { name: "Test Requirements", href: "/requirements" },
      { name: "Study Guides", href: "/guides" },
      { name: "Practice Tests", href: "/practice" },
      { name: "Success Stories", href: "/testimonials" }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Refund Policy", href: "/refunds" },
      { name: "Accessibility", href: "/accessibility" }
    ]
  }
]

const socialLinks = [
  { name: "LinkedIn", href: "#", icon: Linkedin },
  { name: "Instagram", href: "#", icon: Instagram },
  { name: "YouTube", href: "#", icon: Youtube },
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "Facebook", href: "#", icon: Facebook }
]

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-navy-deep via-primary to-navy-deep text-white">
      <div className="container max-w-screen-xl mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-6 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="text-2xl font-bold font-display mb-4">
                  3X <span className="highlight-gold">Prep</span>
                </div>
                <p className="text-white/70 font-body leading-relaxed">
                  Empowering ambitious students to achieve elite test scores and unlock their dream futures through world-class tutoring and personalized preparation.
                </p>
              </div>
              
              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="font-semibold font-headline">Stay Updated</h3>
                <div className="flex space-x-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                  />
                  <Button variant="accent" size="default">
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h3 className="font-semibold font-headline">Follow Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:scale-110 transition-all duration-200"
                        aria-label={social.name}
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="font-semibold font-headline">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          to={link.href}
                          className="text-white/70 hover:text-white transition-colors font-body text-sm"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-white/60 text-sm font-body">
              © 2024 3X Prep. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms
              </Link>
              <Link to="/cookies" className="text-white/60 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}