import ServiceDetailTemplate, {
  buildServiceMetadata,
} from "./ServiceDetailTemplate";

/**
 * ProcedureDetailTemplate — nursing-procedure variant of the service template.
 *
 * Procedures are clinical tasks rather than ongoing care packages, so they lead
 * with a safety note: a home visit is not a substitute for emergency care.
 * Everything else (copy, FAQs, related links) comes from `site-content.js`.
 */

const DEFAULT_EMERGENCY_NOTE =
  "This is a planned nursing procedure carried out at home on a doctor's advice. " +
  "It is not emergency care — if the patient is in distress, call the care team or " +
  "go to the nearest emergency department.";

export { buildServiceMetadata };

export default function ProcedureDetailTemplate({ slug, emergencyNote }) {
  return (
    <ServiceDetailTemplate
      slug={slug}
      variant="procedure"
      emergencyNote={emergencyNote || DEFAULT_EMERGENCY_NOTE}
    />
  );
}
