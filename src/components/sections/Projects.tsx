import { Landmark, MoveRight, TrainFront } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkButton } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { projects } from "../../data/projects";
import { cn } from "../../lib/cn";

const ratingStyles: Record<string, string> = {
  "Very Good": "bg-accent-soft text-accent-dark",
  Good: "bg-surface-dim text-ink/70",
  Ongoing: "bg-ink text-white",
};

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Our Projects"
            title="Delivering Railway Infrastructure with Precision"
            description="Over 15+ years, we've completed numerous civil construction, maintenance, repair, drainage, building and infrastructure projects across multiple divisions of East Coast Railway — contributing to a cumulative project value exceeding ₹10 crore."
            className="max-w-2xl"
          />
          <Reveal>
            <LinkButton href="#contact" variant="outline" className="shrink-0">
              Discuss a Project
            </LinkButton>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 2) * 0.1}>
              <div className="group flex h-full flex-col rounded-2xl border border-line p-7 transition-colors duration-300 hover:border-accent/40 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-surface-soft text-ink">
                    {project.name.toLowerCase().includes("infrastructure") ||
                    project.name.toLowerCase().includes("railway") ? (
                      <TrainFront className="size-5" />
                    ) : (
                      <Landmark className="size-5" />
                    )}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap",
                      ratingStyles[project.rating],
                    )}
                  >
                    {project.rating === "Ongoing"
                      ? "Current Contract"
                      : `${project.rating} Rating`}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-xl font-medium text-ink">
                  {project.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{project.client}</p>

                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {project.scope}
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line pt-5 text-sm">
                  {project.period && (
                    <div>
                      <p className="text-xs text-muted uppercase">Period</p>
                      <p className="font-medium text-ink">{project.period}</p>
                    </div>
                  )}
                  {project.value && (
                    <div>
                      <p className="text-xs text-muted uppercase">
                        Contract Value
                      </p>
                      <p className="font-medium text-ink">{project.value}</p>
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 flex justify-center">
          <a
            href="#gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-accent"
          >
            See field documentation from our project sites
            <MoveRight className="size-4" />
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
