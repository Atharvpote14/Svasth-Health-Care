"use client";

/**
 * CityCoverageSection — organized city/region coverage (state → city accordion).
 * Portea footprint-sec / faq-list styling: white accordion with border
 * rgba(0,151,158,.16) and 16px radius, open items get the ivory fill +
 * inset 3px primary bar, city chips are pill badges on ivory.
 * Cities are REAL (SUPPORTED_CITIES from site.js), grouped by state.
 */

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import Reveal from "../../Reveal";

const CITY_STATES = [
  {
    state: "Maharashtra",
    cities: ["Mumbai", "Pune"],
  },
  {
    state: "Karnataka",
    cities: ["Bangalore", "Mysore"],
  },
  {
    state: "Tamil Nadu",
    cities: ["Chennai", "Madurai"],
  },
  {
    state: "Telangana",
    cities: ["Hyderabad"],
  },
  {
    state: "West Bengal",
    cities: ["Kolkata"],
  },
  {
    state: "Delhi NCR",
    cities: ["Delhi NCR"],
  },
  {
    state: "Madhya Pradesh",
    cities: ["Indore"],
  },
  {
    state: "Assam",
    cities: ["Guwahati"],
  },
];

const CityCoverageSection = ({ states = CITY_STATES, className = "" }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`bg-neutral-100 py-10 md:py-[70px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Cities we serve
            </p>
            <h2 className="font-display text-[24px] font-semibold leading-[1.3] text-neutral-900 md:text-[36px]">
              Care available across 11 cities
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-lg leading-[1.6] text-neutral-600">
              Select a region to see the cities where CareNest operates.
            </p>
          </div>

          <div className="accordion">
            {states.map((region, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={region.state}
                  className={isOpen ? "bg-neutral-100 shadow-[inset_3px_0_0_0_rgba(0,151,158,1)]" : ""}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="accordion-header"
                  >
                    <span>{region.state}</span>
                    <ChevronDown
                      size={18}
                      aria-hidden="true"
                      className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="accordion-content flex flex-wrap gap-3">
                      {region.cities.map((city) => (
                        <li key={city}>
                          <span className="inline-flex items-center gap-2 rounded-full border border-[rgba(0,151,158,0.16)] bg-white px-4 py-2 text-sm font-medium text-neutral-900">
                            <MapPin size={14} aria-hidden="true" className="text-primary" />
                            {city}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CityCoverageSection;