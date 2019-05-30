import OrderSummaryPage from "../pageobjects/orderSummary.page";
import BurgerBuilderPage from "../pageobjects/burgerBuilder.page";
const assert = require("assert");

describe("auth page", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com/");
    browser.pause(500);
  });

  it("should display when 'Order Now' CTA is clicked", () => {
    OrderSummaryPage.logIn("test@test.com", "password");
    browser.pause(500);
    BurgerBuilderPage.addIngredientButtons()[0].click();
    BurgerBuilderPage.addIngredientButtons()[1].click();
    BurgerBuilderPage.addIngredientButtons()[2].click();
    BurgerBuilderPage.addIngredientButtons()[3].click();
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(500);
    assert.equal(OrderSummaryPage.getOrderSummary().isDisplayed(), true);
    OrderSummaryPage.cancelOrderSummary().click();
    OrderSummaryPage.logOut();
  });
});
