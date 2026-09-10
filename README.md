# NCS Infra — Marketing Website

Marketing/landing site for **NCS Infra** (Nrusingha Charan Swain), a
government-approved railway civil infrastructure contractor based in
Khurda, Odisha (IREPS ID 96147).

Built with Vite, React, TypeScript, Tailwind CSS v4 and Framer Motion.
Content and figures are sourced from the company profile (NCS-96147)
and organised as typed data modules under `src/data/`.

## Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** — theme tokens defined in `src/index.css` via `@theme`
- **Framer Motion** — scroll-reveal animations (`src/components/ui/reveal.tsx`)
- **lucide-react** — iconography
- Self-hosted variable fonts: Inter (body) and Space Grotesk (display)

## Structure

```
src/
  pages/
    home/       One file per homepage section (hero, projects, contact, ...) + index.tsx composing them
  components/
    layout/     header, footer, developer-credit
    ui/         Shared building blocks (button, container, reveal, section-heading)
  data/         Typed content extracted from the company profile
  assets/       Curated + optimised photography, real geotagged field photos, logos
```

The homepage (`src/pages/home/index.tsx`) composes sections in this order: Hero →
Trust Bar → About → Services → Projects → Railway Expertise → Why Us →
Financials → Video CTA → Gallery → Founder → FAQ → Contact.

## Notable implementation details

- The **Video CTA** section embeds the requested YouTube video as a
  chromeless, muted, looping background (`youtube-background.tsx`) using
  the standard 16:9-oversize-and-center technique so it always covers
  the section regardless of viewport ratio. Disabled on small screens
  in favour of a static poster image to save mobile bandwidth.
- The **Financials** turnover charts are hand-built inline SVG (no
  charting library), single-series in the brand accent, with direct
  value labels and native hover tooltips.
- The **Contact** form has no backend — submitting composes a
  pre-filled `mailto:` to the founder's inbox.
- Gallery includes real geotagged site photos cropped from the company
  profile's field documentation (Puri, Odisha) alongside supporting
  site-work photography.

## Development

```bash
npm install
npm run dev       # start dev server
npm run build     # type-check + production build
npm run lint      # eslint
```
