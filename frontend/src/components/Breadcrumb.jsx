import Link from "next/link";

const Breadcrumb = ({ items = [], className = "" }) => {
  return (
    <nav className={`breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.label || index}>
              {!isLast && item.path ? (
                <Link href={item.path}>{item.label}</Link>
              ) : (
                <span>{item.label}</span>
              )}

              {!isLast && <span className="breadcrumb-separator">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
