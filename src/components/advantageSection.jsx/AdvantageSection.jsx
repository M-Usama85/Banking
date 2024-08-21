import React from "react";
import "./advantagesection.css";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import DesktopAccessDisabledIcon from "@mui/icons-material/DesktopAccessDisabled";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SectionHeading from "../section-heading/SectionHeading";
import AdvantageCard from "./AdvantageCard";
import About from "../about/About";

const AdvantageSection = () => {
  return (
    <div className="advantages-section">
      <SectionHeading
        title="Advantage and Details"
        desc="We provide all our clients with various advantages that not only satisfy their banking needs but also allow them to get more without overpaying for banking service."
        theme="dark"
      />
      <div className="container">
        <div className="row gy-4">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="advantage">
              <div className="advantage-content">
                <FormatQuoteIcon />
                <p className="desc">
                  At Dot Bank, we aim to provide top quality banking services to
                  a greater number of individual and corporate customers than
                  any other bank in the USA or abroad.
                </p>
                <span className="auther">M Usama</span>
                <p className="position">CEO & Founder of Dot Bank</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <AdvantageCard
              Icon={DesktopAccessDisabledIcon}
              title="Detailed Statistics"
              desc="  Our online banking resource provides free & detailed statistics
                to all Dot Bank clients."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <AdvantageCard
              Icon={MailOutlineIcon}
              title="E-mail Newsletter"
              desc="Subscribe to our newsletter and stay in the know of the latest
                financial and banking news."
            />
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <AdvantageCard
              Icon={AdsClickIcon}
              title="Financial Goals"
              desc="Easily meet your financial goals with our affordable banking
                offers available regularly."
            />
          </div>
        </div>
      </div>
      <About />
    </div>
  );
};

export default AdvantageSection;
