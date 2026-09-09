import { type AnchorHTMLAttributes, type ButtonHTMLAttributes } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";

const variants = {
  primary: "bg-accent text-white hover:bg-accent-dark",
  dark: "bg-ink text-white hover:bg-ink-soft",
  outline: "border border-ink/15 text-ink hover:border-ink/40 bg-transparent",
  "outline-light": "border border-white/30 text-white hover:border-white/70 bg-transparent",
};

type Variant = keyof typeof variants;

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 whitespace-nowrap";

export function Button({
  variant = "primary",
  withArrow = true,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  withArrow?: boolean;
}) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
      {withArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </button>
  );
}

export function LinkButton({
  variant = "primary",
  withArrow = true,
  className,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  withArrow?: boolean;
}) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
      {withArrow && (
        <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
}
