import { Info } from "lucide-react";

/**
 * EmergencyDisclaimer — a bounded note.
 *
 * Set as a ruled aside with an accent margin rule rather than a tinted rounded
 * box. The box read as a UI alert, which is the wrong register: this is not a
 * failure or a warning about something the reader just did, it is a standing
 * clinical qualification on the service — closer to a footnote in a care plan.
 *
 * Kept as role="note" so assistive tech announces it as an aside rather than
 * interrupting with it, and the label says "Please note" rather than shouting.
 */

const EmergencyDisclaimer = ({ message, className = "" }) => {
  return (
    <div
      role="note"
      className={`flex gap-3.5 border-l-2 border-[var(--care-accent)] bg-[rgba(0,151,158,0.04)] px-4 py-3.5 sm:px-5 ${className}`}
    >
      <Info
        size={16}
        strokeWidth={1.75}
        aria-hidden="true"
        className="mt-[0.2rem] shrink-0 text-[var(--care-accent)]"
      />

      <div>
        <p className="mb-1.5 care-label text-[var(--care-accent)]">
          Please note
        </p>
        <p className="text-[15px] leading-[1.7] text-neutral-700">{message}</p>
      </div>
    </div>
  );
};

export default EmergencyDisclaimer;
