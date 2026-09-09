import field1 from "../../assets/field/field-1.jpg";
import field2 from "../../assets/field/field-2.jpg";
import field3 from "../../assets/field/field-3.jpg";
import field4 from "../../assets/field/field-4.jpg";
import galleryWelding from "../../assets/photos/gallery-welding.jpg";
import galleryRebar from "../../assets/photos/gallery-rebar-worker.jpg";
import galleryAerialSite from "../../assets/photos/gallery-aerial-site.jpg";
import galleryBeam from "../../assets/photos/gallery-beam-worker.jpg";
import galleryScaffold from "../../assets/photos/gallery-scaffold.jpg";
import galleryExcavator from "../../assets/photos/gallery-excavator.jpg";
import galleryAerialBw from "../../assets/photos/gallery-aerial-bw.jpg";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const photos = [
  { src: field1, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryRebar, caption: "Reinforcement & Rebar Work" },
  { src: field2, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryAerialSite, caption: "Aerial Site Progress" },
  { src: galleryWelding, caption: "Site Fabrication Work" },
  { src: field3, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryScaffold, caption: "Site Supervision" },
  { src: field4, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryBeam, caption: "Structural Steel Work" },
  { src: galleryExcavator, caption: "Earthwork & Excavation" },
  { src: galleryAerialBw, caption: "Foundation & Civil Works" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-surface-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Work in the Field"
          title="Evidence, Not Decoration"
          description="Geotagged site documentation alongside our day-to-day civil and railway works — proof of execution, not stock imagery."
        />

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal
              key={photo.src}
              delay={(i % 3) * 0.06}
              className="mb-4 break-inside-avoid"
            >
              <div className="group relative overflow-hidden rounded-2xl">
                <img
                  src={photo.src}
                  alt={photo.tag ?? photo.caption}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {photo.tag && (
                    <p className="text-xs font-semibold tracking-wide text-accent uppercase">
                      {photo.tag}
                    </p>
                  )}
                  <p className="text-sm font-medium text-white">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
