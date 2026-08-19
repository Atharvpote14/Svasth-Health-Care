import Breadcrumb from "../../Breadcrumb";

const Breadcrumbs = ({ items = [], className = "" }) => {
  return <Breadcrumb items={items} className={className} />;
};

export default Breadcrumbs;