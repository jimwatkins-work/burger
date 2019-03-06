import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const Controls = [
  { label: "BACON", type: "bacon" },
  { label: "TOMATO", type: "tomato" },
  { label: "LETTUCE", type: "lettuce" },
  { label: "CHEESE", type: "cheese" },
  { label: "MEAT", type: "meat" }
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
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.purchasing}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
