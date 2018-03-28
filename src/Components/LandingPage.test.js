import React from "react";
import { shallow } from "enzyme";
import LandingPage from "./LandingPage";

describe("Testing LandingPage rendering", () => {
  const wrapper = shallow(<LandingPage />);
  it("should render Caption properly", () => {
    console.log(wrapper.debug());
    expect(wrapper.find("Caption")).toHaveLength(1);
  });
  it("should render image properly", () => {
    expect(wrapper.find("img")).toHaveLength(1);
  });
  it("should render button properly", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
  it("should have a link", () => {
    expect(wrapper.find("Link")).toHaveLength(1);
  });
});
