const Header = ({ logo, children, className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-container">
        <div className="header-logo">{logo}</div>

        <div className="header-navigation">{children}</div>
      </div>
    </header>
  );
};

export default Header;
