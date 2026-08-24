const Skeleton = ({ className = "", lines = 3 }) => {
  if (className) {
    return <div className={`animate-pulse rounded-md bg-neutral-100 ${className}`} aria-hidden="true" />;
  }

  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="h-6 w-3/4 animate-pulse rounded-md bg-neutral-100" />
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 w-full animate-pulse rounded-md bg-neutral-100"
        />
      ))}
    </div>
  );
};

export default Skeleton;