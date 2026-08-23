"use client";

/**
 * Reveal — scroll-triggered fade + slight upward slide for section entrances.
 *
 * No-JS safe: the hiding class (.reveal-pending) is only ever added by JS, so
 * server-rendered content without JavaScript stays fully visible.
 *
 * Two corrections to the original implementation:
 *
 * 1. It ran in useEffect, which fires *after* the browser has painted. Anything
 *    already inside the viewport therefore painted at full opacity, then jumped
 *    to opacity 0 as the class landed, then transitioned back — a visible blink
 *    on every above-the-fold section. The work now happens in a layout effect,
 *    before paint.
 *
 * 2. Content already in view is left alone entirely rather than being hidden and
 *    re-shown. There is nothing to reveal in something the reader is already
 *    looking at, and the page's orchestrated entrance belongs to the hero, which
 *    runs its own CSS-only sequence. Reveal is for content scrolled into.
 *
 * prefers-reduced-motion is handled by the global media query in globals.css,
 * which zeroes transition durations.
 */

import { useEffect, useLayoutEffect, useRef } from "react";

const useIsomorphicLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

const Reveal = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) => {
  const ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") return;

    // Already on screen — leave it untouched so it cannot flash.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 0;
    if (rect.top < viewportHeight * 0.92 && rect.bottom > 0) return;

    el.classList.add("reveal-pending");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
