import React from "react";
import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import classes from "./NavigationItems.module.css";

const navigationItems = props => {
  console.log(props.isAuthenticated);
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/" exact>
        BURGER BUILDER
      </NavigationItem>
      <NavigationItem link="/orders">ORDERS</NavigationItem>
      {!props.isAuthenticated ? (
        <NavigationItem link="/signin">SIGN IN</NavigationItem>
      ) : (
        <NavigationItem link="/signout">SIGN OUT</NavigationItem>
      )}
    </ul>
  );
};

export default navigationItems;
