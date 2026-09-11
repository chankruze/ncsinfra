import railwaysLogo from "../../assets/logos/indian-railways.png";
import gemLogo from "../../assets/logos/gem.png";
import msmeLogo from "../../assets/logos/msme.png";
import { Container } from "../../components/ui/container";
import { cn } from "cn";

const logos = [
  { src: railwaysLogo, alt: "Indian Railways", className: "h-16 lg:h-20" },
  {
    src: gemLogo,
    alt: "Government e Marketplace (GeM)",
    className: "h-20 lg:h-24",
  },
  {
    src: msmeLogo,
    alt: "Ministry of MSME, Govt. of India",
    className: "h-12 lg:h-16",
  },
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
                className={cn("w-auto", logo.className)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
