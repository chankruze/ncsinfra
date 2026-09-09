import {
  Building2,
  CalendarCheck,
  ClipboardCheck,
  Droplets,
  Fence,
  Landmark,
  TrainFront,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { services, type Service } from "../../data/services";

const icons: Record<Service["icon"], LucideIcon> = {
  train: TrainFront,
  building: Building2,
  wrench: Wrench,
  droplets: Droplets,
  fence: Fence,
  "calendar-check": CalendarCheck,
  "clipboard-check": ClipboardCheck,
  landmark: Landmark,
};

export function Services() {
  return (
    <section id="services" className="bg-surface-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="What We Do"
          title="Civil Infrastructure Expertise"
          description="Comprehensive civil engineering and construction services, with specialised expertise in railway infrastructure projects."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = icons[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 4) * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-medium text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {service.description}
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
