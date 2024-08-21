import React from "react";
import "./about.css";
import imge from "../../assetes/imgs/index-1-2-570x352.jpg";

import Button from "../btn/Button";

const About = () => {
  return (
    <div className="container about-container">
      <div className="row g-5">
        <div className="col-12 col-md-12 col-lg-6">
          <div className="about-img">
            <img src={imge} alt="img" />
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <div className="about-content">
            <h6>
              Dot Bank was founded in 1999 to introduce the new level of
              financial services worldwide. We are still dedicated to the
              success of our clients.
            </h6>
            <p>
              At Dot Bank, we are guided by a common purpose to help make
              financial lives better by connecting clients and communities to
              the resource they need to be successful. We are driving growth –
              helping to create jobs, develop communities, foster economic
              mobility and address society’s biggest challenges – while managing
              risk and providing a return to our clients and our shareholders.
            </p>
            <Button text="Learn more" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
