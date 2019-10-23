import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/auth";
import Logout from "../Logout/Logout";
import "./Content.scss";

const Content = ({ logoutUser, auth: { success } }) => {
  return success ? (
    <div className="Content" data-test="content">
      <h2> You have successfully logged in. </h2>
      <Logout logoutUser={logoutUser} />
    </div>
  ) : null;
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Content);
