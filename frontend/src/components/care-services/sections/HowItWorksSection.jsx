const HowItWorksSection = ({
  eyebrow = "How it works",
  title,
  lead,
  steps = [],
  className = "",
}) => {
  if (steps.length === 0) return null;

  return (
    <section className={`bg-neutral-100 py-12 md:py-16 ${className}`}>
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

        <ol className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.title || index} className="flex flex-col gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 font-semibold text-white tabular-nums"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-neutral-900">{step.title}</h3>
              <p className="text-base leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorksSection;