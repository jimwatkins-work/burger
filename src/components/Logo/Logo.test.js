import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Logo from "./Logo";

configure({
  adapter: new Adapter()
});

describe("<Logo />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logo />);
  });

  it("should render image burger-logo.png", () => {
    expect(
      wrapper.contains(<img src="burger-logo.png" alt="BurgerTown" />)
    ).toEqual(true);
  });
});
