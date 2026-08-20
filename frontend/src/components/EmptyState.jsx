import Link from "next/link";

const EmptyState = ({
  title = "Nothing here yet",
  message = "There is no content to show right now.",
  actionLabel,
  actionHref,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-md border border-neutral-900/10 bg-white px-6 py-12 text-center ${className}`}
    >
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="max-w-md text-base text-neutral-600">{message}</p>

      {actionLabel && actionHref && (
        <Link href={actionHref} className="btn btn-secondary mt-2">
          {actionLabel}
        </Link>
      )}
    </div>
  );
};

export default EmptyState;