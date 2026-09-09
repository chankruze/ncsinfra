import { useState } from "react";
import { Plus } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { faqs } from "../../data/capabilities";
import { cn } from "../../lib/cn";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface-soft py-24 md:py-32">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[minmax(0,320px)_1fr]">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Answers for railway officials, procurement teams and private clients evaluating NCS Infra."
        />

        <div className="divide-y divide-line border-t border-line">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-medium text-ink md:text-lg">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "size-5 shrink-0 text-accent transition-transform duration-300",
                      isOpen && "rotate-45",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-all duration-300",
                    isOpen
                      ? "grid-rows-[1fr] pb-5 opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="min-h-0">
                    <p className="max-w-2xl leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
