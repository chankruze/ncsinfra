import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "../../components/ui/container";
import { SectionHeading } from "../../components/ui/section-heading";
import { Button } from "../../components/ui/button";
import { Reveal } from "../../components/ui/reveal";
import { site } from "../../data/site";

const projectTypes = [
  "Railway",
  "Government Infrastructure",
  "Industrial",
  "Commercial",
  "Private",
  "Other",
];

const inputClass =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-accent focus:ring-1 focus:ring-accent focus:outline-none";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const lines = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "—"}`,
      `Phone: ${data.get("phone")}`,
      `Email: ${data.get("email") || "—"}`,
      `Project Type: ${data.get("projectType")}`,
      `Project Location: ${data.get("location") || "—"}`,
      "",
      `${data.get("message") || ""}`,
    ];
    const subject = encodeURIComponent(
      `Project Enquiry — ${data.get("name")}`,
    );
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${site.emails[0]}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Have an Infrastructure Project in Mind?"
            description="Tell us what you're planning. Our team will get in touch to discuss your requirements."
          />

          <Reveal delay={0.2} className="mt-10 space-y-5">
            <a
              href={`tel:${site.phones[0]}`}
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent"
            >
              <Phone className="size-5 text-accent" />
              {site.phones.join(" / ")}
            </a>
            <a
              href={`mailto:${site.emails[0]}`}
              className="flex items-center gap-3 text-sm font-medium text-ink hover:text-accent"
            >
              <Mail className="size-5 text-accent" />
              {site.emails.join(" / ")}
            </a>
            <p className="flex items-center gap-3 text-sm font-medium text-ink">
              <MapPin className="size-5 text-accent" />
              {site.location}
            </p>
          </Reveal>

          <Reveal delay={0.28} className="mt-8 rounded-xl border border-line bg-surface-soft px-5 py-4">
            <p className="text-xs font-semibold tracking-wide text-muted uppercase">
              Government Registration
            </p>
            <p className="mt-1 text-sm font-medium text-ink">
              IREPS ID — {site.ireps}
            </p>
            <p className="mt-1 text-sm font-medium text-ink">
              GSTIN — {site.gstin}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-surface-soft p-6 md:p-8"
          >
            {submitted && (
              <div className="mb-6 rounded-lg bg-accent-soft px-4 py-3 text-sm font-medium text-accent-dark">
                Your email client should now be open with your enquiry
                pre-filled — send it and our team will get back to you.
              </div>
            )}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Name *
                </label>
                <input required name="name" className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Company / Organisation
                </label>
                <input name="company" className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Phone *
                </label>
                <input required name="phone" type="tel" className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Email
                </label>
                <input name="email" type="email" className={inputClass} />
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Project Type *
                </label>
                <select required name="projectType" defaultValue="" className={inputClass}>
                  <option value="" disabled>
                    Select type
                  </option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-1">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Project Location
                </label>
                <input name="location" className={inputClass} />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-semibold text-ink/70">
                  Message / Requirements
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className={inputClass}
                />
              </div>
            </div>

            <Button type="submit" className="mt-6 w-full sm:w-auto">
              Request a Consultation
            </Button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
