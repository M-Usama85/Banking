import React, { useState } from "react";
import "../loginForm/loginForm.css";
import isValidEmail from "email-validation-js";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");

  const handleSignIn = () => {
    if (name && email && password && cPassword) {
      if (!isValidEmail(email)) {
        alert("Invalid email");
        return;
      } else if (!password === cPassword) {
        alert("Password not match");
        return;
      }
    }
  };

  return (
    <section>
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="text"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="form-label" for="form1Example13">
                  Full Name
                </label>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  className="form-control form-control-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label" for="form1Example13">
                  Email address
                </label>
              </div>

              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label className="form-label" for="form1Example23">
                  Password
                </label>
              </div>
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  className="form-control form-control-lg"
                  value={cPassword}
                  onChange={(e) => setCpassword(e.target.value)}
                />
                <label className="form-label" for="form1Example23">
                  Confirm Password
                </label>
              </div>

              <div className="d-flex justify-content-around align-items-center mb-4">
                <a href="#!">Forgot password?</a>
              </div>

              <button
                type="submit"
                data-mdb-button-init
                data-mdb-ripple-init
                className="btn btn-primary btn-lg btn-block"
                onClick={handleSignIn}
              >
                Sign in
              </button>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a
                data-mdb-ripple-init
                className="btn btn-primary btn-lg btn-block"
                style={{ backgroundColor: "#3b5998" }}
                href="#!"
                role="button"
              >
                <i className="fab fa-google-f me-2"></i>Continue with Google
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
