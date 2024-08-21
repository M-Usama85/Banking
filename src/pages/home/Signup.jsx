import React from "react";
import SignupForm from "../../components/signupForm/SignupForm";
import Navbar from "../../components/navbar/Navbar";

const Signup = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <Navbar />
      <SignupForm />
    </div>
  );
};

export default Signup;
