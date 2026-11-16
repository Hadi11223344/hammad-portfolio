import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { RecognitionStrip } from "@/components/sections/RecognitionStrip";
import { Timeline } from "@/components/sections/Timeline";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const Index = () => {
  useEffect(() => {
    document.title = siteConfig.title;
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <RecognitionStrip />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
