import React from "react";
import "./sectionHeading.css";

const SectionHeading = ({ title, desc, theme }) => {
  return (
    <div
      className={`section-heading ${theme == "dark" ? " dark-heading" : ""}`}
    >
      <div className="divider"></div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default SectionHeading;
