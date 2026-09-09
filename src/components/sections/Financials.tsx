import blueprintImage from "../../assets/photos/blueprint.jpg";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { LinkButton } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import {
  annualTurnover,
  cumulativeTurnover,
  financials,
} from "../../data/capabilities";

const CHART_W = 320;
const CHART_H = 180;
const PAD_L = 34;
const PAD_R = 12;
const PAD_T = 22;
const PAD_B = 24;

function AnnualTurnoverChart() {
  const max = 2;
  const innerW = CHART_W - PAD_L - PAD_R;
  const innerH = CHART_H - PAD_T - PAD_B;
  const bandW = innerW / annualTurnover.length;
  const barW = Math.min(24, bandW * 0.5);
  const yTicks = [0, 0.5, 1, 1.5, 2];

  return (
    <svg
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      className="w-full"
      role="img"
      aria-label="Annual turnover growth, in ₹ Crore, from FY 2016–17 to FY 2020–21"
    >
      {yTicks.map((t) => {
        const y = PAD_T + innerH - (t / max) * innerH;
        return (
          <g key={t}>
            <line
              x1={PAD_L}
              x2={CHART_W - PAD_R}
              y1={y}
              y2={y}
              stroke="var(--color-line)"
              strokeWidth={1}
            />
            <text x={PAD_L - 8} y={y + 3} textAnchor="end" fontSize="8" fill="var(--color-muted)">
              {t}
            </text>
          </g>
        );
      })}

      {annualTurnover.map((d, i) => {
        const x = PAD_L + i * bandW + (bandW - barW) / 2;
        const h = (d.value / max) * innerH;
        const y = PAD_T + innerH - h;
        return (
          <g key={d.year}>
            <title>{`${d.year}: ₹${d.value} Cr`}</title>
            <rect x={x} y={y} width={barW} height={h} rx={4} fill="var(--color-accent)" />
            <text
              x={x + barW / 2}
              y={y - 6}
              textAnchor="middle"
              fontSize="9"
              fontWeight={600}
              fill="var(--color-ink)"
            >
              {d.value}
            </text>
            <text
              x={x + barW / 2}
              y={CHART_H - 8}
              textAnchor="middle"
              fontSize="7.5"
              fill="var(--color-muted)"
            >
              {d.year.replace("FY ", "")}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function CumulativeTurnoverChart() {
  const max = 5;
  const innerW = CHART_W - PAD_L - PAD_R;
  const innerH = CHART_H - PAD_T - PAD_B;
  const stepX = innerW / (cumulativeTurnover.length - 1);
  const yTicks = [0, 1, 2, 3, 4, 5];

  const points = cumulativeTurnover.map((d, i) => ({
    x: PAD_L + i * stepX,
    y: PAD_T + innerH - (d.value / max) * innerH,
    ...d,
  }));
  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`)
    .join(" ");

  return (
    <svg
      viewBox={`0 0 ${CHART_W} ${CHART_H}`}
      className="w-full"
      role="img"
      aria-label="Cumulative turnover, in ₹ Crore, reaching ₹4.64 Crore over 5 years"
    >
      {yTicks.map((t) => {
        const y = PAD_T + innerH - (t / max) * innerH;
        return (
          <g key={t}>
            <line
              x1={PAD_L}
              x2={CHART_W - PAD_R}
              y1={y}
              y2={y}
              stroke="var(--color-line)"
              strokeWidth={1}
            />
            <text x={PAD_L - 8} y={y + 3} textAnchor="end" fontSize="8" fill="var(--color-muted)">
              {t}
            </text>
          </g>
        );
      })}

      <path d={path} fill="none" stroke="var(--color-accent)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />

      {points.map((p, i) => (
        <g key={p.year}>
          <title>{`${p.year}: ₹${p.value} Cr cumulative`}</title>
          <circle cx={p.x} cy={p.y} r={4} fill="var(--color-accent)" stroke="var(--color-surface)" strokeWidth={2} />
          {i === points.length - 1 && (
            <text x={p.x} y={p.y - 10} textAnchor="end" fontSize="9" fontWeight={600} fill="var(--color-ink)">
              ₹{p.value} Cr
            </text>
          )}
          <text x={p.x} y={CHART_H - 8} textAnchor="middle" fontSize="7.5" fill="var(--color-muted)">
            {p.year.replace("FY ", "")}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function Financials() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <img
        src={blueprintImage}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.04]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Financial Strength"
          title="Financial & Execution Capability"
          description="Our financial performance reflects a foundation built on consistent project execution, disciplined financial management and long-term trust with government clients — certified by ABPS & Associates, Chartered Accountants."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {financials.map((stat, i) => (
            <Reveal key={stat.label} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-2xl border border-line bg-surface p-7">
                <p className="font-display text-3xl font-medium text-ink">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink/80">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs tracking-wide text-muted uppercase">
                  {stat.sublabel}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-line bg-surface p-7">
              <h3 className="font-display text-base font-medium text-ink">
                Annual Turnover Growth
              </h3>
              <p className="text-xs text-muted">Rs. Crore, by financial year</p>
              <div className="mt-4">
                <AnnualTurnoverChart />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-line bg-surface p-7">
              <h3 className="font-display text-base font-medium text-ink">
                Cumulative Turnover
              </h3>
              <p className="text-xs text-muted">Rs. Crore, 5-year total</p>
              <div className="mt-4">
                <CumulativeTurnoverChart />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <LinkButton href="#contact" variant="dark">
            Request Company Profile
          </LinkButton>
        </Reveal>
      </Container>
    </section>
  );
}
