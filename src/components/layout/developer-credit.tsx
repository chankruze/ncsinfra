import { Code, ExternalLink } from "lucide-react";
import { Container } from "../ui/container";
import { Reveal } from "../ui/reveal";
import { GlowSeam } from "../ui/glow-seam";
import { technologyPartner } from "../../data/site";
import geekofiaMark from "../../assets/brand/geekofia-mark.png";

/** Muted, repeating brand-mark watermark, fading in from each edge. */
function LogoWatermark({ side }: { side: "left" | "right" }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-y-0 w-40 opacity-[0.06] grayscale sm:w-64"
      style={{
        [side]: 0,
        backgroundImage: `url(${geekofiaMark})`,
        backgroundSize: "44px 44px",
        backgroundRepeat: "repeat",
        maskImage: `linear-gradient(to ${side === "left" ? "right" : "left"}, black, transparent)`,
        WebkitMaskImage: `linear-gradient(to ${side === "left" ? "right" : "left"}, black, transparent)`,
      }}
    />
  );
}

export function DeveloperCredit() {
  const { agency } = technologyPartner;

  return (
    <div className="relative overflow-hidden bg-[#0c0f16] py-10">
      <GlowSeam />
      <LogoWatermark side="left" />
      <LogoWatermark side="right" />

      <Container className="relative z-10">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-display font-medium">
            <span className="flex items-center gap-1.5 text-sm text-accent">
              <Code className="size-3.5" />
              Website crafted and maintained by
            </span>

            <a
              href={agency.href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 transition-colors duration-200 hover:text-accent"
            >
              <img src={geekofiaMark} alt="" className="size-8 rounded-md" />
              <span className="text-white">
                {agency.name}
              </span>
              <ExternalLink className="size-3.5 text-accent" />
            </a>
          </div>
        </Reveal>
      </Container>
    </div>
  );
}
