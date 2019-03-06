import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = props => {
  //Object method takes our state ingredients object and makes an array out of the keys
  //Map takes that array by returning a new array which length is value of key
  //Map again takes each of those arrays and turns them into a new array of jsx components
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        return <BurgerIngredient key={ingKey + i} type={ingKey} />;
      });
    })
    //Reduce takes the previous array and then concatenates the prev and curr elements
    //with a starting element of an empty array
    //This will give us a length for total # of ingredients
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = (
      <p className={classes.BurgerText}>ADD SOME INGREDIENTS TO YOUR BURGER!</p>
    );
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
