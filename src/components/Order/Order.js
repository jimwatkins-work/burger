import React from "react";
import classes from "./Order.module.css";
import { convertDate } from "../../shared/utility";

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
            padding: "5px",
            backgroundColor: "white"
          }}
        >
          {ing.name} ({ing.amount})
        </span>
      );
    }
  });

  let date = convertDate(props.date);

  return (
    <div className={classes.Order}>
      <p>
        <strong>DATE ORDERED:</strong> {date}
      </p>
      <p>
        <strong>INGREDIENTS:</strong> {ingredientsOutput}
      </p>
      <p>
        <strong>TOTAL PRICE: ${props.totalPrice.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
