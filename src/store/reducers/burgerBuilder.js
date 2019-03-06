import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  ingredients: null,
  error: false,
  prices: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
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

    case actionTypes.REMOVE_INGREDIENT:
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

    case actionTypes.SET_INGREDIENTS:
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

    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return updateObject(state, {
        error: true
      });

    case actionTypes.SET_PRICES:
      return updateObject(state, {
        prices: action.prices,
        error: false
      });

    case actionTypes.FETCH_PRICES_FAILED:
      return updateObject(state, {
        error: true
      });

    default:
      return state;
  }
};

export default reducer;
