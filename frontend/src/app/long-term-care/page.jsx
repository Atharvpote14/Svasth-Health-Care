import { Metadata } from "next";
import { notFound } from "next/navigation";
import LongTermCareHubPage from "@/page-components/care-services/long-term-care/LongTermCareHubPage";
import { getHubPage, getCategories } from "@/lib/data";

/**
 * @returns {Promise<Metadata>}
 */
export async function generateMetadata() {
  const hub = await getHubPage("long-term-care");
  if (!hub) return { title: "Long Term Care | CareNest" };
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

export default async function LongTermCareRoute() {
  const [hub, categoriesList] = await Promise.all([
    getHubPage("long-term-care"),
    getCategories(),
  ]);

  if (!hub) notFound();

  const category = categoriesList.find((c) => c.slug === "long-term-care");

  return <LongTermCareHubPage hub={hub} category={category} />;
}