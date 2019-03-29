import React from "react";
import classes from "./BuildControl.module.css";

const BuildControl = props => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        {" "}
        LESS{" "}
      </button>
      <button className={classes.More} onClick={props.added}>
        {" "}
        MORE{" "}
      </button>
      <div className={classes.Label}>+ ${Number(props.price).toFixed(2)}</div>
    </div>
  );
};

export default BuildControl;
