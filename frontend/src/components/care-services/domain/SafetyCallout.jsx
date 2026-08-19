const SafetyCallout = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <span className="inline-flex w-fit rounded-md bg-primary-50 p-2.5 text-primary-700">
        <Icon size={24} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="text-base leading-relaxed text-neutral-600">{description}</p>
    </div>
  );
};

export default SafetyCallout;