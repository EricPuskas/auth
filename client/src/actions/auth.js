import axios from "axios";
import {
  LOGIN,
  LOADING,
  FAILED,
  GET_ERRORS,
  CLEAR_ERRORS,
  CLEAR_FORM,
  LOGOUT
} from "./types";

export const mockCall = data => async dispatch => {
  // dispatch({
  //   type: LOADING
  // });
  // const mockData = {
  //   email: "john.doe@yahoo.com",
  //   password: "Illbeback2019!"
  // };
  // const mockDb = {
  //   userID: 12345,
  //   firstName: "John",
  //   lastName: "Doe"
  // };
  // if (data.email === mockData.email && data.password === mockData.password) {
  //   setTimeout(() => {
  //     dispatch({
  //       type: LOGIN,
  //       payload: mockDb
  //     });
  //   }, 300);
  // } else {
  //   dispatch({
  //     type: FAILED
  //   });
  // }
};

export const loginUser = data => async dispatch => {
  try {
    dispatch({
      type: LOADING
    });
    let res = await axios.post("/api/auth/login", data);
    setTimeout(() => {
      dispatch({
        type: LOGIN,
        payload: res.data
      });
    }, 1500);
  } catch (error) {
    if (error.response.status === 500) {
      dispatch({
        type: FAILED
      });
    } else if (error.response.status === 401) {
      dispatch({ type: CLEAR_FORM });
      dispatch({
        type: GET_ERRORS,
        payload: error.response.data
      });
    }
  }
};

export const logoutUser = () => {
  return {
    type: LOGOUT
  };
};

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
