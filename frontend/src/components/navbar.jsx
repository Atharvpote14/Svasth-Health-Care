"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { PHONE_HREF, PHONE_NUMBER, SITE_NAME } from "@/lib/site";

/**
 * Navbar — responsive primary navigation.
 *
 * Desktop (lg+) renders the inline link row as before. Below lg it collapses to
 * a hamburger that opens an accessible slide-in drawer.
 *
 * The drawer is rendered through a portal to document.body on purpose: the
 * <header> carries `backdrop-filter` (.care-header), which establishes a
 * containing block, so a position:fixed child of the header would be sized
 * against the 64px header box instead of the viewport. Portalling to <body>
 * frees it to cover the full screen. For the same reason the drawer uses literal
 * brand colours rather than care-* CSS vars, since the portal target may sit
 * outside the .care-theme scope.
 */

const isActive = (pathname, href) => {
  const norm = (p) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
  return norm(pathname || "/") === norm(href);
};

const Navbar = ({ items = [], className = "" }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef(null);
  const pathname = usePathname();

  // Portals need the DOM; only render the drawer after mount to avoid SSR/
  // hydration mismatches.
  useEffect(() => setMounted(true), []);

  // Close on client-side route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // The drawer is mobile-only; if the viewport grows past the lg breakpoint
  // while it is open (rotation, resize), close it so scroll lock is released.
  useEffect(() => {
    if (!open) return undefined;
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the trigger so keyboard users are not dropped at the top
    // of the document.
    triggerRef.current?.focus();
  }, []);

  return (
    <nav className={`navbar flex items-center ${className}`} aria-label="Primary">
      {/* Desktop: inline links (hidden below lg) */}
      <ul className="navbar-list hidden lg:flex">
        {items.map((item) => (
          <li className="navbar-item" key={item.path || item.label}>
            <Link
              href={item.path}
              aria-current={isActive(pathname, item.path) ? "page" : undefined}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile: hamburger (hidden at lg+) */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-neutral-700 transition-colors duration-250 ease-standard hover:bg-black/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
      >
        <Menu size={24} strokeWidth={1.75} aria-hidden="true" />
      </button>

      {mounted &&
        open &&
        createPortal(
          <MobileDrawer items={items} pathname={pathname} onClose={close} />,
          document.body
        )}
    </nav>
  );
};

/**
 * MobileDrawer — the slide-in panel. Mounted only while open; the enter
 * animation is triggered a frame after mount so the closed state paints first.
 */
function MobileDrawer({ items, pathname, onClose }) {
  const panelRef = useRef(null);
  const closeBtnRef = useRef(null);
  const [shown, setShown] = useState(false);

  // Enter animation: paint the closed frame, then flip to open next frame.
  useEffect(() => {
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, []);

  // Move focus into the drawer once it is on screen.
  useEffect(() => {
    closeBtnRef.current?.focus();
  }, []);

  const onKeyDown = (event) => {
    if (event.key === "Escape") {
      event.stopPropagation();
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    // Simple focus trap: keep Tab cycling within the panel.
    const focusables = panelRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables || focusables.length === 0) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      id="mobile-nav-panel"
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className="fixed inset-0 z-[60] lg:hidden"
      onKeyDown={onKeyDown}
    >
      {/* Scrim */}
      <div
        aria-hidden="true"
        onClick={onClose}
        className={`absolute inset-0 bg-[#06282a]/45 transition-opacity duration-250 ease-standard ${
          shown ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className={`absolute inset-y-0 right-0 flex h-full w-[min(20rem,86vw)] flex-col bg-[#faf8f3] shadow-2xl transition-transform duration-250 ease-standard ${
          shown ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-black/5 pl-5 pr-3">
          <span className="font-display text-lg text-neutral-900">
            {SITE_NAME}
          </span>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] text-neutral-600 transition-colors duration-250 ease-standard hover:bg-black/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <X size={22} strokeWidth={1.75} aria-hidden="true" />
          </button>
        </div>

        <nav aria-label="Site" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="flex flex-col gap-1">
            {items.map((item) => {
              const active = isActive(pathname, item.path);
              return (
                <li key={item.path || item.label}>
                  <Link
                    href={item.path}
                    onClick={onClose}
                    aria-current={active ? "page" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-[15px] font-medium transition-colors duration-250 ease-standard ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-neutral-800 hover:bg-black/5"
                    }`}
                  >
                    {item.label}
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      aria-hidden="true"
                      className={active ? "text-primary" : "text-neutral-400"}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-black/5 px-5 py-4">
          <a
            href={PHONE_HREF}
            onClick={onClose}
            className="btn btn-primary h-12 w-full"
          >
            <Phone size={16} strokeWidth={2} aria-hidden="true" />
            Call care team
          </a>
          <p className="mt-3 text-center text-sm text-neutral-500">
            or dial{" "}
            <a href={PHONE_HREF} className="font-semibold text-primary">
              {PHONE_NUMBER}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
