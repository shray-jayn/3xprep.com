import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useConsoleTrace } from "@/hooks/useConsoleTrace";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useLocation, matchRoutes } from "react-router-dom";

interface PageShellProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  className?: string;
}

export const PageShell = ({
  children,
  title,
  description,
  canonical,
  className = "",
}: PageShellProps) => {
  const location = useLocation();

  // Scroll to top on route changes
  useScrollToTop();

  useConsoleTrace("PageShell", {
    pathname: location.pathname,
    title,
    description,
  });

  function RouterDebug() {
    const location = useLocation();
    const routes = [
      { path: "/mcat-lsat-sat-prep-tutoring/*" },
      { path: "/mcat-lsat-sat-prep-tutoring/prep-tutoring-:cityName" },
      { path: "/mcat-lsat-sat-prep-tutoring-:cityName" },
      { path: "*" },
    ];
    const matches = matchRoutes(routes as any, location);

    console.log("[RouterDebug] pathname =", location.pathname);
    console.log("[RouterDebug] matches =", matches);

    return null;
  }

  return (
    <>
      {(title || description) && (
        <Helmet>
          {title && <title>{title}</title>}
          {description && <meta name="description" content={description} />}
          {title && <meta property="og:title" content={title} />}
          {description && (
            <meta property="og:description" content={description} />
          )}
          {canonical && <link rel="canonical" href={canonical} />}
        </Helmet>
      )}

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className={`flex-1 ${className}`}>{children}</main>
        <Footer />
      </div>
    </>
  );
};
