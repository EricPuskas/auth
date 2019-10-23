import React from "react";
import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import authReducer from "../../reducers/auth";
import errorReducer from "../../reducers/errors";
import { reducer as formReducer } from "redux-form";
import { middleware } from "../../store";
import LoginForm from "./LoginForm";

const rootReducer = combineReducers({
  auth: authReducer,
  form: formReducer,
  errors: errorReducer
});

let store;

describe("Redux Form", () => {
  beforeEach(() => {
    store = createStore(
      rootReducer,
      {},
      compose(applyMiddleware(...middleware))
    );
  });

  it("should submit form with form data", () => {
    const initialValues = {
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
    const handleSubmit = jest.fn();
    const wrapper = mount(
      <Provider store={store}>
        <LoginForm handleSubmit={handleSubmit} initialValues={initialValues} />
      </Provider>
    );

    const form = wrapper.find(`form`);
    form.simulate("submit");
    expect(handleSubmit).toHaveBeenCalledTimes(2);
  });
});
