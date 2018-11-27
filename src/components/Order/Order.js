import React from "react";
import classes from "./Order.module.css";

const Order = props => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: A burger duh </p>
      <p>
        Total Price: <strong>$11.95</strong>
      </p>
    </div>
  );
};

export default Order;
