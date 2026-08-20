"use client";

/**
 * Reveal — scroll-triggered fade + slight upward slide for section entrances.
 *
 * No-JS safe: the hiding class (.reveal-pending) is only added by JS after
 * hydration, so server-rendered content without JavaScript stays fully visible.
 * prefers-reduced-motion is handled by the global media query in globals.css,
 * which zeroes transition durations.
 */

import { useEffect, useRef } from "react";

const Reveal = ({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  ...rest
}) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.classList.add("reveal-pending");

    if (typeof IntersectionObserver === "undefined") {
      el.classList.remove("reveal-pending");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
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