import {
  Blend,
  Construction,
  Layers,
  Tractor,
  Truck,
  Weight,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../../components/ui/container";
import { SectionHeading } from "../../components/ui/section-heading";
import { Reveal } from "../../components/ui/reveal";
import { equipment, type EquipmentCategory } from "../../data/equipment";

const icons: Record<EquipmentCategory["icon"], LucideIcon> = {
  excavator: Construction,
  loader: Tractor,
  truck: Truck,
  crane: Weight,
  compactor: Layers,
  mixer: Blend,
};

export function Equipment() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Equipment & Machinery"
          title="Fleet Deployed on Every Project"
          description="A mix of owned and hired heavy machinery, deployed as each project demands, sourced from leading manufacturers such as JCB, Tata Hitachi, Caterpillar and Komatsu."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {equipment.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.title} delay={(i % 3) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
