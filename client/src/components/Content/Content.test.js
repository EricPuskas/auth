import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, testStore } from "../../utils";
import Content from "./Content";

const setup = (initState = {}) => {
  const store = testStore(initState);
  return shallow(<Content store={store} />)
    .childAt(0)
    .dive();
};

describe("Content Component", () => {
  describe("No Auth Test", () => {
    const loggedOutState = {
      auth: {
        success: false
      }
    };
    let noAuthTest = setup(loggedOutState);
    const test = findByAttribute(noAuthTest, "content");
    it("Should not display in case the user is not logged in", () => {
      expect(test.length).toBe(0);
    });
    it("Should pass snapshot test", () => {
      expect(noAuthTest.html()).toMatchSnapshot();
    });
  });

  describe("Auth Test", () => {
    const loggedInState = {
      auth: {
        success: true
      }
    };
    let AuthTest = setup(loggedInState);
    const test = findByAttribute(AuthTest, "content");
    it("Should correctly display in case the user is logged in", () => {
      expect(test.length).toBe(1);
    });
    it("Should pass snapshot test", () => {
      expect(AuthTest.html()).toMatchSnapshot();
    });
  });
});
