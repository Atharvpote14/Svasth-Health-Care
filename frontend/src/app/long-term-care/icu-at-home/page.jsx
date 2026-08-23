import ServiceDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ServiceDetailTemplate";

const SLUG = "icu-at-home";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return (
    <ServiceDetailTemplate
      slug={SLUG}
      emergencyNote="ICU at home is set up on the advice of the treating doctor after a clinical assessment. Suitability depends on the patient's condition, and it is not a replacement for emergency hospital care."
    />
  );
}
