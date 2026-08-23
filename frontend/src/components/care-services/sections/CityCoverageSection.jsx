import { MapPin } from "lucide-react";
import Reveal from "../../Reveal";
import { SUPPORTED_CITIES } from "../../../lib/site";

/**
 * CityCoverageSection — coverage as a ruled register.
 *
 * Previously an accordion opening one region at a time, which meant a reader
 * checking whether their city was covered had to click through eight regions to
 * find out. There are only eleven cities; hiding them behind interaction added
 * friction and bought nothing. They are now all visible as ruled rows — region
 * in the gutter, cities in the field — which is both faster to scan and
 * consistent with the chart language used everywhere else.
 *
 * Dropping the accordion also drops a client component and its useState: this
 * is now a server component that ships no JavaScript.
 *
 * The headline count is derived from SUPPORTED_CITIES rather than hardcoded, so
 * it cannot drift out of step with the data the way a literal "11" would.
 */

const CITY_STATES = [
  { state: "Maharashtra", cities: ["Mumbai", "Pune"] },
  { state: "Karnataka", cities: ["Bangalore", "Mysore"] },
  { state: "Tamil Nadu", cities: ["Chennai", "Madurai"] },
  { state: "Telangana", cities: ["Hyderabad"] },
  { state: "West Bengal", cities: ["Kolkata"] },
  { state: "Delhi NCR", cities: ["Delhi NCR"] },
  { state: "Madhya Pradesh", cities: ["Indore"] },
  { state: "Assam", cities: ["Guwahati"] },
];

const CityCoverageSection = ({ states = CITY_STATES, className = "" }) => {
  const cityCount = SUPPORTED_CITIES.length;

  return (
    <section className={`care-band py-14 md:py-[88px] ${className}`}>
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-11 max-w-xl">
            <p className="care-eyebrow mb-4">Cities we serve</p>
            <h2 className="care-h2 font-display">
              Care available in {cityCount} cities
            </h2>
            <p className="care-lead mt-4">
              If your city is listed, the care team can arrange a professional
              there. If it is not, call anyway — coverage changes.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <dl className="border-t border-[var(--care-rule-strong)]">
            {states.map((region) => (
              <div
                key={region.state}
                className="grid grid-cols-1 gap-1 border-b border-[var(--care-rule)] py-4 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-6 sm:py-3.5"
              >
                <dt className="flex items-center gap-2 care-label text-[var(--care-mute)]">
                  <MapPin
                    size={13}
                    strokeWidth={1.75}
                    aria-hidden="true"
                    className="text-primary"
                  />
                  {region.state}
                </dt>

                <dd className="text-[15px] text-neutral-900">
                  {region.cities.join(" · ")}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
};

export default CityCoverageSection;
