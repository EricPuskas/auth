import React from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors, handleTouch } from "../../actions/auth";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import Validator from "../../utils/validator";
import Loader from "../Common/Loader/Loader";
import NewField from "../Common/NewField/NewField";
import "./LoginForm.scss";

const LoginForm = ({
  handleSubmit,
  anyTouched,
  loginUser,
  clearErrors,
  handleTouch,
  reset,
  auth: { success, loading, failed },
  valid,
  errors: { error }
}) => {
  const handleLogin = data => {
    loginUser(data);
    reset();
    clearErrors();
  };

  if (anyTouched) {
    handleTouch();
  }
  const form = (
    <div className="LoginForm-container" data-test="login-form">
      <div className="LoginForm">
        <form onSubmit={handleSubmit(data => handleLogin(data))}>
          {failed && (
            <p className="LoginForm-error">
              {" "}
              API Call Failed. Please try again later.{" "}
            </p>
          )}
          {error && !failed && (
            <p className="LoginForm-error"> Invalid Credentials </p>
          )}
          <div className="form-group">
            <Field
              name="email"
              type="email"
              lable="email"
              component={NewField}
              id="email"
              placeholder="Email"
              icon="fas fa-envelope"
            />
          </div>
          <div className="form-group">
            <Field
              name="password"
              type="password"
              label="password"
              placeholder="Password"
              component={NewField}
              icon="fas fa-lock"
              id="password"
            />
          </div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={loading || !valid}
          >
            {loading ? <Loader /> : "Login"}
          </button>
          <div className="LoginForm-register">
            <Link to="/register"> Don't have an account? </Link>
          </div>
        </form>
      </div>
    </div>
  );

  return success ? null : form;
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser, clearErrors, handleTouch }
)(
  reduxForm({
    form: "LoginForm",
    validate: Validator.login
  })(LoginForm)
);
