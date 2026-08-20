"use client";

/**
 * CountUp — counts a numeric stat from 0 to `value` once when it scrolls
 * into view (ease-out cubic). No-JS safe: server markup shows the final
 * value; the count-up only starts after hydration. Respects
 * prefers-reduced-motion by rendering the final value immediately.
 */

import { useEffect, useRef, useState } from "react";

const CountUp = ({
  value,
  decimals = 0,
  suffix = "",
  duration = 1400,
  className = "",
}) => {
  const ref = useRef(null);
  const [display, setDisplay] = useState(value.toFixed(decimals));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const animate = () => {
      if (prefersReducedMotion) {
        setDisplay(value.toFixed(decimals));
        return;
      }

      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setDisplay((value * eased).toFixed(decimals));
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    setDisplay((0).toFixed(decimals));

    if (typeof IntersectionObserver === "undefined") {
      animate();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, decimals, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;