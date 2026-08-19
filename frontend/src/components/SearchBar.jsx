import { useState } from "react";

const SearchBar = ({
  value,
  onChange,
  onSearch,
  placeholder = "Search...",
  className = "",
}) => {
  const [searchValue, setSearchValue] = useState(value || "");

  const handleChange = (e) => {
    const newValue = e.target.value;

    setSearchValue(newValue);

    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSearch) {
      onSearch(searchValue);
    }
  };

  return (
    <form className={`search-bar ${className}`} onSubmit={handleSubmit}>
      <input
        type="search"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
      />

      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
