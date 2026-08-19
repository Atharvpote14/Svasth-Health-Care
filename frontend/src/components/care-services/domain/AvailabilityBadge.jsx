import { CircleCheck, Clock, CircleX } from "lucide-react";

const AVAILABILITY_CONFIG = {
  available: { label: "Available", icon: CircleCheck, className: "badge-success" },
  limited: { label: "Limited slots", icon: Clock, className: "badge-warning" },
  unavailable: { label: "Not available", icon: CircleX, className: "badge-error" },
};

const AvailabilityBadge = ({ availability = "available", className = "" }) => {
  const config = AVAILABILITY_CONFIG[availability] || AVAILABILITY_CONFIG.available;
  const Icon = config.icon;

  return (
    <span className={`badge ${config.className} ${className}`}>
      <Icon size={14} aria-hidden="true" className="mr-1.5" />
      {config.label}
    </span>
  );
};

export default AvailabilityBadge;