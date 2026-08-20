import Link from "next/link";

/**
 * VerticalCard — simplified "icon + title + tagline + Book Now" card.
 * Portea service-tile treatment: 56px icon media box rgba(0,151,158,.08),
 * outlined teal pill Book Now, hover translateY(-2px) + teal shadow.
 */

const VerticalCard = ({ item, ctaColor = "secondary", className = "" }) => {
  const Icon = item.icon;

  return (
    <article
      className={`card group relative flex h-full flex-col items-center gap-4 text-center transition-all duration-150 ease-in-out hover:-translate-y-[2px] hover:border-[rgba(0,151,158,0.4)] hover:shadow-[0_8px_20px_rgba(0,151,158,0.1)] ${className}`}
    >
      <span className="rounded-xl bg-[rgba(0,151,158,0.08)] p-3.5 text-primary">
        <Icon size={28} strokeWidth={2} aria-hidden="true" />
      </span>

      <h3 className="text-[17px] font-semibold leading-snug text-neutral-900">{item.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{item.tagline}</p>

      <Link
        href={item.href}
        className="btn btn-secondary mt-auto px-3.5 py-1.5 text-xs"
      >
        Book Now
      </Link>
    </article>
  );
};

export default VerticalCard;