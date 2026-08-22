"use client";

/**
 * TestimonialsSection — patient testimonial carousel.
 * Portea testimonials-section: white band; scroll-snap flex track (hidden
 * scrollbar, gap 1rem, cards flex-basis 400px desktop / 85% mobile);
 * 44px circular arrows (white bg, border rgba(0,151,158,.35), teal icon,
 * shadow 0 4px 14px rgba(13,34,34,.12)); card radius 12px, border
 * rgba(0,151,158,.14), shadow 0 3px 12px rgba(13,34,34,.05); letter-avatar
 * 48px circle bg rgba(0,151,158,.1) / 2px border rgba(0,151,158,.25) /
 * text #00767c.
 * [PENDING REAL TESTIMONIALS — DO NOT PUBLISH WITH DUMMY TEXT] — The client has no
 * testimonials yet; swap the placeholder cards for real, approved quotes before
 * launch. Placeholder cards are visibly marked and must never ship as-is.
 */

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import Reveal from "../../Reveal";

const PLACEHOLDER_TESTIMONIALS = [
  {
    id: "t1",
    quote: "[PENDING REAL TESTIMONIAL — DO NOT PUBLISH WITH DUMMY TEXT]",
    name: "[Patient name]",
    city: "[City]",
  },
  {
    id: "t2",
    quote: "[PENDING REAL TESTIMONIAL — DO NOT PUBLISH WITH DUMMY TEXT]",
    name: "[Patient name]",
    city: "[City]",
  },
  {
    id: "t3",
    quote: "[PENDING REAL TESTIMONIAL — DO NOT PUBLISH WITH DUMMY TEXT]",
    name: "[Patient name]",
    city: "[City]",
  },
];

const TestimonialsSection = ({ items = PLACEHOLDER_TESTIMONIALS, className = "" }) => {
  const trackRef = useRef(null);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const amount = (card ? card.offsetWidth + 16 : 320) * direction;
    track.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className={`bg-white py-10 md:py-[70px] ${className}`}>
      <Reveal>
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Testimonials
              </p>
              <h2 className="font-display text-[24px] font-semibold leading-[1.3] text-neutral-900 md:text-[36px]">
                Families trust CareNest
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-[1.6] text-neutral-600">
                [PENDING REAL TESTIMONIALS — DO NOT PUBLISH WITH DUMMY TEXT]
              </p>
            </div>
            <div className="flex shrink-0 gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                aria-label="Previous testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,151,158,0.35)] bg-white text-primary shadow-[0_4px_14px_rgba(13,34,34,0.12)] transition-colors duration-150 hover:bg-primary hover:text-white"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                aria-label="Next testimonials"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(0,151,158,0.35)] bg-white text-primary shadow-[0_4px_14px_rgba(13,34,34,0.12)] transition-colors duration-150 hover:bg-primary hover:text-white"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((testimonial) => (
              <article
                key={testimonial.id}
                className="flex w-[85%] max-w-[340px] shrink-0 snap-center flex-col gap-4 rounded-[12px] border border-[rgba(0,151,158,0.14)] bg-white p-6 shadow-[0_3px_12px_rgba(13,34,34,0.05)] md:w-[400px] md:max-w-none md:flex-none md:snap-start md:p-7"
              >
                <Quote size={22} aria-hidden="true" className="text-primary" />
                <p className="text-[15px] leading-[1.6] text-neutral-600">
                  {testimonial.quote}
                </p>
                <div className="mt-auto flex items-center gap-3 border-t border-[#eef4f4] pt-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[rgba(0,151,158,0.25)] bg-[rgba(0,151,158,0.1)] text-sm font-semibold text-[#00767c]" aria-hidden="true">
                    {(testimonial.name || "?").charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-neutral-900">{testimonial.name}</p>
                    <p className="text-xs text-neutral-600">{testimonial.city}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default TestimonialsSection;