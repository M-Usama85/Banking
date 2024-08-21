import React from "react";
import "./whyFeatures.css";
import mobile from "../../assetes/imgs/mobile.png";
import LanguageIcon from "@mui/icons-material/Language";
import Button from "../btn/Button";

const WhyFeatures = () => {
  return (
    <div className="row why-features">
      <div className="col-12 col-md-6 col-lg-4 left-column">
        <div className="feature">
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
          <LanguageIcon />
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
          <LanguageIcon />
        </div>
        <div className="feature">
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
          <LanguageIcon />
        </div>
      </div>

      <div className="col-12 col-md-6 col-lg-4 mobile-img text-center">
        <img src={mobile} alt="" />
        <Button text="View more advantages" />
      </div>

      <div className="col-12 col-md-6 col-lg-4">
        <div className="feature">
          <LanguageIcon />
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
        </div>
        <div className="feature">
          <LanguageIcon />
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
        </div>
        <div className="feature">
          <LanguageIcon />
          <div className="feature-content">
            <h3>Various Locations</h3>
            <p>
              We have offices in many countries including the USA and the UK.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyFeatures;
