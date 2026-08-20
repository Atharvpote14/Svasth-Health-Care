"use client";

/**
 * StatsStrip — home page trust stats (Portea details-sec).
 * Portea design system: dotted teal-tinted gradient band, strong numbers
 * 38px/700 in primary #00979e (21px mobile), 12px/600 uppercase labels with
 * .12em tracking, per-item left border rgba(13,34,34,.1).
 */

import { Award, BadgeCheck, Star, Users } from "lucide-react";
import CountUp from "../../CountUp";
import Reveal from "../../Reveal";

const STATS = [
  { icon: Users, value: 1, decimals: 0, suffix: "Mn+", label: "Patients served a year" },
  { icon: BadgeCheck, value: 2, decimals: 0, suffix: "K+", label: "Trained and verified caregivers" },
  { icon: Award, value: null, label: "Badge of honor" },
  { icon: Star, value: 4.9, decimals: 1, suffix: "", label: "Rating on Google" },
];

const StatsStrip = ({ className = "" }) => {
  return (
    <section
      className={`band-ivory-dotted relative border-y border-[rgba(13,34,34,0.06)] ${className}`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:py-14">
        {STATS.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 80}>
            <div className="flex flex-col items-center gap-1 border-l border-[rgba(13,34,34,0.1)] text-center md:pl-6">
              <stat.icon
                size={24}
                strokeWidth={1.5}
                aria-hidden="true"
                className="mb-1 text-primary"
              />
              {stat.value !== null ? (
                <p className="font-display text-[21px] font-bold text-primary md:text-[38px]">
                  <CountUp
                    value={stat.value}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                  />
                </p>
              ) : (
                <p className="font-display text-[21px] font-bold text-primary md:text-[38px]">QAI</p>
              )}
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-600 md:text-xs">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default StatsStrip;