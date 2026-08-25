import ButtonLoader from "./loaders/ButtonLoader";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  disabled = false,
  loading = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`btn btn-${variant} ${loading ? 'opacity-90 cursor-wait' : ''} ${className}`}
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <ButtonLoader size="sm" />
          <span>{children}</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
