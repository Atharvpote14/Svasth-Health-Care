import ServiceDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ServiceDetailTemplate";

const SLUG = "elder-care";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServiceDetailTemplate slug={SLUG} />;
}
