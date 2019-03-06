import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  error: false,
  prices: null
};

const addIngredient = (state, action) => {
  const updatedIngredientAdded = {
    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
  };
  const updatedIngredientsAdded = updateObject(
    state.ingredients,
    updatedIngredientAdded
  );
  const updatedStateAdded = {
    ingredients: updatedIngredientsAdded,
    prices: {
      ...state.prices,
      total: state.prices.total + state.prices[action.ingredientName]
    }
  };
  return updateObject(state, updatedStateAdded);
};

const removeIngredient = (state, action) => {
  const updatedIngredientRemoved = {
    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
  };
  const updatedIngredientsRemoved = updateObject(
    state.ingredients,
    updatedIngredientRemoved
  );
  const updatedState = {
    ingredients: updatedIngredientsRemoved,
    prices: {
      ...state.prices,
      total: state.prices.total - state.prices[action.ingredientName]
    }
  };
  return updateObject(state, updatedState);
};

const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      tomato: action.ingredients.tomato,
      lettuce: action.ingredients.lettuce,
      bacon: action.ingredients.bacon,
      cheese: action.ingredients.cheese,
      meat: action.ingredients.meat
    },
    error: false
  });
};

const fetchIngredientesFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const setPrices = (state, action) => {
  return updateObject(state, {
    prices: action.prices,
    error: false
  });
};

const fetchPricesFailed = (state, action) => {
  return updateObject(state, {
    error: true
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientesFailed(state, action);
    case actionTypes.SET_PRICES:
      return setPrices(state, action);
    case actionTypes.FETCH_PRICES_FAILED:
      return fetchPricesFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
