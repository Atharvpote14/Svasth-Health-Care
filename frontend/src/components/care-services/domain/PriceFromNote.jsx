const PriceFromNote = ({ priceFrom, priceNote, className = "" }) => {
  if (priceFrom) {
    return (
      <p className={`text-sm text-neutral-600 ${className}`}>
        <span className="font-semibold text-neutral-900 tabular-nums">
          From ₹{priceFrom}
        </span>
        {priceNote ? ` · ${priceNote}` : ""}
      </p>
    );
  }

  return <p className={`text-sm text-neutral-600 ${className}`}>{priceNote || "Pricing on request"}</p>;
};

export default PriceFromNote;