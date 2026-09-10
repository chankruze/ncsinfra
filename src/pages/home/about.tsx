import aboutImage from "../../assets/photos/about-site.jpg";
import { Container } from "../../components/ui/container";
import { SectionHeading } from "../../components/ui/section-heading";
import { LinkButton } from "../../components/ui/button";
import { Reveal } from "../../components/ui/reveal";
import { site } from "../../data/site";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="aspect-4/5 overflow-hidden rounded-2xl">
            <img
              src={aboutImage}
              alt="NCS Infra site engineers reviewing a project"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -left-6 hidden max-w-[220px] rounded-2xl bg-ink p-6 text-white shadow-xl sm:block">
            <p className="font-display text-4xl font-medium text-accent">
              {site.since}
            </p>
            <p className="mt-1 text-sm text-white/70">
              Founded — building railway infrastructure ever since.
            </p>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Who We Are"
            title="Built on Railway Experience. Driven by Execution."
            description={`Since ${site.since}, ${site.legalName} has delivered railway civil engineering, infrastructure development, repair and maintenance works across Odisha, with more than 15 years of experience working with ${site.client}.`}
          />
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl leading-relaxed text-muted">
              Today, that experience is being extended to commercial,
              industrial, institutional and private infrastructure projects
              across Odisha and Eastern India — bringing the same
              government-grade quality and disciplined execution to every
              client we serve.
            </p>
          </Reveal>
          <Reveal delay={0.28} className="mt-8">
            <LinkButton href="#capabilities" variant="outline">
              Our Vision & Mission
            </LinkButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
