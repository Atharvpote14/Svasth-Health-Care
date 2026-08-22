import { Fraunces } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FOOTER_COLUMNS, FOOTER_COPYRIGHT, NAV_LINKS, SITE_NAME } from "../lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "600",
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

export const metadata = {
  title: {
    default: "CareNest | Expert Healthcare at Home",
    template: "%s | CareNest",
  },
  description:
    "Professional healthcare services delivered at home by trained professionals — long term care, home visits, and nursing procedures.",
  metadataBase: new URL("https://www.carenest.in"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <header className="header">
          <div className="header-container">
            <a href="/" className="header-logo font-display text-xl font-semibold text-neutral-900">
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