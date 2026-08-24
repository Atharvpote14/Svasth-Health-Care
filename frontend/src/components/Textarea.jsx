const Textarea = ({
  name,
  value,
  placeholder = "",
  onChange,
  rows = 4,
  required = false,
  disabled = false,
  className = "",
}) => {
  return (
    <textarea
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      rows={rows}
      required={required}
      disabled={disabled}
      className={`textarea ${className}`}
    />
  );
};

export default Textarea;
