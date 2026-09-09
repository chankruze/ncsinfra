import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { navLinks, site } from "../../data/site";
import { cn } from "../../lib/cn";
import founderMark from "../../assets/brand/founder-mark.jpg";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-18 items-center justify-between py-4">
        <a href="#top" className="flex items-center gap-2.5">
          <img
            src={founderMark}
            alt={site.brand}
            className={cn(
              "size-9 rounded-full object-cover ring-2 transition-all",
              scrolled || open ? "ring-ink/10" : "ring-white/40",
            )}
          />
          <span
            className={cn(
              "font-display text-lg font-semibold tracking-tight transition-colors",
              scrolled || open ? "text-ink" : "text-white",
            )}
          >
            {site.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                scrolled || open
                  ? "text-ink/70 hover:text-ink"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LinkButton href="#contact" className="px-5 py-2.5 text-xs">
            Discuss a Project
          </LinkButton>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className={cn(
            "flex size-10 items-center justify-center rounded-full border lg:hidden",
            scrolled || open
              ? "border-ink/10 text-ink"
              : "border-white/25 text-white",
          )}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-3 text-sm font-medium text-ink/80 hover:bg-surface-soft"
                >
                  {link.label}
                </a>
              ))}
              <LinkButton
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 w-full"
              >
                Discuss a Project
              </LinkButton>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
