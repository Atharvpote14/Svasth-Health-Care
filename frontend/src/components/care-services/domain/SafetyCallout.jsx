/**
 * SafetyCallout — Why-Choose-Us trust card.
 * Portea card treatment: white, 12px radius, border rgba(0,151,158,.14),
 * shadow 0 3px 12px rgba(13,34,34,.05), teal icon media box
 * rgba(0,151,158,.08), hover translateY(-2px) + teal shadow.
 */

const SafetyCallout = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div
      className={`flex h-full flex-col items-center rounded-[12px] border border-[rgba(0,151,158,0.14)] bg-white p-6 text-center shadow-[0_3px_12px_rgba(13,34,34,0.05)] transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:border-[rgba(0,151,158,0.4)] hover:shadow-[0_8px_20px_rgba(0,151,158,0.1)] ${className}`}
    >
      <span className="mb-3 inline-flex rounded-xl bg-[rgba(0,151,158,0.08)] p-3 text-primary">
        <Icon size={24} strokeWidth={2} aria-hidden="true" />
      </span>
      <h3 className="text-base font-semibold text-neutral-900 sm:text-lg">{title}</h3>
      <p className="mt-1 text-base leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
};

export default SafetyCallout;