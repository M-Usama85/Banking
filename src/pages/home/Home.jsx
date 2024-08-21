import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import WhyUs from "../../components/whyUs/WhyUs";
import AdvantageSection from "../../components/advantageSection.jsx/AdvantageSection";
import Testimonial from "../../components/testimonial/Testimonial";
import Information from "../../components/sat-information/Information";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyUs />
      <AdvantageSection />
      <Testimonial />
      <Information />
    </div>
  );
};

export default Home;
