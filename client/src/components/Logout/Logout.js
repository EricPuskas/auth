import React from "react";

const Logout = ({ logoutUser }) => {
  return (
    <button onClick={logoutUser} className="btn btn-primary">
      Logout
    </button>
  );
};

export default Logout;
