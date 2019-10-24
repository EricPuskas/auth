import React from "react";
import { connect } from "react-redux";
import { registerUser, clearErrors, handleTouch } from "../../actions/auth";
import { Field, reduxForm } from "redux-form";
import { Link, withRouter } from "react-router-dom";
import Validator from "../../utils/validator";
import Loader from "../Common/Loader/Loader";
import NewField from "../Common/NewField/NewField";
import "../LoginForm/LoginForm.scss";

const RegisterForm = ({
  history,
  handleSubmit,
  anyTouched,
  registerUser,
  clearErrors,
  handleTouch,
  reset,
  auth: { success, loading, failed },
  valid,
  errors: { error }
}) => {
  const handleRegister = data => {
    registerUser(data, history);
    reset();
    clearErrors();
  };

  if (anyTouched) {
    handleTouch();
  }
  const form = (
    <div className="LoginForm-container" data-test="login-form">
      <div className="LoginForm">
        <form onSubmit={handleSubmit(data => handleRegister(data))}>
          {failed && (
            <p className="LoginForm-error">
              API Call Failed. Please try again later.
            </p>
          )}
          {error && !failed && <p className="LoginForm-error"> {error} </p>}
          <div className="form-group">
            <Field
              name="firstName"
              type="text"
              lable="First Name"
              component={NewField}
              id="firstName"
              placeholder="First Name"
              icon="far fa-circle"
            />
          </div>
          <div className="form-group">
            <Field
              name="lastName"
              type="text"
              lable="Last Name"
              component={NewField}
              id="lastName"
              placeholder="Last Name"
              icon="far fa-circle"
            />
          </div>
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
            {loading ? <Loader /> : "Sign up!"}
          </button>
          <div className="LoginForm-register">
            <Link to="/"> Already a member? </Link>
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
  { registerUser, clearErrors, handleTouch }
)(
  reduxForm({
    form: "RegisterForm",
    validate: Validator.register
  })(withRouter(RegisterForm))
);
