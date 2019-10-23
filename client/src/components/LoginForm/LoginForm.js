import React from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors, handleTouch } from "../../actions/auth";
import { Field, reduxForm } from "redux-form";
import isSecure from "../../utils/isSecure";
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
  auth: { success, loading, failed, clean },
  valid,
  errors: { error }
}) => {
  const onSubmit = data => {
    loginUser(data);
    reset();
    clearErrors();
  };

  if (anyTouched) {
    handleTouch();
  }
  const form = (
    <div className="LoginForm-container">
      <div className="LoginForm">
        <form onSubmit={handleSubmit(data => onSubmit(data))}>
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
            <a href="/"> Don't have an account? </a>
          </div>
        </form>
      </div>
    </div>
  );

  return success ? null : form;
};

const Validator = data => {
  const errors = {};
  if (!data.password) {
    errors.password = "Password field is required.";
  } else {
    errors.password = isSecure(data.password);
  }
  if (!data.email) {
    errors.email = "Email field is required.";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email address (example@email.com).";
  }
  return errors;
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
    validate: Validator
  })(LoginForm)
);
