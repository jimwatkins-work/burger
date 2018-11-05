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
      bacon: 0,
      lettuce: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 6.5,
    purchasable: false
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map(igKey => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  addIngredientHandler = type => {
    const updIngredients = {
      ...this.state.ingredients
    };
    updIngredients[type] = this.state.ingredients[type] + 1;
    const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
    this.updatePurchaseState(updIngredients);
  };

  removeIngredientHandler = type => {
    const updIngredients = {
      ...this.state.ingredients
    };
    if (this.state.ingredients[type] === 0) {
      return;
    }
    updIngredients[type] = this.state.ingredients[type] - 1;
    const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
    this.updatePurchaseState(updIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
        />
      </>
    );
  }
}

export default BurgerBuilder;
