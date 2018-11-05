import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  bacon: 1.0,
  lettuce: 0.25,
  cheese: 0.5,
  meat: 1.5
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 1,
      lettuce: 1,
      cheese: 1,
      meat: 1
    },
    totalPrice: 4.0
  };

  addIngredientHandler = type => {
    const updIngredients = {
      ...this.state.ingredients
    };
    updIngredients[type] = this.state.ingredients[type] + 1;

    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
  };

  removeIngredientHandler = type => {
    const updIngredients = {
      ...this.state.ingredients
    };
    updIngredients[type] = this.state.ingredients[type] - 1;
  };

  render() {
    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls ingredientAdded={this.addIngredientHandler} />
      </>
    );
  }
}

export default BurgerBuilder;
