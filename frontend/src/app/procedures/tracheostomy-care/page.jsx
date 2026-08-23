import ProcedureDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ProcedureDetailTemplate";

const SLUG = "tracheostomy-care";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ProcedureDetailTemplate slug={SLUG} />;
}
