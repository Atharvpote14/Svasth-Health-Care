/**
 * Site-wide navigation config.
 * Single source of truth for navbar, footer, and service route paths.
 * Route paths match docs/PERSON_A_SITEMAP.md (canonical sitemap).
 */

export const SITE_NAME = "Apollo Homecare";
export const PHONE_NUMBER = "1800 108 8586";
export const PHONE_HREF = "tel:18001088586";
export const WHATSAPP_NUMBER = "+91 7075448283";
export const WHATSAPP_HREF = "https://api.whatsapp.com/send/?phone=917075448283&text=Hi";
export const CONTACT_EMAIL = "care@apollohomecare.com";

export const SUPPORTED_CITIES = [
  "Hyderabad",
  "Kolkata",
  "Delhi NCR",
  "Chennai",
  "Bangalore",
  "Pune",
  "Madurai",
  "Mysore",
  "Indore",
  "Mumbai",
  "Guwahati",
];

const PROCEDURE_SLUGS = [
  "ryles-tube-insertion",
  "foley-catheter-care",
  "iv-infusion-at-home",
  "wound-dressing-at-home",
  "tracheostomy-care",
];

export const HUB_PATHS = {
  "long-term-care": "/long-term-care/",
  "home-visits": "/home-visit/",
};

export function serviceHref(service) {
  if (PROCEDURE_SLUGS.includes(service.slug)) {
    return `/procedures/${service.slug}/`;
  }
  const hub = HUB_PATHS[service.category?.slug] || "";
  return `${hub}${service.slug}/`;
}

export function procedureHref(slug) {
  return `/procedures/${slug}/`;
}

export function hubHref(categorySlug) {
  return HUB_PATHS[categorySlug] || "/";
}

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Long Term Care", path: "/long-term-care/" },
  { label: "Home Visit", path: "/home-visit/" },
  { label: "Medical Equipment", path: "/medical-equipment/" },
  { label: "Home Diagnostics", path: "/home-diagnostics/" },
  { label: "Adult Vaccination", path: "/adult-vaccination/" },
];

export const FOOTER_COLUMNS = [
  {
    title: "Care Services",
    links: [
      { label: "Long Term Care", path: "/long-term-care/" },
      { label: "Home Visit", path: "/home-visit/" },
      { label: "FAQ / Help Center", path: "/faq/" },
      { label: "Pricing & Plans", path: "/pricing/" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Patient Charter", path: "/about/patient-charter/" },
      { label: "Testimonials", path: "/testimonials/" },
      { label: "Insurance & TPA Tie-ups", path: "/insurance-tpa-tieups/" },
    ],
  },
];

export const FOOTER_COPYRIGHT = `© ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.`;