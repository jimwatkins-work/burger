import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      bacon: 0,
      tomato: 0,
      lettuce: 0,
      cheese: 0,
      meat: 0
    },
    prices: {
      bacon: 1.0,
      tomato: 0.25,
      lettuce: 0.25,
      cheese: 0.5,
      meat: 1.5,
      burger: 6.5
    },
    totalPrice: 6.5,
    purchasable: false,
    purchasing: false,
    loading: false
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
    const newPrice = this.state.totalPrice + this.state.prices[type];
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
    const newPrice = this.state.totalPrice - this.state.prices[type];
    this.setState({ totalPrice: newPrice, ingredients: updIngredients });
    this.updatePurchaseState(updIngredients);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      date: Date(),
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {
        name: "Jim Watkins",
        address: {
          street: "15154 Bunker Hill Ct",
          city: "Happy Valley",
          state: "OR",
          zip: "97086"
        },
        email: "james.watkins77@yahoo.com"
      },
      deliveryMethod: "fastest"
    };

    axios
      .post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false, purchasing: false });
      })
      .catch(error => {
        this.setState({ loading: false, purchasing: false });
      });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = (
      <OrderSummary
        ingredientPrices={this.state.prices}
        ingredients={this.state.ingredients}
        price={this.state.totalPrice}
        subtotal={this.state.prices.burger}
        cancelPurchase={this.purchaseCancelHandler}
        continuePurchase={this.purchaseContinueHandler}
      />
    );

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchasing={this.purchaseHandler}
        />
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
