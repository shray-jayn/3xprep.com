import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { createPageSEO } from "@/lib/seo";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";

const NotFound = () => {
  const location = useLocation();
  
  useConsoleTrace("NotFound", { pathname: location.pathname });

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  const seo = createPageSEO({
    title: "Page Not Found — 3X Prep",
    description: "The page you're looking for doesn't exist. Return to our homepage to find what you need.",
    noIndex: true
  });

  return (
    <PageShell 
      title={seo.title}
      description={seo.description}
      className="bg-neutral-100"
    >
      <Section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold text-primary">404</h1>
            <h2 className="text-2xl font-semibold text-navy-deep">Page Not Found</h2>
          </div>
          
          <p className="text-lg text-neutral-600 max-w-md">
            Oops! The page you're looking for doesn't exist. Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="/">Return to Home</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/tutoring-locations">View Locations</a>
            </Button>
          </div>
        </div>
      </Section>
    </PageShell>
  );
};

export default NotFound;