import React from "react";
import PropTypes from "prop-types";

const Logout = ({ logoutUser }) => {
  return (
    <button
      data-test="logout-btn"
      onClick={logoutUser}
      className="btn btn-primary"
    >
      <i className="fas fa-sign-out-alt" /> Logout
    </button>
  );
};

Logout.propTypes = {
  logoutUser: PropTypes.func
};

export default Logout;
