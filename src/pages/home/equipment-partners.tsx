import aceLogo from "../../assets/equipment-partners/ace.jpg";
import caseLogo from "../../assets/equipment-partners/case-construction.png";
import catLogo from "../../assets/equipment-partners/cat.jpg";
import hyundaiLogo from "../../assets/equipment-partners/hyundai-construction.svg";
import jcbLogo from "../../assets/equipment-partners/jcb.webp";
import komatsuLogo from "../../assets/equipment-partners/komatsu.webp";
import mahindraLogo from "../../assets/equipment-partners/mahindra.svg";
import sanyLogo from "../../assets/equipment-partners/sany.webp";
import tataHitachiLogo from "../../assets/equipment-partners/tata-hitachi.webp";
import volvoLogo from "../../assets/equipment-partners/volvo-ce.webp";
import { Container } from "../../components/ui/container";

const logos = [
  { src: catLogo, alt: "Caterpillar (CAT)" },
  { src: tataHitachiLogo, alt: "Tata Hitachi" },
  { src: komatsuLogo, alt: "Komatsu" },
  { src: jcbLogo, alt: "JCB" },
  { src: volvoLogo, alt: "Volvo Construction Equipment" },
  { src: caseLogo, alt: "CASE Construction" },
  { src: sanyLogo, alt: "SANY" },
  { src: aceLogo, alt: "Action Construction Equipment (ACE)" },
  { src: hyundaiLogo, alt: "Hyundai Construction Equipment" },
  { src: mahindraLogo, alt: "Mahindra Construction Equipment" },
];

export function EquipmentPartners() {
  return (
    <section className="py-14">
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-muted uppercase">
          Equipment Partners
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
