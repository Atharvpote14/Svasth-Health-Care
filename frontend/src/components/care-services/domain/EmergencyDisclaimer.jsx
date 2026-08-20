import { Info } from "lucide-react";

const EmergencyDisclaimer = ({ message, className = "" }) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-md border border-secondary/20 bg-secondary/5 px-4 py-3 text-sm text-neutral-800 ${className}`}
      role="note"
    >
      <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-secondary" />
      <p>{message}</p>
    </div>
  );
};

export default EmergencyDisclaimer;