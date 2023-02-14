import React from "react";
import "../styles/SignUp.css";

import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const SignUp = () => {
  return (
    <div className="global-container">
      <Header />
      <div className="form-container">
        <div className="form-magin">
          <div className="form-items">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
