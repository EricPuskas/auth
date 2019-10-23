import React from "react";
import Spinner from "../../../assets/img/rolling.svg";

const Loader = () => (
  <img src={Spinner} alt="Loading..." style={{ maxWidth: "1.8rem" }} />
);
export default Loader;
