/**
 * ButtonLoader - Small spinner for button loading states
 */

export default function ButtonLoader({ size = "sm" }) {
  const sizeClasses = {
    sm: "h-4 w-4 border-2",
    md: "h-5 w-5 border-2",
    lg: "h-6 w-6 border-3"
  };

  return (
    <div className={`${sizeClasses[size]} animate-spin rounded-full border-white/30 border-t-white`}></div>
  );
}
