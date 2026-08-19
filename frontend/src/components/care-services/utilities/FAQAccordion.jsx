"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQAccordion = ({ items = [], allowMultiple = false, className = "" }) => {
  const [openIds, setOpenIds] = useState([]);

  const toggle = (id) => {
    setOpenIds((current) => {
      if (allowMultiple) {
        return current.includes(id)
          ? current.filter((itemId) => itemId !== id)
          : [...current, id];
      }

      return current.includes(id) ? [] : [id];
    });
  };

  return (
    <div className={`accordion ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const panelId = `faq-panel-${item.id}`;

        return (
          <div className="accordion-item" key={item.id}>
            <h3>
              <button
                type="button"
                className="accordion-header"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  size={20}
                  aria-hidden="true"
                  className={`shrink-0 text-neutral-400 transition-transform duration-150 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              className="grid transition-[grid-template-rows] duration-250 ease-standard"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p className="accordion-content">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQAccordion;