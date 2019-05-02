import reducer from "./burgerBuilder";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  const initialState = {
    ingredients: null,
    error: false,
    prices: null,
    building: false
  };

  const initialStatePricesAndIngredients = {
    ingredients: {
      bacon: 0,
      cheese: 0,
      lettuce: 0,
      meat: 0,
      tomato: 0
    },
    error: false,
    prices: {
      bacon: 1,
      burger: 6,
      cheese: 0.5,
      lettuce: 0,
      meat: 1.5,
      tomato: 0,
      total: 6
    },
    building: true
  };

  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
      error: false,
      prices: null,
      building: false
    });
  });

  it("should change error status to true when failing to fetch ingredients", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
      })
    ).toEqual({
      ingredients: null,
      error: true,
      prices: null,
      building: false
    });
  });

  it("should return ingredients when they are fetched successfully", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: {
          tomato: "tomato",
          lettuce: "lettuce",
          bacon: "bacon",
          cheese: "cheese",
          meat: "meat"
        }
      })
    ).toEqual({
      ingredients: {
        tomato: "tomato",
        lettuce: "lettuce",
        bacon: "bacon",
        cheese: "cheese",
        meat: "meat"
      },
      error: false,
      prices: null,
      building: false
    });
  });

  it("should change error status to true when failing to fetch prices", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.FETCH_PRICES_FAILED
      })
    ).toEqual({
      ingredients: null,
      error: true,
      prices: null,
      building: false
    });
  });

  it("should return prices when they are fetched successfully", () => {
    expect(
      reducer(initialState, {
        type: actionTypes.SET_PRICES,
        prices: {
          tomato: 0,
          lettuce: 0,
          bacon: 1,
          cheese: 1,
          meat: 2
        }
      })
    ).toEqual({
      ingredients: null,
      error: false,
      prices: {
        tomato: 0,
        lettuce: 0,
        bacon: 1,
        cheese: 1,
        meat: 2
      },
      building: false
    });
  });

  it("should add an ingredient successfully", () => {
    expect(
      reducer(initialStatePricesAndIngredients, {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: "bacon"
      })
    ).toEqual({
      ingredients: {
        bacon: 1,
        cheese: 0,
        lettuce: 0,
        meat: 0,
        tomato: 0
      },
      error: false,
      prices: {
        bacon: 1,
        burger: 6,
        cheese: 0.5,
        lettuce: 0,
        meat: 1.5,
        tomato: 0,
        total: 7
      },
      building: true
    });
  });

  it("should remove an ingredient successfully", () => {
    expect(
      reducer(
        {
          ingredients: {
            bacon: 1,
            cheese: 0,
            lettuce: 0,
            meat: 0,
            tomato: 0
          },
          error: false,
          prices: {
            bacon: 1,
            burger: 6,
            cheese: 0.5,
            lettuce: 0,
            meat: 1.5,
            tomato: 0,
            total: 7
          },
          building: true
        },
        {
          type: actionTypes.REMOVE_INGREDIENT,
          ingredientName: "bacon"
        }
      )
    ).toEqual(initialStatePricesAndIngredients);
  });
});
