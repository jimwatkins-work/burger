import React from "react";
import classes from "./CheckoutSummary.module.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>EVERYTHING LOOK GOOD?!?</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
        <Button btnType="Danger" clicked={props.checkoutCancelled}>
          RETURN TO MENU
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinued}>
          CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
