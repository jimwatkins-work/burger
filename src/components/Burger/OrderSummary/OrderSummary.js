import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(ingKey => {
    if (props.ingredients[ingKey] > 0) {
      return (
        <li key={ingKey + props.ingredients[ingKey]} style={{ color: "white" }}>
          <span style={{ textTransform: "capitalize" }}>{ingKey}:</span>{" "}
          {props.ingredients[ingKey]} @ $
          {props.ingredientPrices[ingKey].toFixed(2)}
        </li>
      );
    }
  });

  const toppingsPrice = props.price - props.subtotal;
  return (
    <>
      <h1 className={classes.OrderConfirmation}>YOUR ORDER:</h1>
      <ul className={classes.IngredientList}>{ingSummary}</ul>
      <p className={classes.Subtotal}>SUBTOTAL: ${props.subtotal.toFixed(2)}</p>
      <p className={classes.Subtotal}>TOPPINGS: ${toppingsPrice.toFixed(2)}</p>
      <p className={classes.Total}>
        <strong>TOTAL: ${props.price.toFixed(2)}</strong>
      </p>
      <br />
      <p className={classes.Checkout}>CONTINUE TO CHECKOUT?</p>
      <div className={classes.Buttons}>
        <Button clicked={props.continuePurchase} btnType="Success">
          CONTINUE
        </Button>
        <Button clicked={props.cancelPurchase} btnType="Danger">
          CANCEL
        </Button>
      </div>
    </>
  );
};

export default orderSummary;
