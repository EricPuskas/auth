import React from "react";
import { shallow } from "enzyme";
import { testStore } from "../../utils";
import Auth from "./Auth";

const setup = (initState = {}) => {
  const store = testStore(initState);
  return shallow(<Auth store={store} />).debug();
};

describe("Auth Component", () => {
  const initState = {};
  let wrapper = setup(initState);
  it("Should pass snapshot test", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
