import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  error: false,
  prices: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1
        },
        prices: {
          ...state.prices,
          total: state.prices.total + state.prices[action.ingredientName]
        }
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1
        },
        prices: {
          ...state.prices,
          total: state.prices.total - state.prices[action.ingredientName]
        }
      };
    case actionTypes.SET_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          tomato: action.ingredients.tomato,
          lettuce: action.ingredients.lettuce,
          bacon: action.ingredients.bacon,
          cheese: action.ingredients.cheese,
          meat: action.ingredients.meat
        },
        error: false
      };
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return {
        ...state,
        error: true
      };
    case actionTypes.SET_PRICES:
      return {
        ...state,
        prices: action.prices,
        error: false
      };
    case actionTypes.FETCH_PRICES_FAILED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};

export default reducer;
