import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FOOTER_COLUMNS, FOOTER_COPYRIGHT, NAV_LINKS, SITE_NAME } from "../lib/site";
import "./globals.css";

/**
 * Type system for the care-services pages.
 *
 * Display — Fraunces, loaded across its full variable weight axis instead of
 * pinned at 600, so headings can sit at 400 for long titles and 700 for the
 * hero without swapping families.
 *
 * Reading — IBM Plex Sans. Chosen over Inter because this content is clinical
 * prose read by someone anxious about a parent: Plex has the institutional,
 * documentary register of a hospital note and stays legible at 15px.
 *
 * Data — IBM Plex Mono, for availability, price and the step rail. Its tabular
 * figures are what make the observation-chart motif read as a chart.
 *
 * These are exposed as CSS custom properties on <body>, which only wraps App
 * Router pages. Pages Router pages (pages/_app.jsx) never receive them and so
 * keep their existing system stack — see the var() fallbacks in
 * tailwind.config.js.
 */
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-plex-mono",
});

export const metadata = {
  title: {
    default: "Svasth Homecare | Expert Healthcare at Home",
    template: "%s | Svasth Homecare",
  },
  description:
    "Professional healthcare services delivered at home by trained professionals — long term care, home visits, and nursing procedures.",
  metadataBase: new URL("https://www.svasthhomecare.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* `care-theme` scopes the entire care-services design language. Note the
          absence of `font-sans`: that utility lives in Tailwind's utilities
          layer and would out-rank the theme class, so the base `body` rule in
          globals.css supplies the fallback instead. */}
      <body
        className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} care-theme`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <header className="header care-header">
          <div className="header-container">
            <a
              href="/"
              className="header-logo care-wordmark font-display text-xl text-neutral-900"
            >
              {SITE_NAME}
            </a>
            <Navbar items={NAV_LINKS} />
          </div>
        </header>

        <main id="main-content">{children}</main>

        <Footer columns={FOOTER_COLUMNS} copyright={FOOTER_COPYRIGHT} />
      </body>
    </html>
  );
}