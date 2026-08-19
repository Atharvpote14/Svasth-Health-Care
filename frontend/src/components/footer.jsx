import { Link } from "react-router-dom";

const Footer = ({ columns = [], copyright = "", className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="footer-container">
        {columns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>

            <ul>
              {column.links?.map((link) => (
                <li key={link.label}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
