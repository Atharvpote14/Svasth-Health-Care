"use client";

/**
 * ServiceSelector — "What care do you need?" booking selector (home hero).
 * Portea hero-book-strip: orange main-btn "Book Now" + teal-outline phone.
 */

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Phone } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER } from "../../../lib/site";

const ServiceSelector = ({ groups = [] }) => {
  const router = useRouter();
  const [selected, setSelected] = useState(() => {
    const first = groups[0]?.options?.[0];
    return first ? first.href : "/home-visit/";
  });

  if (groups.length === 0) return null;

  const handleBookNow = (event) => {
    event.preventDefault();
    if (selected) router.push(selected);
  };

  return (
    <form
      onSubmit={handleBookNow}
      className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
    >
      <div className="flex-1">
        <label
          htmlFor="care-selector"
          className="mb-1 block text-sm font-semibold text-neutral-900"
        >
          What care do you need?
        </label>
        <select
          id="care-selector"
          name="care"
          value={selected}
          onChange={(event) => setSelected(event.target.value)}
          className="w-full rounded-[10px] border border-[rgba(13,34,34,0.1)] bg-white px-3 py-3 text-base text-neutral-800 focus:border-primary focus:ring-2 focus:ring-primary/20"
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
      </div>

      <button
        type="submit"
        className="btn btn-primary mt-1 px-10 py-3 text-lg sm:mt-6"
      >
        Book Now
      </button>

      <a
        href={PHONE_HREF}
        className="btn btn-secondary mt-1 px-6 py-3 text-base sm:mt-6"
      >
        <Phone size={18} aria-hidden="true" />
        {PHONE_NUMBER}
      </a>
    </form>
  );
};

export default ServiceSelector;