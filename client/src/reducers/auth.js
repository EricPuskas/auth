import {
  LOADING,
  LOGIN,
  CLEAR_FORM,
  FAILED,
  LOGOUT,
  TOUCHED
} from "../actions/types";
import isEmpty from "../utils/isEmpty";

const initState = {
  clean: true,
  success: false,
  failed: false,
  loading: false,
  user: {
    userID: null,
    firstName: null,
    lastName: null,
    isAuthenticated: false
  }
};

export default function(state = initState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        isAuthenticated: !isEmpty(payload),
        success: !isEmpty(payload),
        clean: true,
        failed: isEmpty(payload),
        user: payload
      };
    case LOGOUT:
      return initState;
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_FORM:
      return {
        ...state,
        clean: true,
        loading: false,
        failed: false
      };
    case FAILED:
      return {
        ...state,
        failed: true,
        loading: false
      };
    case TOUCHED:
      return {
        ...state,
        clean: false
      };
    default:
      return state;
  }
}
