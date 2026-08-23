"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowRight, ChevronDown, Phone } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "../../../lib/site";

/**
 * ServiceSelector — the intake strip.
 *
 * Styled as a slip laid on top of the hero's ruled sheet: the hub pages pull it
 * up over the hero's bottom edge, so the first interactive thing on the page sits
 * physically on the chart rather than floating in white space below it.
 *
 * The native <select> is kept — on Android and iOS it opens the platform picker,
 * which is faster and more accessible than any custom listbox, and this audience
 * is overwhelmingly on a phone. Only the chrome is restyled: appearance-none plus
 * a positioned chevron, with pr-11 reserving room so a long service name cannot
 * run underneath it.
 *
 * The submit reads "Continue" rather than "Book Now". It navigates to a service
 * page; nothing is booked, and the label should not promise otherwise.
 */

const ServiceSelector = ({ groups = [], className = "" }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(() => {
    const first = groups[0]?.options?.[0];
    return first ? first.href : "";
  });

  if (groups.length === 0) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selected) router.push(selected);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-[var(--care-rule-strong)] bg-white p-5 shadow-[0_18px_44px_-28px_rgba(13,34,34,0.4)] md:p-6 ${className}`}
    >
      <label
        htmlFor="care-selector"
        className="care-eyebrow mb-4 text-neutral-900"
      >
        What care do you need?
      </label>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <select
            id="care-selector"
            name="care"
            value={selected}
            onChange={(event) => setSelected(event.target.value)}
            className="h-12 w-full appearance-none rounded-xl border border-[var(--care-rule-strong)] bg-white pl-4 pr-11 text-[15px] text-neutral-900 focus:border-primary"
          >
            {groups.map((group) => (
              <optgroup key={group.label} label={group.label}>
                {group.options.map((option) => (
                  <option key={option.href} value={option.href}>
                    {option.label}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>

          <ChevronDown
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary"
          />
        </div>

        <button type="submit" className="btn btn-primary group h-12 px-6 text-[15px]">
          Continue
          <ArrowRight
            size={15}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
          />
        </button>
      </div>

      <p className="mt-4 border-t border-[var(--care-rule)] pt-4 text-[13px] text-[var(--care-mute)]">
        Not sure which one?{" "}
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-1.5 font-mono tabular-nums text-primary hover:text-primary-600 hover:underline"
        >
          <Phone size={13} strokeWidth={2} aria-hidden="true" />
          {PHONE_NUMBER}
        </a>
      </p>
    </form>
  );
};

export default ServiceSelector;
