import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";

const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey + props.ingredients[ingKey]}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}:</span>{" "}
        {props.ingredients[ingKey]} @ $
        {props.ingredientPrices[ingKey].toFixed(2)}
      </li>
    );
  });

  const toppingsPrice = props.price - props.subtotal;
  return (
    <>
      <h3>Your Order:</h3>
      <p>A delicious burger with the following:</p>
      <ul>{ingSummary}</ul>
      <p>Subtotal: ${props.subtotal.toFixed(2)}</p>
      <p>Toppings: ${toppingsPrice.toFixed(2)}</p>
      <p>
        <strong>Total: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <div className={classes.Buttons}>
        <Button clicked={props.continuePurchase} btnType="Success">
          Continue
        </Button>
        <Button clicked={props.cancelPurchase} btnType="Danger">
          Cancel
        </Button>
      </div>
    </>
  );
};

export default orderSummary;
