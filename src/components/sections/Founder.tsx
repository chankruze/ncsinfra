import { Quote } from "lucide-react";
import founderPhoto from "../../assets/photos/founder.jpg";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { site } from "../../data/site";

export function Founder() {
  return (
    <section className="py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership Built Around Trust"
          />

          <Reveal delay={0.15} className="mt-6">
            <Quote className="size-8 text-accent" />
            <p className="mt-3 font-display text-xl leading-snug text-ink md:text-2xl">
              "{site.founder.quote}"
            </p>
          </Reveal>

          <Reveal delay={0.22} className="mt-6">
            <p className="leading-relaxed text-muted">{site.founder.message}</p>
          </Reveal>

          <Reveal delay={0.3} className="mt-6">
            <p className="font-display text-lg font-medium text-ink">
              {site.founder.name}
            </p>
            <p className="text-sm text-muted">{site.founder.role}</p>
          </Reveal>
        </div>

        <Reveal className="relative order-1 mx-auto w-full max-w-sm lg:order-2">
          <div className="absolute -top-4 -right-4 -z-10 size-full rounded-2xl bg-accent-soft" />
          <div className="aspect-4/5 overflow-hidden rounded-2xl bg-surface-dim">
            <img
              src={founderPhoto}
              alt={`${site.founder.name}, ${site.founder.role}`}
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
