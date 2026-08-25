import ServiceDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ServiceDetailTemplate";

const SLUG = "physiotherapy-at-home";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ServiceDetailTemplate slug={SLUG} />;
}
