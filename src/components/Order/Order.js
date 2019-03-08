import React from "react";
import classes from "./Order.module.css";

const Order = props => {
  const ingredients = [];

  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    });
  }

  const ingredientsOutput = ingredients.map(ing => {
    if (ing.amount === 0) {
      return null;
    } else {
      return (
        <span
          key={ing.name + Math.random()}
          style={{
            textTransform: "Capitalize",
            display: "inline-block",
            margin: "0 8px",
            border: "1px solid #ccc",
            padding: "5px"
          }}
        >
          {ing.name} ({ing.amount})
        </span>
      );
    }
  });

  return (
    <div className={classes.Order}>
      <p>DATE ORDERED: {props.date}</p>
      <p>INGREDIENTS: {ingredientsOutput}</p>
      <p>
        TOTAL PRICE: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
