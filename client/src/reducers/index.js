import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./auth";
import errorReducer from "./errors";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  errors: errorReducer
});
