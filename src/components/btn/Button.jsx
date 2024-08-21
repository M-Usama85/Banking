import React from "react";
import "./button.css";

const Button = ({ Icon, text }) => {
  return (
    <button className="btn">
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
