import { useState } from "react";

const Accordion = ({ items = [], multiple = false, className = "" }) => {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (index) => {
    if (multiple) {
      setOpenItems((current) =>
        current.includes(index)
          ? current.filter((item) => item !== index)
          : [...current, index],
      );
    } else {
      setOpenItems((current) => (current.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);

        return (
          <div
            className={`accordion-item ${isOpen ? "open" : ""}`}
            key={item.id || index}
          >
            <button
              type="button"
              className="accordion-header"
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <span>{isOpen ? "−" : "+"}</span>
            </button>

            {isOpen && <div className="accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
