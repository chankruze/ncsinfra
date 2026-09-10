import { CheckCircle2 } from "lucide-react";
import { Container } from "../../components/ui/container";
import { Reveal } from "../../components/ui/reveal";
import { trustPoints } from "../../data/site";

export function TrustBar() {
  return (
    <section className="border-b border-line bg-surface-soft py-10">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustPoints.map((point, i) => (
            <Reveal key={point} delay={i * 0.05} className="flex items-center gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-accent" />
              <span className="text-sm font-medium text-ink/80">{point}</span>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
