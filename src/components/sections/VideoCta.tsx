import ctaPoster from "../../assets/photos/cta-poster.jpg";
import { Container } from "../ui/Container";
import { LinkButton } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { YouTubeBackground } from "../ui/YouTubeBackground";

export function VideoCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink py-32 md:py-44">
      <img
        src={ctaPoster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hidden md:block">
        <YouTubeBackground
          videoId="4BzjUq921Y4"
          title="NCS Infra railway civil infrastructure work"
        />
      </div>
      <div className="absolute inset-0 bg-ink/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/20" />

      <Container className="relative text-center">
        <Reveal>
          <span className="eyebrow">Ready When You Are</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl leading-[1.1] font-medium tracking-tight text-white sm:text-5xl">
            Let's Build Something Extraordinary Together
          </h2>
        </Reveal>
        <Reveal delay={0.18}>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
            Whether it's a railway tender, a government infrastructure
            project, or a private civil construction requirement — our team
            is ready to discuss scope, timelines and execution.
          </p>
        </Reveal>
        <Reveal delay={0.26} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href="#contact" variant="primary">
            Request a Consultation
          </LinkButton>
          <LinkButton href="#projects" variant="outline-light">
            View Our Projects
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
