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
      <p>Total: ${props.price}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Success">Continue</Button>
      <Button clicked={props.modalClosed} btnType="Danger">
        Cancel
      </Button>
    </>
  );
};

export default orderSummary;
