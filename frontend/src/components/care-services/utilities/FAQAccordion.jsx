"use client";

import { useState } from "react";

/**
 * FAQAccordion — soft rows.
 *
 * Built on local utilities rather than the shared .accordion / .accordion-header
 * / .accordion-content classes. Those are consumed by
 * pages/diagnostics-equipment/shared.jsx, so restyling them in globals.css would
 * have changed another person's pages; this keeps the change contained.
 *
 * Each question is its own rounded surface that tints when it opens, rather than
 * a row divided from the next one by a hairline. A long stack of hairline rows is
 * the thing that made this page read as ruled paper, and it also gave no feedback
 * on which row you were about to open.
 *
 * The chevron is replaced by a plus whose vertical stroke scales to nothing on
 * open. It is cheaper than an icon import, it animates crisply at any size, and
 * the state change is legible at a glance rather than requiring the reader to
 * judge which way an arrow points.
 */

const FAQAccordion = ({ items = [], allowMultiple = false, className = "" }) => {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((current) => {
      if (allowMultiple) {
        return current.includes(id)
          ? current.filter((itemId) => itemId !== id)
          : [...current, id];
      }

      return current.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={`grid gap-2.5 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `faq-panel-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-2xl px-5 transition-colors duration-250 ease-standard ${
              isOpen
                ? "bg-[var(--care-mist)]"
                : "hover:bg-[var(--care-mist)]"
            }`}
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                className="group flex w-full items-start justify-between gap-6 py-5 text-left"
              >
                <span
                  className={`care-h3 font-display transition-colors duration-250 ease-standard ${
                    isOpen
                      ? "text-primary"
                      : "text-neutral-900 group-hover:text-primary"
                  }`}
                >
                  {item.question}
                </span>

                {/* Plus → minus. Decorative; state is on aria-expanded. */}
                <span
                  aria-hidden="true"
                  className="relative mt-1.5 block h-3 w-3 shrink-0"
                >
                  <span className="absolute left-0 top-1/2 h-px w-3 -translate-y-1/2 bg-primary" />
                  <span
                    className={`absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-primary transition-transform duration-250 ease-standard ${
                      isOpen ? "scale-y-0" : "scale-y-100"
                    }`}
                  />
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-250 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="pb-5 pr-10 text-[15px] leading-[1.75] text-[var(--care-mute)]">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;
