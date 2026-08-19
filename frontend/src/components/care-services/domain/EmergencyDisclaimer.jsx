import { Info } from "lucide-react";

const EmergencyDisclaimer = ({ message, className = "" }) => {
  return (
    <div
      className={`flex items-start gap-3 rounded-md border border-info-500/30 bg-info-100 px-4 py-3 text-sm text-neutral-800 ${className}`}
      role="note"
    >
      <Info size={18} aria-hidden="true" className="mt-0.5 shrink-0 text-info-500" />
      <p>{message}</p>
    </div>
  );
};

export default EmergencyDisclaimer;