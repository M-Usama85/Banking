import React from "react";
import "./whyus.css";
import WhyCard from "./WhyCard";

import why1 from "../../assetes/imgs/progress1.png";
import why2 from "../../assetes/imgs/progress-2.png";
import why3 from "../../assetes/imgs/progress-3.png";
import SectionHeading from "../section-heading/SectionHeading";
import WhyFeatures from "../whyFeatures/WhyFeatures";

const WhyUs = () => {
  return (
    <section className="whyUs">
      <div className="container why-cards">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-4">
            <WhyCard
              icon={why1}
              smallHeading="More than"
              number={123334}
              title="Issued Cards"
              desc="Our bank is an acknowledged leader in credit card distribution. We issue more than 5000 cards every year."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <WhyCard
              icon={why2}
              smallHeading="Up to"
              number="30%"
              title="Cashback"
              desc="We offer amazing amount of cashback for payments made with one of our credit cards - Blue, Green, or Orange."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <WhyCard
              icon={why3}
              smallHeading="Up to"
              number="25%"
              title="for Deposite"
              desc="Dot Bank offers various deposit offers in all international currencies with interest rate up to 25% for all regular clients."
            />
          </div>
        </div>
        <SectionHeading
          title="The Best Banking Choice"
          desc="Since our foundation, we have been #1 banking institution for lots of individual and corporate customers, both in the USA and internationally. We provide our clients with a number of benefits."
        />
        <WhyFeatures />
      </div>
    </section>
  );
};

export default WhyUs;
