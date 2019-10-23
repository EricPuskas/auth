import React from "react";

const NewField = ({
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

export default NewField;
