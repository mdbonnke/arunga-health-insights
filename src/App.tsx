import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import About from "./pages/About";
import ClinicalServices from "./pages/ClinicalServices";
import HealthcareAnalytics from "./pages/HealthcareAnalytics";
import DigitalHealthConsulting from "./pages/DigitalHealthConsulting";
import MedicalWriting from "./pages/MedicalWriting";
import Projects from "./pages/Projects";
import HireMe from "./pages/HireMe";
import Research from "./pages/Research";
import CV from "./pages/CV";
import Contact from "./pages/Contact";
import Articles from "./pages/Articles";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/clinical-services" element={<ClinicalServices />} />
            <Route path="/clinical" element={<Navigate to="/clinical-services" replace />} />
            <Route path="/healthcare-analytics" element={<HealthcareAnalytics />} />
            <Route path="/analytics" element={<Navigate to="/healthcare-analytics" replace />} />
            <Route path="/digital-health-consulting" element={<DigitalHealthConsulting />} />
            <Route path="/medical-writing" element={<MedicalWriting />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/research" element={<Research />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
