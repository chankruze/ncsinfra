import accLogo from "../../assets/partners/acc.webp";
import anchorLogo from "../../assets/partners/anchor-panasonic.webp";
import asianPaintsLogo from "../../assets/partners/asian-paints.png";
import astralPipesLogo from "../../assets/partners/astral-pipes.jpg";
import austinPlywoodLogo from "../../assets/partners/austin-gold-plywood.webp";
import dalmiaBharatLogo from "../../assets/partners/dalmia-bharat.png";
import jsplLogo from "../../assets/partners/jspl.webp";
import jswGroupLogo from "../../assets/partners/jsw-group.webp";
import nerolacPaintsLogo from "../../assets/partners/nerolac-paints.png";
import shyamSteelLogo from "../../assets/partners/shyam-steel.png";
import supremeLogo from "../../assets/partners/supreme.png";
import tataSteelLogo from "../../assets/partners/tata-steel.png";
import ultratechCementLogo from "../../assets/partners/ultratech-cement.png";
import { Container } from "../../components/ui/container";

const logos = [
  { src: tataSteelLogo, alt: "Tata Steel" },
  { src: ultratechCementLogo, alt: "UltraTech Cement" },
  { src: jsplLogo, alt: "Jindal Steel & Power (JSPL)" },
  { src: asianPaintsLogo, alt: "Asian Paints" },
  { src: accLogo, alt: "ACC Cement" },
  { src: jswGroupLogo, alt: "JSW Group" },
  { src: supremeLogo, alt: "Supreme Industries" },
  { src: dalmiaBharatLogo, alt: "Dalmia Bharat" },
  { src: nerolacPaintsLogo, alt: "Nerolac Paints" },
  { src: shyamSteelLogo, alt: "Shyam Steel" },
  { src: astralPipesLogo, alt: "Astral Pipes" },
  { src: anchorLogo, alt: "Anchor by Panasonic" },
  { src: austinPlywoodLogo, alt: "Austin Gold Plywood" },
];

export function MaterialPartners() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          Material Partners
        </p>
      </Container>

      <div className="group mt-8 overflow-hidden mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max animate-marquee items-center justify-center gap-8 group-hover:[animation-play-state:paused]">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="flex h-16 w-32 shrink-0 items-center justify-center rounded-lg bg-white p-3 lg:h-20 lg:w-40"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 max-w-24 object-contain lg:max-h-12 lg:max-w-28"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
