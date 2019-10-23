import React from "react";
import { connect } from "react-redux";
import "./Header.scss";

const Header = ({ auth: { user } }) => {
  const { firstName, lastName } = user;
  return (
    <div className="Header">
      {user.firstName ? (
        <h1> Welcome {`${firstName} ${lastName}`}!</h1>
      ) : (
        <h1> Log in to your account </h1>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);
