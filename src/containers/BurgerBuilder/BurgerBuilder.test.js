import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { BurgerBuilder } from "./BurgerBuilder";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

configure({
  adapter: new Adapter()
});

describe("<BurgerBuilder />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <BurgerBuilder onInitIngredients={() => {}} onInitPrices={() => {}} />
    );
  });

  it("should render <BuildControls /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { lettuce: 0 }, prices: { lettuce: 1 } });
    expect(wrapper.find(BuildControls)).toHaveLength(1);
  });

  it("should render <Burger /> when receiving ingredients", () => {
    wrapper.setProps({ ings: { lettuce: 0 }, prices: { lettuce: 1 } });
    expect(wrapper.find(Burger)).toHaveLength(1);
  });

  it("should render <OrderSummary /> when receiving ingredient", () => {
    wrapper.setProps({ ings: { lettuce: 0 }, prices: { lettuce: 1 } });
    expect(wrapper.find(OrderSummary)).toHaveLength(1);
  });
});
