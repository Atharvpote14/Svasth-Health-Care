/**
 * Page data service.
 *
 * Server components fetch page data through this layer only.
 * Switches between SAMPLE mock data and the live API via
 * NEXT_PUBLIC_USE_MOCK_DATA (defaults to "true" while the backend is in development).
 */

import { api } from "./api";
import {
  categories,
  faqs,
  hubs,
  locations,
  pricingPlans,
  services,
  getSiteHub,
  getSiteService,
} from "./site-content";

/**
 * Page data service.
 *
 * Server components fetch page data through this layer only.
 * Serves REAL company content locally while the backend API is being built;
 * switches to the live API via NEXT_PUBLIC_USE_MOCK_DATA=false.
 */

const USE_MOCK = process.env.NEXT_PUBLIC_USE_MOCK_DATA !== "false";

export const isUsingMockData = USE_MOCK;

export async function getCategories() {
  if (USE_MOCK) return categories;
  return api.getCategories();
}

export async function getHubPage(slug) {
  if (USE_MOCK) {
    const hub = getSiteHub(slug);
    if (!hub) return null;

    return {
      ...hub,
      services: hub.services
        .map((serviceSlug) => getSiteService(serviceSlug))
        .filter(Boolean),
    };
  }

  const [hub, serviceList] = await Promise.all([
    api.getService(slug),
    api.getServices({ category: slug }),
  ]);

  return { ...hub, services: serviceList.data };
}

const FAQ_CATEGORY_BY_SERVICE = {
  "icu-at-home": "icu",
  "ryles-tube-insertion": "procedures",
  "foley-catheter-care": "procedures",
  "iv-infusion-at-home": "procedures",
  "wound-dressing-at-home": "procedures",
  "tracheostomy-care": "procedures",
};

export async function getServicePage(slug) {
  if (USE_MOCK) {
    const service = getSiteService(slug);
    if (!service) return null;

    const related = (service.related || [])
      .map((relatedSlug) => getSiteService(relatedSlug))
      .filter(Boolean);

    const faqCategory = FAQ_CATEGORY_BY_SERVICE[slug];
    const serviceFaqs = faqCategory
      ? faqs.filter((faq) => faq.category === faqCategory)
      : [];

    return { ...service, related, faqs: serviceFaqs };
  }

  const [service, related, serviceFaqs] = await Promise.all([
    api.getService(slug),
    api.getRelatedServices(slug),
    api.getServiceFaqs(slug),
  ]);

  return { ...service, related, faqs: serviceFaqs };
}

export async function getProcedurePage(slug) {
  return getServicePage(slug);
}

export async function getFaqPage() {
  if (USE_MOCK) return { faqs, categories: ["booking", "services", "pricing", "safety", "locations"] };

  const allFaqs = await api.getFaqs();
  return {
    faqs: allFaqs.data,
    categories: [...new Set(allFaqs.data.map((faq) => faq.category))],
  };
}

export async function getPricingPage() {
  if (USE_MOCK) return { plans: pricingPlans, services };

  const [planData, serviceList] = await Promise.all([
    api.getServices({}),
    api.getServices({}),
  ]);

  return { plans: planData.data, services: serviceList.data };
}

export async function getLocations() {
  if (USE_MOCK) return locations;
  const result = await api.getLocations();
  return result.data;
}

export async function getHomePage() {
  if (USE_MOCK) {
    return {
      categories,
      popularServices: [
        getSiteService("icu-at-home"),
        getSiteService("nurse-at-home"),
        getSiteService("attendant-at-home"),
        getSiteService("elder-care"),
      ].filter(Boolean),
      locations,
    };
  }

  const [categoryList, serviceList, locationList] = await Promise.all([
    api.getCategories(),
    api.getServices({}),
    api.getLocations(),
  ]);

  return {
    categories: categoryList.data,
    popularServices: serviceList.data,
    locations: locationList.data,
  };
}

export { services };