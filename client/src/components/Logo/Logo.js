import React from "react";
import "./Logo.scss";
import CompanyLogo from "../../assets/img/westcasino-logo-143x60-01.svg";

const Logo = () => {
  return (
    <div className="Logo">
      <img src={CompanyLogo} alt="West Casino Logo" />
    </div>
  );
};

export default Logo;
