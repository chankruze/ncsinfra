import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../ui/Container";
import { navLinks, site } from "../../data/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white/70">
      <Container className="grid grid-cols-1 gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-accent font-display text-sm font-semibold text-white">
              N
            </span>
            <span className="font-display text-lg font-semibold text-white">
              {site.brand}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            Government-approved railway civil contractor delivering
            construction, maintenance and infrastructure works across Odisha.
          </p>
          <p className="mt-4 text-xs tracking-wide text-white/40 uppercase">
            Railway Infrastructure · Civil Construction · Maintenance
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 shrink-0 text-accent" />
              {site.phones.join(" / ")}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 shrink-0 text-accent" />
              {site.email}
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
              {site.location}
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 md:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>IREPS ID — {site.ireps}</p>
        </Container>
      </div>
    </footer>
  );
}
