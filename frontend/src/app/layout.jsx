import { Inter, Lora } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { FOOTER_COLUMNS, FOOTER_COPYRIGHT, NAV_LINKS, SITE_NAME } from "../lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });

export const metadata = {
  title: {
    default: "Apollo Homecare | Expert Healthcare at Home",
    template: "%s | Apollo Homecare",
  },
  description:
    "Professional healthcare services delivered at home by trained professionals — long term care, home visits, and nursing procedures.",
  metadataBase: new URL("https://www.apollohomecare.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable} font-sans`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>

        <header className="header">
          <div className="header-container">
            <a href="/" className="header-logo font-display text-xl font-semibold text-primary-700">
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