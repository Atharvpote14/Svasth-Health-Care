import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

/**
 * StickyMobileBar — the mobile action dock.
 *
 * Three changes. It slides up on first paint (.care-dock) instead of appearing
 * abruptly over the content. It reserves the iOS home-indicator inset, which the
 * old fixed py-3 did not, so the buttons were partly under the gesture bar on
 * recent iPhones. And calling is now the accent action rather than the outline
 * one: for this audience the phone is the conversion path, not a secondary
 * option, and the previous order made the quieter button the one people wanted.
 *
 * No longer a client component — it holds no state, and the entrance is CSS.
 */

const StickyMobileBar = ({
  callHref,
  callLabel = "Call care team",
  bookHref,
  bookLabel = "Book care",
  className = "",
}) => {
  return (
    <>
      {/* Flow spacer. The dock is position:fixed, so on mobile it would sit on
         top of the footer. StickyMobileBar is the last element before the
         footer on every page that renders it, so this reserves matching space
         in normal flow — including the iOS home-indicator inset — pushing the
         footer clear of the dock. Collapses once the dock is hidden (md+). */}
      <div
        aria-hidden="true"
        className="md:hidden"
        style={{ height: "calc(4.5rem + env(safe-area-inset-bottom))" }}
      />
      <div
        className={`care-dock fixed inset-x-0 bottom-0 z-30 flex items-center gap-3 border-t border-[var(--care-rule-strong)] bg-white/95 px-4 pt-3 backdrop-blur md:hidden ${className}`}
      >
        <a
          href={callHref}
          className="btn btn-primary h-12 flex-1 text-[14px]"
        >
          <Phone size={16} strokeWidth={2} aria-hidden="true" />
          {callLabel}
        </a>

        <Link
          href={bookHref}
          className="group flex shrink-0 items-center gap-1.5 px-2 care-label text-primary"
        >
          {bookLabel}
          <ArrowRight
            size={13}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-250 ease-standard group-hover:translate-x-1"
          />
        </Link>
      </div>
    </>
  );
};

export default StickyMobileBar;
