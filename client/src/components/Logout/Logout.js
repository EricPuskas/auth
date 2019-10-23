import React from "react";
import PropTypes from "prop-types";

const Logout = ({ logoutUser }) => {
  return (
    <button
      data-test="logout-btn"
      onClick={logoutUser}
      className="btn btn-primary"
    >
      Logout
    </button>
  );
};

Logout.propTypes = {
  logoutUser: PropTypes.func
};

export default Logout;
