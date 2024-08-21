import React from "react";
import "./whycard.css";

const WhyCard = ({ icon, smallHeading, number, title, desc }) => {
  return (
    <div className="why-card">
      <div className="card-main">
        <img src={icon} alt="" />
        <div className="card-detail">
          <p className="small-heading">{smallHeading}</p>
          <h2>{number}</h2>
          <p>{title}</p>
        </div>
      </div>
      <p className="desc">{desc}</p>
    </div>
  );
};

export default WhyCard;
