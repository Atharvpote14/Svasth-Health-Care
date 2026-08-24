const SectionTitle = ({
  title,
  subtitle,
  align = "center",
  className = "",
}) => {
  return (
    <div className={`section-title section-title-${align} ${className}`}>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}

      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
