import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LOCATIONS, SITE_CONFIG } from "@/data/site";
import { MapPin, Phone, ArrowRight } from "lucide-react";

export default function LocationsIndex() {
  return (
    <>
      <Helmet>
        <title>Tutoring Locations — {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content="Find 3X Prep tutoring locations across Southern California. Elite SAT, LSAT, and MCAT tutoring in San Diego, Riverside, Orange County, and Los Angeles."
        />
        <meta name="keywords" content="3X Prep, tutoring locations, SAT, LSAT, MCAT, California, San Diego, Los Angeles, Orange County, Riverside" />
        <link rel="canonical" href={`${SITE_CONFIG.url}/tutoring-locations`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-background to-muted/20">
          <div className="container max-w-screen-xl">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-[clamp(32px,4vw,48px)] font-playfair font-bold text-navy-deep leading-tight">
                Find Your Local <span className="highlight-gold">3X Prep</span> Location
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Elite tutoring for SAT, LSAT, and MCAT across Southern California. 
                Choose your city to get started with our 99th percentile tutors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="xl">
                  Book Free Consultation
                </Button>
                <Button variant="accent" size="xl" asChild>
                  <a href={`tel:${SITE_CONFIG.supportPhone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Locations Grid */}
        <section className="py-20">
          <div className="container max-w-screen-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-playfair font-bold text-navy-deep mb-4">
                Our Locations
              </h2>
              <p className="text-muted-foreground text-lg">
                Select your city to learn more about local tutoring options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {LOCATIONS.map((location) => (
                <Card
                  key={location.id}
                  className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-2 border-border/50"
                >
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground font-semibold">
                      #{location.id}
                    </Badge>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-accent/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-playfair text-navy-deep">
                          {location.city}
                        </CardTitle>
                        <CardDescription className="text-base">
                          3X Prep of {location.city}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <a
                          href={`tel:${location.phone}`}
                          className="hover:text-accent transition-colors"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">Available Tests:</p>
                      <div className="flex gap-2">
                        {["SAT", "LSAT", "MCAT"].map((test) => (
                          <Badge key={test} variant="outline" className="text-xs">
                            {test}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-all duration-200"
                        asChild
                      >
                        <Link to={`/${location.slug}`}>
                          View {location.city} Details
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy-deep text-white">
          <div className="container max-w-screen-lg text-center space-y-8">
            <h2 className="text-3xl font-playfair font-bold">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Whether you're in San Diego, LA, or anywhere in between, 
              our expert tutors are ready to help you achieve your target score.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Book Free Assessment
              </Button>
              <Button variant="outline" size="xl" className="border-white text-white hover:bg-white hover:text-navy-deep">
                Take Free Diagnostic
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}