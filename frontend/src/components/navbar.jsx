import { Link } from "react-router-dom";

const Navbar = ({ items = [], className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <ul className="navbar-list">
        {items.map((item) => (
          <li className="navbar-item" key={item.path || item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
