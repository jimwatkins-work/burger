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
      {Controls.map(ctrl => {
        return <BuildControl key={ctrl.label} label={ctrl.label} />;
      })}
    </div>
  );
};

export default BuildControls;
