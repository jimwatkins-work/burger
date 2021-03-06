import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const addIngredient = name => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = name => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

export const setIngredients = ingredients => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED,
    error: true
  };
};

export const setPrices = prices => {
  return {
    type: actionTypes.SET_PRICES,
    prices: prices
  };
};

export const fetchPricesFailed = () => {
  return {
    type: actionTypes.FETCH_PRICES_FAILED,
    error: true
  };
};

export const initIngredients = () => {
  return dispatch => {
    axios
      .get("https://burger-96b0e.firebaseio.com/ingredients.json")
      .then(response => {
        dispatch(setIngredients(response.data));
      })
      .catch(error => {
        dispatch(fetchIngredientsFailed());
      });
  };
};

export const initPrices = () => {
  return dispatch => {
    axios
      .get("https://burger-96b0e.firebaseio.com/prices.json")
      .then(response => {
        dispatch(setPrices(response.data));
      })
      .catch(error => {
        dispatch(fetchPricesFailed());
      });
  };
};
