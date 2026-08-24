import ServiceGridSection from "./ServiceGridSection";

const RelatedServicesSection = ({
  title = "You may also need",
  items = [],
  variant = "service",
  className = "",
}) => {
  if (items.length === 0) return null;

  return (
    <ServiceGridSection
      title={title}
      items={items}
      variant={variant}
      className={className}
    />
  );
};

export default RelatedServicesSection;