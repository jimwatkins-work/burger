import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Toolbar from "./Toolbar";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

configure({
  adapter: new Adapter()
});

describe("<Toolbar />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Toolbar />);
  });

  it("should render a single Logo component", () => {
    expect(wrapper.find(Logo)).toHaveLength(1);
  });

  it("should render a single NavigationItems component", () => {
    expect(wrapper.find(NavigationItems)).toHaveLength(1);
  });

  it("should render a single DrawerToggle component", () => {
    expect(wrapper.find(DrawerToggle)).toHaveLength(1);
  });
});
