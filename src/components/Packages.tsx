import { Button } from "@/components/ui/button-enhanced";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PACKAGES, type TestType } from "@/data/site";
import { Clock, CheckCircle, Star } from "lucide-react";

interface PackagesProps {
  test: TestType;
  city?: string;
  onBookingClick: () => void;
}

export function Packages({ test, city, onBookingClick }: PackagesProps) {
  const packages = PACKAGES[test];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-playfair font-bold text-navy-deep">
          {test} Tutoring Packages
        </h3>
        <p className="text-muted-foreground">
          Choose the package that fits your goals and timeline
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id={`${test}-packages`}>
        {packages.map((pkg, index) => {
          const isRecommended = index === 1; // 10-hour package
          const isCustom = pkg.custom;
          
          return (
            <Card
              key={index}
              className={`relative flex flex-col h-full transition-all duration-200 hover:shadow-hover hover:-translate-y-1 ${
                isRecommended ? "border-secondary shadow-card" : ""
              }`}
            >
              {isRecommended && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                  <Star className="w-3 h-3 mr-1" />
                  Most Popular
                </Badge>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-lg font-semibold">
                  {isCustom ? "Custom Plan" : `${pkg.hours} Hours`}
                </CardTitle>
                <CardDescription className="text-sm">
                  {isCustom ? "30+ hours • $184/hr" : "Free 30-min Assessment"}
                </CardDescription>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-navy-deep">
                    ${pkg.price.toLocaleString()}
                  </div>
                  {pkg.plan && (
                    <div className="text-sm text-muted-foreground">
                      or {pkg.plan}
                    </div>
                  )}
                  {isCustom && (
                    <div className="text-sm text-muted-foreground">
                      8 payments available
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Free 30-min assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>Personalized study plan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-accent" />
                    <span>99th percentile tutor</span>
                  </div>
                  {!isCustom && pkg.hours && pkg.hours >= 10 && (
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span>Progress tracking</span>
                    </div>
                  )}
                  {isCustom && (
                    <>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Dedicated accountability coach</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Priority scheduling</span>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <Button
                  variant={isRecommended ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  onClick={onBookingClick}
                >
                  {isCustom ? "Get Custom Quote" : "Purchase Package"}
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <div className="inline-flex items-center gap-2 bg-muted/50 px-4 py-3 rounded-xl">
          <Clock className="h-5 w-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            📊 Not sure how many hours you need? We'll help determine the right package during your free assessment.
          </p>
        </div>
      </div>
    </div>
  );
}