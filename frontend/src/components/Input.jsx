const Input = ({
  type = "text",
  name,
  value,
  placeholder = "",
  onChange,
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className={`input ${className}`}
    />
  );
};

export default Input;
