/**
 * SafetyCallout — a trust column.
 *
 * Deliberately not a card. The service cards carry a surface, a shadow and a
 * hover lift because they are links; boxing the trust items the same way would
 * give the page two card treatments competing for the same attention and imply
 * these are clickable. They are columns held together by the arch plate and the
 * grid's own alignment, which keeps them quiet.
 */

const SafetyCallout = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <div className={`h-full ${className}`}>
      <span className="care-plate">
        <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
      </span>

      <h3 className="care-h3 mt-5 font-display">{title}</h3>

      <p className="mt-2.5 text-[15px] leading-[1.7] text-[var(--care-mute)]">
        {description}
      </p>
    </div>
  );
};

export default SafetyCallout;
