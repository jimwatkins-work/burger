import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const Controls = [
  { label: "BACON", type: "bacon", price: 1.0 },
  { label: "TOMATO", type: "tomato", price: 0.0 },
  { label: "LETTUCE", type: "lettuce", price: 0.0 },
  { label: "CHEESE", type: "cheese", price: 0.5 },
  { label: "MEAT", type: "meat", price: 1.5 }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p className={classes.CurrentPrice}>
        <strong>CURRENT PRICE: ${props.price.toFixed(2)}</strong>
      </p>
      {Controls.map(ctrl => {
        return (
          <BuildControl
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            key={ctrl.label}
            label={ctrl.label}
            disabled={props.disabled[ctrl.type]}
            price={ctrl.price}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchasing}
      >
        {props.isAuth ? "ORDER NOW" : "SIGN IN TO ORDER"}
      </button>
    </div>
  );
};

export default BuildControls;
