import expertiseImage from "../../assets/photos/expertise-rebar.jpg";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { processSteps } from "../../data/capabilities";

export function RailwayExpertise() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-0">
        <img
          src={expertiseImage}
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Railway Expertise"
          light
          title="Built for the Demands of Railway Infrastructure"
          description="Railway infrastructure demands disciplined execution, safety awareness, coordination and strict adherence to specifications. Our experience with East Coast Railway has shaped the way we plan, execute and manage every civil infrastructure project."
        />

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 3) * 0.1}>
              <div className="relative border-t border-white/15 pt-6">
                <span className="font-display text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
