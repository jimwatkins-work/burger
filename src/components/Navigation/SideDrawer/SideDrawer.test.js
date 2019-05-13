import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SideDrawer from "./SideDrawer";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";

configure({
  adapter: new Adapter()
});

describe("<SideDrawer />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SideDrawer />);
  });

  it("should render a single Logo component", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a single NavigationItems component", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it("should render a single Backdrop component", () => {
    expect(wrapper.find(Backdrop)).toHaveLength(1);
  });
});
