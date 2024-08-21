import React from "react";
import "./testimonial.css";
import SectionHeading from "../section-heading/SectionHeading";
import index1 from "../../assetes/imgs/index-1.jpg";
import index2 from "../../assetes/imgs/index2.jpg";
import index3 from "../../assetes/imgs/index3.jpg";

const Testimonial = () => {
  return (
    <div>
      <SectionHeading title="Testimonials" theme="dark" />
      <div className="testimonial-container">
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="slide-content">
                <div className="image">
                  <img src={index1} className="d-block w-100" alt="no" />
                </div>
                <div className="desc">
                  <label> Ann Smith</label>
                  <br></br>
                  <span>International Company Owner</span>
                  <p>
                    Finding Dot Bank, a reliable bank with the international
                    reputation and specialized lending programs allowed me to
                    finance my business and open a new office in California.
                    Thank you!
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="slide-content">
                <div className="image">
                  <img src={index2} className="d-block w-100" alt="no" />
                </div>
                <div className="desc">
                  <label> Ann Smith</label>
                  <br></br>
                  <span>International Company Owner</span>
                  <p>
                    Finding Dot Bank, a reliable bank with the international
                    reputation and specialized lending programs allowed me to
                    finance my business and open a new office in California.
                    Thank you!
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="slide-content">
                <div className="image">
                  <img src={index3} className="d-block w-100" alt="no" />
                </div>
                <div className="desc">
                  <label> Ann Smith</label>
                  <br></br>
                  <span>International Company Owner</span>
                  <p>
                    Finding Dot Bank, a reliable bank with the international
                    reputation and specialized lending programs allowed me to
                    finance my business and open a new office in California.
                    Thank you!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
