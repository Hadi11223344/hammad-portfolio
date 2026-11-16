import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import ProjectsIndex from "./pages/ProjectsIndex";
import CaseStudyPage from "./pages/CaseStudyPage";
import CaseStudyByRoute from "./pages/CaseStudyByRoute";
import Recognition from "./pages/Recognition";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const App = () => (
  <ThemeProvider>
    <Toaster />
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/projects" element={<ProjectsIndex />} />
        <Route path="/projects/:slug" element={<CaseStudyPage />} />
        <Route path="/research/seq-donut" element={<CaseStudyByRoute />} />
        <Route path="/experience/ireg-it" element={<CaseStudyByRoute />} />
        <Route path="/recognition" element={<Recognition />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
