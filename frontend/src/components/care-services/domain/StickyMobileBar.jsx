"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

const StickyMobileBar = ({
  callHref,
  callLabel = "Call care team",
  bookHref,
  bookLabel = "Book care",
  className = "",
}) => {
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-30 grid grid-cols-2 gap-3 border-t border-neutral-200 bg-white px-4 py-3 shadow-lg md:hidden ${className}`}
    >
      <a
        href={callHref}
        className="btn btn-secondary h-12"
        aria-label={callLabel}
      >
        <Phone size={18} aria-hidden="true" />
        {callLabel}
      </a>
      <Link href={bookHref} className="btn btn-primary h-12">
        {bookLabel}
      </Link>
    </div>
  );
};

export default StickyMobileBar;