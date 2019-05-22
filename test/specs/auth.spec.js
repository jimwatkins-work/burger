import BurgerBuilderPage from "../pageobjects/auth.page";
const assert = require("assert");

describe("navigation bar", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    browser.pause(100);
  });

  it("with no ingredients added burger representation should be of a top/bottom bun with 'ADD SOME INGREDIENTS TO YOUR BURGER!'", () => {
    assert.equal(BurgerBuilderPage.topBunImage().isDisplayed(), true);
    assert.equal(
      BurgerBuilderPage.burgerText().getText(),
      "ADD SOME INGREDIENTS TO YOUR BURGER!"
    );
    assert.equal(BurgerBuilderPage.bottomBunImage().isDisplayed(), true);
  });
});
