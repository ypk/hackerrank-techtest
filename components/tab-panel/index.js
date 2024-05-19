import React from "react";
import "./index.css";

const TabPanel = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="mt-50">
      <ul className="tabs">
        <li
          className={`tab-item slide-up-fade-in ${
            selectedTab === "all" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("all")}
        >
          All
        </li>
        <li
          className={`tab-item slide-up-fade-in ${
            selectedTab === "active" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("active")}
        >
          Active
        </li>
        <li
          className={`tab-item slide-up-fade-in ${
            selectedTab === "completed" ? "active" : ""
          }`}
          onClick={() => setSelectedTab("completed")}
        >
          Completed
        </li>
      </ul>
    </div>
  );
};

export default TabPanel;
