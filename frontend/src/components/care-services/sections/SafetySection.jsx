import SafetyCallout from "../domain/SafetyCallout";

const SafetySection = ({
  eyebrow = "Safety & trust",
  title,
  lead,
  items = [],
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title) && (
          <div className="mb-10">
            {eyebrow && (
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.08em] text-primary-700">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl text-neutral-900 md:text-4xl">
                {title}
              </h2>
            )}
            {lead && <p className="mt-3 max-w-2xl text-lg text-neutral-600">{lead}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <SafetyCallout
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetySection;