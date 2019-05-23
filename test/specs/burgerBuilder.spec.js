import BurgerBuilderPage from "../pageobjects/burgerBuilder.page";
const assert = require("assert");

describe("burger builder", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    browser.pause(100);
  });

  it("with no ingredients added, burger representation should be of a top/bottom bun with 'ADD SOME INGREDIENTS TO YOUR BURGER!'", () => {
    assert.equal(BurgerBuilderPage.topBunImage().isDisplayed(), true);
    assert.equal(
      BurgerBuilderPage.burgerText().getText(),
      "ADD SOME INGREDIENTS TO YOUR BURGER!"
    );
    assert.equal(BurgerBuilderPage.bottomBunImage().isDisplayed(), true);
  });

  it("should have a starting price of $6.00", () => {
    assert.equal(
      BurgerBuilderPage.burgerPrice().getText(),
      "CURRENT PRICE: $6.00"
    );
  });

  it("should have a CTA with text 'SIGN IN TO ORDER'", () => {
    assert.equal(BurgerBuilderPage.orderButton().getText(), "SIGN IN TO ORDER");
  });

  it("with no ingredients added, 'SIGN IN TO ORDER' CTA should be disabled", () => {
    assert.equal(BurgerBuilderPage.orderButton().isEnabled(), false);
  });

  it("with any ingredients added, 'SIGN IN TO ORDER' CTA should be enabled", () => {
    BurgerBuilderPage.addIngredientButtons()[0].click();
    assert.equal(BurgerBuilderPage.orderButton().isEnabled(), true);
  });

  it("with no ingredient added, 'LESS' button should be disabled", () => {
    assert.equal(
      BurgerBuilderPage.removeIngredientButtons()[0].isEnabled(),
      false
    );
  });

  it("with ingredient added, 'LESS' button should be enabled", () => {
    BurgerBuilderPage.addIngredientButtons()[0].click();
    assert.equal(
      BurgerBuilderPage.removeIngredientButtons()[0].isEnabled(),
      true
    );
  });

  it("should have multiple ingredients which can be added/removed", () => {
    assert.equal(
      BurgerBuilderPage.getAllIngredients().length,
      BurgerBuilderPage.numOfIngredients
    );
  });

  it("should increase total price when additional bacon (+$1.00) ingredient is added", () => {
    const initialPrice = BurgerBuilderPage.burgerPrice().getText();
    assert.equal(initialPrice, "CURRENT PRICE: $6.00");
    const bacon = BurgerBuilderPage.getIngredientsInfo()[0].getText();
    assert.equal(bacon, "BACON");
    const baconPrice = BurgerBuilderPage.getIngredientsInfo()[1].getText();
    assert.equal(baconPrice, "+ $1.00");
    BurgerBuilderPage.addIngredientButtons()[0].click();
    const newPrice = BurgerBuilderPage.burgerPrice().getText();
    assert.equal(newPrice, "CURRENT PRICE: $7.00");
  });

  it("should not increase total price when additional tomato (+$0.00) ingredient is added", () => {
    const initialPrice = BurgerBuilderPage.burgerPrice().getText();
    assert.equal(
      BurgerBuilderPage.burgerPrice().getText(),
      "CURRENT PRICE: $6.00"
    );
    const tomato = BurgerBuilderPage.getIngredientsInfo()[2].getText();
    assert.equal(tomato, "TOMATO");
    const tomatoPrice = BurgerBuilderPage.getIngredientsInfo()[3].getText();
    assert.equal(tomatoPrice, "+ $0.00");
    BurgerBuilderPage.addIngredientButtons()[1].click();
    assert.equal(BurgerBuilderPage.burgerPrice().getText(), initialPrice);
  });

  it("should decrease total price when additional bacon (+$0.00) ingredients are removed", () => {
    BurgerBuilderPage.addIngredientButtons()[0].click();
    BurgerBuilderPage.addIngredientButtons()[0].click();
    const initialPrice = BurgerBuilderPage.burgerPrice().getText();
    assert.equal(initialPrice, "CURRENT PRICE: $8.00");
    BurgerBuilderPage.removeIngredientButtons()[0].click();
    assert.equal(
      BurgerBuilderPage.burgerPrice().getText(),
      "CURRENT PRICE: $7.00"
    );
  });

  it("when authenticated, 'ORDER NOW' CTA should be present and disabled", () => {
    BurgerBuilderPage.logIn("test@test.com", "password");
    assert.equal(BurgerBuilderPage.orderButton().getText(), "ORDER NOW");
    assert.equal(BurgerBuilderPage.orderButton().isEnabled(), false);
    BurgerBuilderPage.logOut();
  });

  it("when I create a burger with 1 meat, 1 cheese, 1 bacon, 1 lettuce, and 1 tomato it is displayed", () => {
    BurgerBuilderPage.addIngredientButtons()[0].click();
    BurgerBuilderPage.addIngredientButtons()[1].click();
    BurgerBuilderPage.addIngredientButtons()[2].click();
    BurgerBuilderPage.addIngredientButtons()[3].click();
    BurgerBuilderPage.addIngredientButtons()[4].click();
    assert.equal(BurgerBuilderPage.topBunImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.tomatoImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.lettuceImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.baconImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.cheeseImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.meatImage().isDisplayed(), true);
    assert.equal(BurgerBuilderPage.bottomBunImage().isDisplayed(), true);
  });
});
