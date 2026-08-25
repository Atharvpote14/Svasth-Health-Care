import { useState } from "react";

const Tabs = ({ tabs = [], defaultTab = 0, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={tab.id || index}
            type="button"
            className={`tab-button ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="tabs-content">{tabs[activeTab]?.content}</div>
    </div>
  );
};

export default Tabs;
