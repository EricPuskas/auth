import checkPropTypes from "check-prop-types";
import { applyMiddleware, createStore } from "redux";
import rootReducer from "../reducers";
import { middleware } from "../store";

export const isEmpty = value =>
  value === undefined ||
  value === null ||
  (typeof value === "object" && Object.keys(value).length === 0) ||
  (typeof value === "string" && value.trim().length === 0);

export const findByAttribute = (component, attr) =>
  component.find(`[data-test="${attr}"]`);

export const checkProps = (component, expectedProps) => {
  return checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
};

export const isSecure = password => {
  let error_message = "";
  let lowerRegex = /[a-z]/;
  let upperRegex = /[A-Z]/;
  let numberRegex = /[0-9]/;
  let specialRegex = /[$@$!%*?&]/;

  if (isEmpty(password)) {
    error_message = "Password field is required.";
  }
  if (!password.match(lowerRegex))
    error_message = "Password must contain at least one lowercase letter.";
  if (!password.match(upperRegex))
    error_message = "Password must contain at least one uppercase letter.";
  if (!password.match(numberRegex))
    error_message = "Password must contain at least one number.";
  if (!password.match(specialRegex))
    error_message = "Password must contain at least a special character";
  if (password.length < 8 || password.length > 30) {
    error_message = "Password must be between 8 and 30 characters.";
  }
  return error_message;
};

export const testStore = initState => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
  return createStoreWithMiddleware(rootReducer, initState);
};
