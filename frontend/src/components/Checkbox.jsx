const Checkbox = ({
  name,
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      {label && <span>{label}</span>}
    </label>
  );
};

export default Checkbox;
