import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tutoring from "./pages/Tutoring";
import NotFound from "./pages/NotFound";

// Placeholder components for program pages
const SATTutoring = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">SAT Tutoring - Coming Soon</h1></div>;
const LSATTutoring = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">LSAT Tutoring - Coming Soon</h1></div>;
const MCATTutoring = () => <div className="min-h-screen flex items-center justify-center"><h1 className="text-2xl font-bold">MCAT Tutoring - Coming Soon</h1></div>;

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="/sat-tutoring" element={<SATTutoring />} />
          <Route path="/lsat-tutoring" element={<LSATTutoring />} />
          <Route path="/mcat-tutoring" element={<MCATTutoring />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
