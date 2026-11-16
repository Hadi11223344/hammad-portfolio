import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, ExternalLink } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site";
import { useMotionVariants } from "@/lib/motion";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { fade, stagger } = useMotionVariants();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.contact.email,
      action: `mailto:${siteConfig.contact.email}`,
      copyValue: siteConfig.contact.email,
    },
    {
      icon: Phone,
      label: "Phone",
      value: siteConfig.contact.phone,
      action: "tel:+923005008369",
      copyValue: "+923005008369",
    },
    {
      icon: MapPin,
      label: "Location",
      value: siteConfig.contact.location,
      action: null as string | null,
      copyValue: siteConfig.contact.location,
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "linkedin.com/in/hammad-tahir1",
      action: siteConfig.social.linkedin,
      copyValue: siteConfig.social.linkedin,
    },
    {
      icon: ExternalLink,
      label: "GitHub",
      value: "github.com/hadi11223344",
      action: siteConfig.social.github,
      copyValue: siteConfig.social.github,
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "ASE / Backend opportunity").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast({
        title: "Missing fields",
        description: "Please fill in name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    const body = [`Hi Hammad,`, ``, message, ``, `— ${name}`, `Reply-to: ${email}`].join(
      "\n"
    );
    window.location.href = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    toast({
      title: "Opening your email app",
      description: `If nothing opens, email ${siteConfig.contact.email} directly.`,
    });
    setTimeout(() => setIsSubmitting(false), 800);
  };

  const copyToClipboard = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({ title: "Copied", description: `${label} copied to clipboard.` });
    } catch {
      toast({ title: "Copy failed", description: value, variant: "destructive" });
    }
  };

  return (
    <section id="contact" className="section-pad bg-background">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeader
          eyebrow="Contact"
          title="Get in touch"
          lead="Open to ASE / Backend / Applied AI roles in Lahore. Happy to walk through VOIA, SmartCare, or HireBeam."
        />

        <div className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="space-y-0"
          >
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={fade}
                  className="group flex items-center justify-between gap-3 border-b border-border/80 py-4 transition-colors duration-300 first:border-t first:border-border/80 hover:bg-muted/40"
                >
                  <div className="flex min-w-0 items-center gap-3">
                    <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-medium tracking-tight text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-0.5 opacity-70 transition-opacity group-hover:opacity-100">
                    <Button
                      variant="ghost"
                      size="sm"
                      type="button"
                      className="h-8 w-8 p-0"
                      onClick={() => copyToClipboard(item.copyValue, item.label)}
                      aria-label={`Copy ${item.label}`}
                    >
                      <Copy className="h-3.5 w-3.5" />
                    </Button>
                    {item.action && (
                      <Button variant="ghost" size="sm" asChild className="h-8 w-8 p-0">
                        <a
                          href={item.action}
                          target={item.action.startsWith("http") ? "_blank" : undefined}
                          rel={
                            item.action.startsWith("http") ? "noopener noreferrer" : undefined
                          }
                          aria-label={`Open ${item.label}`}
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </motion.div>
              );
            })}

            <p className="pt-6 text-sm text-muted-foreground">
              Prefer chat?{" "}
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline text-foreground"
              >
                WhatsApp
              </a>
            </p>
          </motion.div>

          <motion.form
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            onSubmit={handleSubmit}
            className="glass glass-lift space-y-5 rounded-md p-6 sm:p-8"
          >
            <div>
              <h3 className="font-heading text-lg font-semibold tracking-tight">Send a note</h3>
              <p className="mt-1.5 text-sm text-foreground/80">
                Opens your email app with a draft to {siteConfig.contact.email}.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  className="rounded-md bg-background/80"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="rounded-md bg-background/80"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="ASE / Backend role at …"
                className="rounded-md bg-background/80"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Brief note about the role…"
                className="resize-none rounded-md bg-background/80"
              />
            </div>
            <Button
              type="submit"
              size="lg"
              className="icon-nudge w-full rounded-md"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Opening email…"
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Open email draft
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
