import { isSecure } from "./index";

const Validator = {
  login: data => {
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
  },
  register: data => {
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
    if (!data.firstName) {
      errors.firstName = "First Name field is required.";
    }
    if (!data.lastName) {
      errors.lastName = "Last Name field is required.";
    }
    return errors;
  }
};

export default Validator;
