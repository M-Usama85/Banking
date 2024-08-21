import React from "react";
import slide1 from "../../assetes/imgs/slider-1-1920x879.jpg";
import slide2 from "../../assetes/imgs/slider-3-1920x879.jpg";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import "./hero.css";
import Button from "../btn/Button";

function Hero() {
  return (
    <div className="hero-section">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slide1} className="d-block w-100" alt="..." />
            <div className="hero-content">
              <h1>Green Credit Card for Everyday Use</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, architecto? Nesciunt, doloremque.
              </p>
              <Button Icon={CreditCardIcon} text="Book a card" />
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide2} className="d-block w-100" alt="..." />
            <div className="hero-content">
              <h1>Green Credit Card for Everyday Use</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente, architecto? Nesciunt, doloremque.
              </p>
              <button className="btn ">
                <CreditCardIcon />
                Book a card
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
