/**
 * CareNeedsSection — "Care Tailored for your specific needs".
 * Redesign: replaces the raw link-list with a grouped pill grid that has
 * hover states, consistent spacing, and clear visual weight.
 * CHANGE (7-color system): pills use Neutral Light background with Neutral
 * Dark text by default; on hover the background shifts to Trust Blue with
 * white text. Section sits on Base White so the pills read clearly.
 */

import Link from "next/link";
import Reveal from "../../Reveal";

const CareNeedsSection = ({
  eyebrow = "Care tailored for your specific needs",
  title = "Care tailored for your specific needs",
  groups = [],
  className = "",
}) => {
  if (groups.length === 0) return null;

  return (
    <section className={`bg-white ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="mb-10">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-secondary">
                {eyebrow}
              </p>
            )}
            <h2 className="font-display text-[26px] font-bold text-neutral-900 md:text-[32px]">
              {title}
            </h2>
            <p className="mt-3 max-w-2xl text-base text-neutral-600">
              Every service, delivered at home by trained, verified professionals —
              find the care that fits your family.
            </p>
          </div>

          <div className="space-y-8">
            {groups.map((group) => (
              <div key={group.label}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.08em] text-neutral-600">
                  {group.label}
                </h3>
                <ul className="flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <li key={`${group.label}-${item.label}`}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-center gap-[10px] rounded-[20px] bg-neutral-100 px-5 py-[10px] text-sm font-medium text-neutral-900 transition-colors duration-200 hover:bg-secondary hover:text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default CareNeedsSection;