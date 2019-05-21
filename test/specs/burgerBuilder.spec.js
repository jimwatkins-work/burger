import BurgerBuilderPage from "../pageobjects/burgerBuilder.page";
const assert = require("assert");

describe("navigation bar", () => {
  before(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
  });

  it("should have a starting text of 'ADD SOME INGREDIENTS TO YOUR BURGER!'", () => {
    assert.equal(
      BurgerBuilderPage.burgerText().getText(),
      "ADD SOME INGREDIENTS TO YOUR BURGER!"
    );
  });

  it("should have a starting price of $6.00", () => {
    assert.equal(
      BurgerBuilderPage.burgerPrice().getText(),
      "CURRENT PRICE: $6.00"
    );
  });

  it("should have a CTA with text 'SIGN IN TO ORDER'", () => {
    assert.equal(
      BurgerBuilderPage.signInToOrderButton().getText(),
      "SIGN IN TO ORDER"
    );
  });

  it("with no ingredients added, 'SIGN IN TO ORDER' CTA should be disabled", () => {
    assert.equal(BurgerBuilderPage.signInToOrderButton().isEnabled(), false);
  });

  it("with any ingredients added, 'SIGN IN TO ORDER' CTA should be enabled", () => {
    BurgerBuilderPage.addIngredient().click();
    assert.equal(BurgerBuilderPage.signInToOrderButton().isEnabled(), true);
  });
});
