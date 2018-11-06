import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
  const ingSummary = Object.keys(props.ingredients).map(ingKey => {
    return (
      <li key={ingKey + props.ingredients[ingKey]}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}:</span>{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });

  return (
    <>
      <h3>Your Order:</h3>
      <p>A delicious burger with the following:</p>
      <ul>{ingSummary}</ul>
      <p>
        <strong>Total: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button clicked={props.continuePurchase} btnType="Success">
        Continue
      </Button>
      <Button clicked={props.cancelPurchase} btnType="Danger">
        Cancel
      </Button>
    </>
  );
};

export default orderSummary;
