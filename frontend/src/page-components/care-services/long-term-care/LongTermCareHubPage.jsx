import CategoryHero from "@/components/care-services/sections/CategoryHero";
import ServiceGridSection from "@/components/care-services/sections/ServiceGridSection";
import { getSiteService } from "@/lib/site-content";
import { serviceHref } from "@/lib/site";

/**
 * @param {{ hub: { eyebrow: string, title: string, lead: string, services: string[] }, category: { name: string } }} props
 */
export default function LongTermCareHubPage({ hub, category }) {
  return (
    <>
      <CategoryHero
        eyebrow={hub.eyebrow}
        title={hub.title}
        tagline={hub.lead}
        selectorGroups={[
          {
            label: "Long Term Care Services",
            options: hub.services
              .map((slug) => {
                const svc = getSiteService(slug);
                return svc ? { label: svc.name, href: serviceHref(svc) } : null;
              })
              .filter(Boolean),
          },
        ]}
        trustItems={[
          { icon: require("lucide-react").ShieldCheck, label: "Trained & verified nurses" },
          { icon: require("lucide-react").HeartHandshake, label: "Personalised care plans" },
          { icon: require("lucide-react").MonitorCheck, label: "Hospital-grade equipment" },
        ]}
      />

      <ServiceGridSection
        eyebrow={category.name}
        title="Our Long Term Care Services"
        lead="From skilled nursing to ICU-level critical care — all delivered at home with clinical excellence."
        items={hub.services.map((slug) => getSiteService(slug)).filter(Boolean)}
        variant="service"
        columns={3}
        tone="white"
        seeAllHref="/long-term-care/"
        seeAllLabel="View all services →"
      />
    </>
  );
}