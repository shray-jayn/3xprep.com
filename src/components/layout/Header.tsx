import { useState, useEffect } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button-enhanced"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LeadDialog } from "@/components/LeadDialog"
import { cn } from "@/lib/utils"
import { SITE_CONFIG, LOCATIONS } from "@/data/site"

const navigation = [
  { name: "Home", href: "/" },
  { name: "Tutoring Locations", href: "/tutoring-locations" },
  { name: "Practice Tests", href: "/practice-tests" },
]

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [leadDialogOpen, setLeadDialogOpen] = useState(false)
  const [leadDialogMode, setLeadDialogMode] = useState<"consultation" | "diagnostic">("consultation")
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Get default city from current location page
  const currentCity = (() => {
    if (location.pathname.includes("/mcat-lsat-sat-prep-tutoring-")) {
      const citySlug = location.pathname.split("/mcat-lsat-sat-prep-tutoring-")[1]
      const locationData = LOCATIONS.find(loc => loc.slug.includes(citySlug))
      return locationData?.city
    }
    return undefined
  })()

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const openLeadDialog = (mode: "consultation" | "diagnostic") => {
    setLeadDialogMode(mode)
    setLeadDialogOpen(true)
    setIsOpen(false)
  }

  return (
    <>
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
      scrolled 
        ? "border-border/60 shadow-md bg-background/98" 
        : "border-border/40 shadow-sm"
    )}>
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
          <Button 
            variant="primary" 
            size="lg"
            onClick={() => openLeadDialog("consultation")}
          >
            Book Free Consultation
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="flex md:hidden ml-auto items-center space-x-2">
          {/* Mobile Call Button */}
          <Button variant="ghost" size="icon" asChild>
            <a href={`tel:${SITE_CONFIG.supportPhone}`} aria-label="Call now">
              <Phone className="h-4 w-4" />
            </a>
          </Button>
          
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
                  <Button 
                    variant="primary" 
                    size="lg" 
                    className="w-full"
                    onClick={() => openLeadDialog("consultation")}
                  >
                    Book Free Consultation
                  </Button>
                  <Button variant="accent" size="lg" className="w-full" asChild>
                    <a href={`tel:${SITE_CONFIG.supportPhone}`}>
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

    {/* Lead Dialog */}
    <LeadDialog 
      open={leadDialogOpen}
      onOpenChange={setLeadDialogOpen}
      mode={leadDialogMode}
      defaultCity={currentCity}
    />
    </>
  )
}