import { motion } from "framer-motion";
import heroImage from "../../assets/photos/hero-railway.jpg";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { heroStats, site } from "../../data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-28 pb-32 md:pt-36 md:pb-40">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Railway civil infrastructure works"
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/70 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/60 to-transparent" />
      </div>

      <Container className="relative">
        <Reveal>
          <span className="eyebrow text-accent">
            Government Approved Railway Civil Contractor
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-5 max-w-3xl">
          <h1 className="font-display text-4xl leading-[1.08] font-medium tracking-tight text-white sm:text-5xl lg:text-6xl">
            Railway-Grade Infrastructure.
            <br />
            Built on 15+ Years of Execution.
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="mt-6 max-w-xl">
          <p className="text-lg leading-relaxed text-white/70">
            Government-approved railway civil contractor delivering
            construction, maintenance and infrastructure works for{" "}
            {site.client} across Odisha — now extending 15+ years of
            disciplined execution to a wider infrastructure market.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="mt-9 flex flex-wrap items-center gap-4">
          <LinkButton href="#projects" variant="primary">
            View Our Projects
          </LinkButton>
          <LinkButton href="#contact" variant="outline-light">
            Discuss Your Project
          </LinkButton>
        </Reveal>
      </Container>

      <Container className="relative mt-20 md:mt-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:grid-cols-4 sm:p-8"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-medium text-white sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs tracking-wide text-white/60 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
