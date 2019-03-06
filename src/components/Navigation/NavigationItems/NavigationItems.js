import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        BURGER BUILDER
      </NavigationItem>
      <NavigationItem link="/orders">ORDERS</NavigationItem>
    </ul>
  );
};

export default navigationItems;
