import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const Controls = [
  { label: "Bacon", type: "bacon" },
  { label: "Lettuce", type: "lettuce" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>
        <strong>Current Price: ${props.price.toFixed(2)}</strong>
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
      <button className={classes.OrderButton} disabled={!props.purchasable}>
        Order Now
      </button>
    </div>
  );
};

export default BuildControls;
