import { Container } from "../../components/ui/container";
import { SectionHeading } from "../../components/ui/section-heading";
import { Reveal } from "../../components/ui/reveal";
import { whyUs } from "../../data/capabilities";

export function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Why Us"
          title="Why Infrastructure Partners Choose Us"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 0.08}>
              <div className="h-full bg-surface p-8">
                <h3 className="font-display text-lg font-medium text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
