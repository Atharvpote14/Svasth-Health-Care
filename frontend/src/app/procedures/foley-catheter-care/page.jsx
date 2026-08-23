import ProcedureDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ProcedureDetailTemplate";

const SLUG = "foley-catheter-care";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ProcedureDetailTemplate slug={SLUG} />;
}
