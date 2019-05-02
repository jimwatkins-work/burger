import * as actions from "./burgerBuilder";
import * as types from "./actionTypes";

describe("actions", () => {
  it("should create an action to add ingredient", () => {
    const name = "some-name";
    expect(actions.addIngredient(name)).toEqual({
      type: types.ADD_INGREDIENT,
      ingredientName: name
    });
  });

  it("should create an action to remove ingredient", () => {
    const name = "some-name";
    expect(actions.removeIngredient(name)).toEqual({
      type: types.REMOVE_INGREDIENT,
      ingredientName: name
    });
  });

  it("should create an action when setting ingredients", () => {
    const ingredients = "some-ingredients";
    expect(actions.setIngredients(ingredients)).toEqual({
      type: types.SET_INGREDIENTS,
      ingredients: ingredients
    });
  });

  it("should create an action when fetching ingredients fails", () => {
    expect(actions.fetchIngredientsFailed()).toEqual({
      type: types.FETCH_INGREDIENTS_FAILED,
      error: true
    });
  });

  it("should create an action when setting prices", () => {
    const prices = "some-prices";
    expect(actions.setPrices(prices)).toEqual({
      type: types.SET_PRICES,
      prices: prices
    });
  });

  it("should create an action when fetching prices fails", () => {
    expect(actions.fetchPricesFailed()).toEqual({
      type: types.FETCH_PRICES_FAILED,
      error: true
    });
  });
});
