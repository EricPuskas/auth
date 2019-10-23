import React from "react";
import { shallow } from "enzyme";
import { findByAttribute, checkProps } from "../../utils";
import Logout from "./Logout";

describe("Logout Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        logoutUser: jest.fn()
      };
      const propsError = checkProps(Logout, expectedProps);
      expect(propsError).toBeUndefined();
    });
  });
});

describe("Renders without crashing", () => {
  let component;
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
    const props = {
      logoutUser: mockFn
    };
    component = shallow(<Logout {...props} />);
  });
  it("Should pass snapshot test", () => {
    expect(component.html()).toMatchSnapshot();
  });

  it("Should render a button", () => {
    const button = findByAttribute(component, "logout-btn");
    expect(button.length).toBe(1);
  });

  it("Should emit a callback on click event", () => {
    const button = findByAttribute(component, "logout-btn");
    button.simulate("click");
    const callback = mockFn.mock.calls.length;
    expect(callback).toBe(1);
  });
});
