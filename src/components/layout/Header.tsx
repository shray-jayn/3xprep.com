import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button-enhanced"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { name: "SAT Tutoring", href: "/sat-tutoring" },
  { name: "LSAT Tutoring", href: "/lsat-tutoring" },
  { name: "MCAT Tutoring", href: "/mcat-tutoring" },
  { name: "Tutoring", href: "/tutoring" },
  { name: "Resources", href: "/resources" },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        {/* Logo */}
        <div className="mr-6 flex">
          <Link to="/" className="mr-6 flex items-center space-x-2 hover-lift">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary font-display">
                3X <span className="highlight-gold">Prep</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 items-center space-x-6 text-sm font-medium">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  "relative transition-colors hover:text-foreground/80 py-2 px-1 font-headline font-medium",
                  isActive
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-accent after:rounded-full"
                    : "text-foreground/60"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link to="/login">Log In</Link>
          </Button>
          <Button variant="primary" size="lg" asChild>
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden ml-auto">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between pb-6">
                  <div className="text-lg font-bold text-primary font-display">
                    3X <span className="highlight-gold">Prep</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "text-lg font-medium py-2 px-3 rounded-lg transition-colors font-headline",
                          isActive
                            ? "text-accent bg-accent/10"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        )
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </nav>
                
                <div className="mt-auto pt-6 space-y-4">
                  <Button variant="ghost" className="w-full justify-start" asChild>
                    <Link to="/login" onClick={() => setIsOpen(false)}>Log In</Link>
                  </Button>
                  <Button variant="primary" size="lg" className="w-full" asChild>
                    <Link to="/get-started" onClick={() => setIsOpen(false)}>Get Started</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}