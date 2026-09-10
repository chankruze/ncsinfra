/**
 * Soft accent glow + hairline seam, for the top edge of a dark section that
 * follows another dark section — an alternative to a bordered/shaped divider
 * that can't collide with anything at any viewport width.
 */
export function GlowSeam() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 h-32 w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
    </>
  );
}
