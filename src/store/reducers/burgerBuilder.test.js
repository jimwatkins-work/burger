import reducer from "./burgerBuilder";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      ingredients: null,
      error: false,
      prices: null,
      building: false
    });
  });
});
