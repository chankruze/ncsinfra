import field1 from "../../assets/field/field-1.jpg";
import field2 from "../../assets/field/field-2.jpg";
import field3 from "../../assets/field/field-3.jpg";
import field4 from "../../assets/field/field-4.jpg";
import ceremony1 from "../../assets/field/ceremony-1.jpg";
import ceremony2 from "../../assets/field/ceremony-2.jpg";
import ceremony3 from "../../assets/field/ceremony-3.jpg";
import ceremony4 from "../../assets/field/ceremony-4.jpg";
import ceremony5 from "../../assets/field/ceremony-5.jpg";
import ceremony6 from "../../assets/field/ceremony-6.jpg";
import aboutSite from "../../assets/photos/about-site.jpg";
import blueprint from "../../assets/photos/blueprint.jpg";
import ctaPoster from "../../assets/photos/cta-poster.jpg";
import expertiseRebar from "../../assets/photos/expertise-rebar.jpg";
import servicesCrane from "../../assets/photos/services-crane.jpg";
import galleryAerialBw from "../../assets/photos/gallery-aerial-bw.jpg";
import galleryAerialEarthwork from "../../assets/photos/gallery-aerial-earthwork.jpg";
import galleryAerialFoundation from "../../assets/photos/gallery-aerial-foundation.jpg";
import galleryAerialRebarWorker from "../../assets/photos/gallery-aerial-rebar-worker.jpg";
import galleryAerialSite from "../../assets/photos/gallery-aerial-site.jpg";
import galleryAerialTrucks from "../../assets/photos/gallery-aerial-trucks.jpg";
import galleryBeamWorker from "../../assets/photos/gallery-beam-worker.jpg";
import galleryBlueprintSketch from "../../assets/photos/gallery-blueprint-sketch.jpg";
import galleryConcreteCutting from "../../assets/photos/gallery-concrete-cutting.jpg";
import galleryCranesDusk from "../../assets/photos/gallery-cranes-dusk.jpg";
import galleryEngineersSkyline from "../../assets/photos/gallery-engineers-skyline.jpg";
import galleryExcavator from "../../assets/photos/gallery-excavator.jpg";
import galleryFormworkTeam from "../../assets/photos/gallery-formwork-team.jpg";
import galleryFormworkWorker from "../../assets/photos/gallery-formwork-worker.jpg";
import galleryInclineWorkers from "../../assets/photos/gallery-incline-workers.jpg";
import galleryNightPour from "../../assets/photos/gallery-night-pour.jpg";
import galleryPlansReview from "../../assets/photos/gallery-plans-review.jpg";
import galleryRebarWorker from "../../assets/photos/gallery-rebar-worker.jpg";
import galleryScaffold from "../../assets/photos/gallery-scaffold.jpg";
import galleryScaffoldClimb from "../../assets/photos/gallery-scaffold-climb.jpg";
import galleryStellClimber from "../../assets/photos/gallery-steel-climber.jpg";
import gallerySurveyor from "../../assets/photos/gallery-surveyor.jpg";
import galleryWelding from "../../assets/photos/gallery-welding.jpg";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const photos = [
  { src: field1, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryRebarWorker, caption: "Reinforcement & Rebar Work" },
  { src: ceremony1, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryAerialSite, caption: "Aerial Site Progress" },
  { src: galleryWelding, caption: "Site Fabrication Work" },
  { src: field2, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryEngineersSkyline, caption: "Site Engineers on Review" },
  { src: galleryAerialFoundation, caption: "Aerial Foundation Works" },
  { src: ceremony2, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryScaffold, caption: "Site Supervision" },
  { src: galleryCranesDusk, caption: "Tower Cranes on Site" },
  { src: field3, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryConcreteCutting, caption: "Concrete Cutting" },
  { src: galleryPlansReview, caption: "Project Plans Review" },
  { src: ceremony3, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryBeamWorker, caption: "Structural Steel Work" },
  { src: aboutSite, caption: "Site Review & Planning" },
  { src: field4, caption: "Puri, Odisha", tag: "Field Documentation" },
  { src: galleryStellClimber, caption: "Structural Steel Access" },
  { src: galleryNightPour, caption: "Night Concrete Pour" },
  { src: ceremony4, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryExcavator, caption: "Earthwork & Excavation" },
  { src: gallerySurveyor, caption: "Site Surveying" },
  { src: galleryFormworkTeam, caption: "Formwork & Rebar Team" },
  { src: expertiseRebar, caption: "Reinforcement Works" },
  { src: ceremony5, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryAerialTrucks, caption: "Site Logistics & Earthmoving" },
  { src: galleryFormworkWorker, caption: "Formwork Installation" },
  { src: galleryAerialBw, caption: "Foundation & Civil Works" },
  { src: blueprint, caption: "Engineering Drawings" },
  { src: ceremony6, caption: "Bhoomi Pujan, June 2026", tag: "Project Commencement" },
  { src: galleryInclineWorkers, caption: "Structural Access Work" },
  { src: galleryAerialRebarWorker, caption: "Aerial Rebar Placement" },
  { src: servicesCrane, caption: "Structural Framework" },
  { src: galleryScaffoldClimb, caption: "Scaffold Access Work" },
  { src: galleryBlueprintSketch, caption: "Technical Drawing" },
  { src: ctaPoster, caption: "Cranes at Dusk" },
  { src: galleryAerialEarthwork, caption: "Aerial Earthwork" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-surface-soft py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Our Work in the Field"
          title="Evidence, Not Decoration"
          description="Geotagged site documentation and project-commencement records alongside our day-to-day civil and railway works."
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
