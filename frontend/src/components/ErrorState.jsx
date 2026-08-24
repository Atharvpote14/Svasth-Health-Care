const ErrorState = ({
  title = "Something went wrong",
  message = "We couldn't load this page. Please try again.",
  onRetry,
  className = "",
}) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 rounded-md border border-primary/20 bg-primary/5 px-6 py-12 text-center ${className}`}
      role="alert"
    >
      <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
      <p className="max-w-md text-base text-neutral-600">{message}</p>

      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="btn btn-secondary mt-2"
        >
          Try again
        </button>
      )}
    </div>
  );
};

export default ErrorState;