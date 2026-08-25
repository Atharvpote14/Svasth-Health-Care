const Radio = ({
  name,
  value,
  checked = false,
  onChange,
  label,
  disabled = false,
  className = "",
}) => {
  return (
    <label className={`radio ${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />

      {label && <span>{label}</span>}
    </label>
  );
};

export default Radio;
