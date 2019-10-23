import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ auth: { user } }) => {
  const { firstName, lastName, isAuthenticated } = user;
  return (
    <div className="Header" data-test="header">
      {isAuthenticated ? (
        <h1 data-test="header-auth"> Welcome {`${firstName} ${lastName}`}!</h1>
      ) : (
        <h1 data-test="header-no-auth"> Log in to your account </h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Header.propTypes = {
  auth: PropTypes.object
};

export default connect(
  mapStateToProps,
  null
)(Header);
