import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Suspense } from "react";
import Index from "./pages/Index";
import Tutoring from "./pages/Tutoring";
import LocationsIndex from "./pages/LocationsIndex";
import LocationTutoringPage from "./pages/LocationTutoringPage";
import LocationLandingPage from "./pages/LocationLandingPage";
import ExamLocationPage from "./pages/ExamLocationPage";
import PracticeTests from "./pages/PracticeTests";
import NotFound from "./pages/NotFound";
import { PageSkeleton } from "@/components/ui/page-skeleton";

// Simple placeholder pages
const Privacy = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-bold">Privacy Policy - Coming Soon</h1>
  </div>
);

const Terms = () => (
  <div className="min-h-screen flex items-center justify-center">
    <h1 className="text-2xl font-bold">Terms of Service - Coming Soon</h1>
  </div>
);

const Health = () => ({ status: "ok", timestamp: new Date().toISOString() });

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageSkeleton />}>  
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/tutoring" element={<Tutoring />} />
              <Route path="/tutoring-locations" element={<LocationsIndex />} />
              <Route path="/mcat-lsat-sat-prep-tutoring" element={<LocationLandingPage />} />
              <Route path="/mcat-lsat-sat-prep-tutoring/:cityName" element={<LocationLandingPage />}/>
              <Route path="/prep-tutoring/:cityName/:examName" element={<ExamLocationPage />} />
              <Route path="/prep-tutoring" element={<ExamLocationPage />} />
              <Route path="/practice-tests" element={<PracticeTests />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route
                path="/health"
                element={<div>{JSON.stringify(Health())}</div>}
              />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
