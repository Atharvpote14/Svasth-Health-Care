import Link from "next/link";

const Navbar = ({ items = [], className = "" }) => {
  return (
    <nav className={`navbar ${className}`}>
      <ul className="navbar-list">
        {items.map((item) => (
          <li className="navbar-item" key={item.path || item.label}>
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
