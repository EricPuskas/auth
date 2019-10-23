import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, testStore } from "../../utils";
import Header from "./Header";

const setup = (initState = {}) => {
  const store = testStore(initState);
  return shallow(<Header store={store} />)
    .childAt(0)
    .dive();
};

describe("Header Component", () => {
  describe("No Auth Test", () => {
    const loggedOutState = {
      auth: {
        clean: false,
        success: false,
        failed: false,
        loading: false,
        user: {
          userId: null,
          firstName: null,
          lastName: null,
          isAuthenticated: false
        }
      }
    };
    let noAuthTest = setup(loggedOutState);
    const test = findByAttribute(noAuthTest, "header-no-auth");
    it("Should correctly display in case the user is not logged in", () => {
      expect(test.length).toBe(1);
    });
    it("Should pass snapshot test", () => {
      expect(noAuthTest.html()).toMatchSnapshot();
    });
  });

  describe("Auth Test", () => {
    const loggedInState = {
      auth: {
        clean: true,
        success: true,
        failed: false,
        loading: false,
        user: {
          userId: 123,
          firstName: "Marko",
          lastName: "Pollo",
          isAuthenticated: true
        }
      }
    };
    let AuthTest = setup(loggedInState);
    const test = findByAttribute(AuthTest, "header-auth");
    it("Should correctly display in case the user is logged in", () => {
      expect(test.length).toBe(1);
    });
    it("Should pass snapshot test", () => {
      expect(AuthTest.html()).toMatchSnapshot();
    });
  });
});
