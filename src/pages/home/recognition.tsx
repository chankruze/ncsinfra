import railwaysLogo from "../../assets/logos/indian-railways.png";
import gemLogo from "../../assets/logos/gem.png";
import msmeLogo from "../../assets/logos/msme.png";
import { Container } from "../../components/ui/container";

const logos = [
  { src: railwaysLogo, alt: "Indian Railways" },
  { src: gemLogo, alt: "Government e Marketplace (GeM)" },
  { src: msmeLogo, alt: "Ministry of MSME, Govt. of India" },
];

export function Recognition() {
  return (
    <section className="bg-surface-soft pb-14">
      <Container>
        <div className="border-t border-line pt-8">
          <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted uppercase">
            Registered &amp; Recognized By
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
            {logos.map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto lg:h-16"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
