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
    ingredients: null,
    prices: null,
    totalPrice: null,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("https://burger-96b0e.firebaseio.com/ingredients.json")
      .then(response => {
        this.setState({ ingredients: response.data });
      })
      .catch(error => {
        this.setState({ error: true });
      });

    axios
      .get("https://burger-96b0e.firebaseio.com/prices.json")
      .then(response => {
        console.log(response.data.burger);
        this.setState({
          prices: response.data,
          totalPrice: response.data.burger
        });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

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

    let orderSummary = null;

    let burger = this.state.error ? (
      <p>Fatal Error- Ingredients can't be loaded.</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients && this.state.prices) {
      burger = (
        <>
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
      orderSummary = (
        <OrderSummary
          ingredientPrices={this.state.prices}
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          subtotal={this.state.prices.burger}
          cancelPurchase={this.purchaseCancelHandler}
          continuePurchase={this.purchaseContinueHandler}
        />
      );
    }

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
        {burger}
      </>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axios);
