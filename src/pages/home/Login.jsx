import React from "react";
import Navbar from "../../components/navbar/Navbar";
import LoginForm from "../../components/loginForm/LoginForm";

const Login = () => {
  return (
    <div
      style={{
        backgroundColor: "var(--secondary-color)",
      }}
    >
      <Navbar />
      <LoginForm />
    </div>
  );
};

export default Login;
