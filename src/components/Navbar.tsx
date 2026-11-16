import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { scrollToId, usePrefersReducedMotion } from "@/lib/motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [contactInView, setContactInView] = useState(false);
  const reduced = usePrefersReducedMotion();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setContactInView(false);
      return;
    }
    const el = document.getElementById("contact");
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(Boolean(entry?.isIntersecting)),
      { rootMargin: "-35% 0px -40% 0px", threshold: [0, 0.2, 0.5] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      requestAnimationFrame(() => scrollToId(id));
    }
  }, [location.pathname, location.hash]);

  const goHome = () => {
    if (location.pathname === "/") {
      scrollToId("hero");
    } else {
      navigate("/");
    }
    setIsMobileMenuOpen(false);
  };

  const handleNav = (href: string, type: "route" | "hash") => {
    setIsMobileMenuOpen(false);
    if (type === "hash") {
      if (location.pathname === "/") {
        scrollToId(href.replace("/#", "").replace("#", ""));
      } else {
        navigate(href);
      }
      return;
    }
    navigate(href);
  };

  const isActive = (href: string, type: "route" | "hash") => {
    if (type === "hash") {
      const hash = href.includes("#") ? `#${href.split("#").pop()}` : "";
      return (
        location.pathname === "/" &&
        (location.hash === hash || (hash === "#contact" && contactInView))
      );
    }
    if (href === "/") return location.pathname === "/" && !contactInView;
    return location.pathname === href || location.pathname.startsWith(`${href}/`);
  };

  return (
    <motion.header
      initial={reduced ? false : { y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: reduced ? 0 : 0.45 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass !border-x-0 !border-t-0 border-b border-border/80"
          : "bg-gradient-to-b from-background/75 via-background/25 to-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
        <button
          type="button"
          onClick={goHome}
          className="link-underline font-heading text-lg font-bold tracking-tight text-foreground"
        >
          {siteConfig.name}
        </button>

        <div className="hidden items-center gap-7 lg:flex">
          {siteConfig.nav.slice(1).map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleNav(item.href, item.type)}
              data-active={isActive(item.href, item.type) ? "true" : "false"}
              className={`link-underline text-sm tracking-tight transition-colors ${
                isActive(item.href, item.type)
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>
          <Button
            size="sm"
            variant="outline"
            asChild
            className={`mr-1 hidden rounded-md transition-colors md:inline-flex ${
              isScrolled
                ? "border-border/70 bg-transparent hover:border-primary/50"
                : "glass-soft border-foreground/20 hover:border-foreground/40"
            }`}
          >
            <a href={siteConfig.resume.url} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-3.5 w-3.5" />
              CV
            </a>
          </Button>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
          <Button
            variant="ghost"
            size="sm"
            type="button"
            className="px-2 lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMobileMenuOpen((v) => !v)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="glass fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col border-t border-border/70 lg:hidden"
          >
            <div className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8">
              {siteConfig.nav.map((item) => (
                <button
                  key={item.href}
                  type="button"
                  onClick={() => handleNav(item.href, item.type)}
                  className={`rounded-md px-2 py-4 text-left font-heading text-2xl font-semibold tracking-tight transition-colors ${
                    isActive(item.href, item.type)
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <div className="border-t border-border px-6 py-5">
              <Button size="lg" asChild className="w-full rounded-md">
                <a href={siteConfig.resume.url} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
