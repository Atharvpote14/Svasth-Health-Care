import { Metadata } from "next";
import { notFound } from "next/navigation";
import HomeVisitHubPage from "@/page-components/care-services/home-visit/HomeVisitHubPage";
import { getHubPage, getCategories } from "@/lib/data";

/**
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata() {
  const hub = await getHubPage("home-visits");
  if (!hub) return { title: "Home Visit | CareNest" };
  return {
    title: hub.title,
    description: hub.lead,
    openGraph: {
      title: hub.title,
      description: hub.lead,
      type: "website",
    },
  };
}

export default async function HomeVisitRoute() {
  const [hub, categoriesList] = await Promise.all([
    getHubPage("home-visits"),
    getCategories(),
  ]);

  if (!hub) notFound();

  const category = categoriesList.find((c) => c.slug === "home-visits");

  return <HomeVisitHubPage hub={hub} category={category} />;
}