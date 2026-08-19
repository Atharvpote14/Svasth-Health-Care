import Link from "next/link";

const FinalCTASection = ({
  title,
  lead,
  cta,
  note,
  className = "",
}) => {
  return (
    <section className={`bg-primary-900 py-12 md:py-20 ${className}`}>
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <h2 className="font-display text-3xl text-white md:text-4xl">{title}</h2>

        {lead && <p className="mt-4 text-lg text-neutral-100">{lead}</p>}

        {cta && (
          <Link href={cta.href} className="btn btn-accent mt-8 h-13 px-8 text-base">
            {cta.label}
          </Link>
        )}

        {note && <p className="mt-6 text-sm text-neutral-400">{note}</p>}
      </div>
    </section>
  );
};

export default FinalCTASection;