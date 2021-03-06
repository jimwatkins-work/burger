import React from "react";

import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => (
  <ul className={classes.NavigationItems}>
    <NavigationItem link="/" exact>
      BURGER BUILDER
    </NavigationItem>
    {props.isAuthenticated ? (
      <NavigationItem link="/orders">ORDERS</NavigationItem>
    ) : null}
    {!props.isAuthenticated ? (
      <NavigationItem link="/signin">SIGN IN</NavigationItem>
    ) : (
      <NavigationItem link="/logout">SIGN OUT</NavigationItem>
    )}
  </ul>
);

export default navigationItems;
