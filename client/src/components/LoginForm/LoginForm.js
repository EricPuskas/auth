import React from "react";
import { connect } from "react-redux";
import { loginUser, clearErrors } from "../../actions/auth";
import { Field, reduxForm } from "redux-form";
import isSecure from "../../utils/isSecure";
import Spinner from "../../assets/img/rolling.svg";
import "./LoginForm.scss";

const Loader = () => {
  return <img src={Spinner} alt="Loading..." style={{ maxWidth: "1.8rem" }} />;
};

const newField = ({
  input,
  type,
  placeholder,
  label,
  id,
  meta: { touched, error },
  icon
}) => {
  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text">
            <i className={icon} />
          </span>
        </div>
        <input
          {...input}
          autoComplete="new-password"
          className="form-control"
          placeholder={placeholder}
          aria-label={label}
          type={type}
          id={id}
        />
      </div>
      {touched && error && <p className="LoginForm-error">{error}</p>}
    </>
  );
};

const LoginForm = ({
  handleSubmit,
  loginUser,
  clearErrors,
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

  const loginForm = (
    <div className="LoginForm-container">
      <div className="LoginForm">
        <form onSubmit={handleSubmit(val => onSubmit(val))}>
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
              component={newField}
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
              component={newField}
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

  return success ? null : loginForm;
};

const myValidator = data => {
  const errors = {};
  if (!data.password) {
    errors.password = "Password field is required.";
  } else {
    errors.password = isSecure(data.password);
  }
  if (!data.email) {
    errors.email = "Email field is required.";
  } else if (!/^[^@]+@[^@]+\.[^@]+$/.test(data.email)) {
    // use a more robust RegEx in real-life scenarios
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
  { loginUser, clearErrors }
)(reduxForm({ form: "LoginForm", validate: myValidator })(LoginForm));
