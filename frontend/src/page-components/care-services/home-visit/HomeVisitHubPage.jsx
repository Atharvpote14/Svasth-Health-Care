import CategoryHero from "@/components/care-services/sections/CategoryHero";
import ServiceGridSection from "@/components/care-services/sections/ServiceGridSection";
import { getSiteService } from "@/lib/site-content";
import { serviceHref } from "@/lib/site";

/**
 * @param {{ hub: { eyebrow: string, title: string, lead: string, services: string[] }, category: { name: string } }} props
 */
export default function HomeVisitHubPage({ hub, category }) {
  return (
    <>
      <CategoryHero
        eyebrow={hub.eyebrow}
        title={hub.title}
        tagline={hub.lead}
        selectorGroups={[
          {
            label: "Home Visit Services",
            options: hub.services
              .map((slug) => {
                const svc = getSiteService(slug);
                return svc ? { label: svc.name, href: serviceHref(svc) } : null;
              })
              .filter(Boolean),
          },
        ]}
        trustItems={[
          { icon: require("lucide-react").UserRound, label: "Expert doctors at home" },
          { icon: require("lucide-react").Activity, label: "Physiotherapy packs" },
          { icon: require("lucide-react").Bandage, label: "Post-surgical recovery" },
        ]}
      />

      <ServiceGridSection
        eyebrow={category.name}
        title="Our Home Visit Services"
        lead="Doctors, physiotherapists, and nursing procedures — booked in minutes, delivered at your doorstep."
        items={hub.services.map((slug) => getSiteService(slug)).filter(Boolean)}
        variant="service"
        columns={3}
        tone="white"
        seeAllHref="/home-visit/"
        seeAllLabel="View all services →"
      />
    </>
  );
}