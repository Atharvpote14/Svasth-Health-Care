import Link from "next/link";

const BookingCTA = ({
  label,
  href,
  onClick,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className = "",
}) => {
  const sizeClass = size === "lg" ? "h-13 px-6 text-base" : "h-11 px-5 text-base";
  const classes = `btn btn-${variant} ${sizeClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      aria-busy={loading}
    >
      {loading ? "Submitting your request…" : label}
    </button>
  );
};

export default BookingCTA;