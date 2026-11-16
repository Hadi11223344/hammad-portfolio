import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const NotFound = () => {
  useEffect(() => {
    document.title = `Page not found — ${siteConfig.name}`;
    return () => {
      document.title = siteConfig.title;
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-clip bg-background">
      <Navbar />
      <main className="flex min-h-[70vh] items-center justify-center px-6 pb-20 pt-28">
        <div className="max-w-md text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            That route does not exist. Head home or browse projects.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild className="rounded-md">
              <Link to="/">Home</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-md">
              <Link to="/projects">Projects</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
