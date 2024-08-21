import React from "react";
import "./advantageCard.css";

const AdvantageCard = ({ Icon, title, desc }) => {
  return (
    <div className="advantage-card">
      <Icon />
      <h6>{title}</h6>
      <p>{desc}</p>
    </div>
  );
};

export default AdvantageCard;
