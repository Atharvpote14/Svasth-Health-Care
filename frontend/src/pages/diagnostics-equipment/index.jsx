import { useRouter } from "next/router";
import { PersonBPage, PAGE_BY_SLUG } from "./shared";

/**
 * Top-level URL router for Person B's pages.
 *
 * pages/[...slug].jsx re-exports this file's default, so it receives the
 * catch-all path segments in router.query.slug and serves the canonical
 * top-level URLs: /medical-equipment/, /home-diagnostics/, /adult-vaccination/,
 * /insurance-tpa-tieups/, /testimonials/ and the /procedures/*-at-home/ pages.
 *
 * All rendering and copy now live in ./shared (PersonBPage + PAGE_DATA), which
 * the 14 nested pages/diagnostics-equipment/** routes also import — one source
 * of truth in the care-* design language, so every Person B surface matches.
 *
 * An empty slug (a direct hit on /diagnostics-equipment/) maps to nothing and
 * falls through to PersonBPage's not-found state.
 */
export default function DiagnosticsEquipmentIndex() {
  const router = useRouter();
  const slug = (router.query.slug || []).join("/");
  return <PersonBPage data={PAGE_BY_SLUG[slug]} />;
}