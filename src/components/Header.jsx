import React from "react";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="items-container">
        <img src="./heart.png" alt="logo" className="logo" />
        <div className="sign-in-container">
          <p className="comment">¿Ya tienes un usuario?</p>
          <p className="link-sign-in">Inicia sesión</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
