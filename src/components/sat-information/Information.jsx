import React from "react";
import "./information.css";
import SectionHeading from "../section-heading/SectionHeading";

const Information = () => {
  return (
    <div className="infornation-section">
      <SectionHeading
        title={"Latest Statistical Information"}
        desc={
          "Our Bank regularly compiles and publishes a range of monetary and financial statistics. These include domestic banking statistics, external finance statistics, and international banking statistics."
        }
      />
      <div className="container">
        <div className="card-sec">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <p className="des">
                With the development of online banking, our number of customers
                increased up to 6 million worldwide.
              </p>
            </div>
            <div className="col-12 col-md-6 col-lg-4 disply-flex">
              <div className="circle">
                <div className="box">
                  <span>25%</span>
                </div>
                <p>Economy</p>
                <div className="box">
                  <span>75%</span>
                </div>
                <p>Stability</p>
              </div>
              <div className="circle-2">
                <div className="box1">
                  <span>50%</span>
                </div>
                <p>Cashback</p>
                <div className="box1">
                  <span>100%</span>
                </div>
                <p>Guarantee</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 percantage">
              <div>
                <p>
                  Our financial services deeply rely on certain banking
                  procedures that have been perfected over the years and helped
                  us get prestigious awards.
                </p>
                <div className="article">
                  <span>Financial Consulting</span>
                  <h6>75%</h6>
                </div>
                <div className="line"></div>
                <div className="article">
                  <span>Financial Consulting</span>
                  <h6>75%</h6>
                </div>
                <div className="line"></div>
                <div className="article">
                  <span>Financial Consulting</span>
                  <h6>75%</h6>
                </div>
                <div className="line"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
