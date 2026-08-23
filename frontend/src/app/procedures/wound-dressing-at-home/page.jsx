import ProcedureDetailTemplate, {
  buildServiceMetadata,
} from "@/page-components/care-services/ProcedureDetailTemplate";

const SLUG = "wound-dressing-at-home";

export async function generateMetadata() {
  return buildServiceMetadata(SLUG);
}

export default function Page() {
  return <ProcedureDetailTemplate slug={SLUG} />;
}
