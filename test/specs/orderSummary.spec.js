import OrderSummaryPage from "../pageobjects/orderSummary.page";
import BurgerBuilderPage from "../pageobjects/burgerBuilder.page";
const assert = require("assert");

describe("order summary modal", () => {
  beforeEach(() => {
    if (browser.config.capabilities.browserName === "safari") {
      browser.maximizeWindow();
    }
    browser.url("https://burger-96b0e.firebaseapp.com/");
    browser.pause(500);
    OrderSummaryPage.logIn("test@test.com", "password");
    browser.pause(1000);
  });

  afterEach(() => {
    OrderSummaryPage.logOut();
  });

  it("should display when 'Order Now' CTA is clicked", () => {
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(500);
    assert.equal(OrderSummaryPage.getOrderSummary().isDisplayed(), true);
    OrderSummaryPage.cancelOrderSummary().click();
  });

  it("should display ingredients chosen as part of order", () => {
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(500);
    assert.equal(OrderSummaryPage.getIngredientList().length, 1);
    OrderSummaryPage.cancelOrderSummary().click();
    BurgerBuilderPage.addIngredientButtons()[2].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(500);
    assert.equal(OrderSummaryPage.getIngredientList().length, 2);
    OrderSummaryPage.cancelOrderSummary().click();
  });

  it("should display correct subtotal, toppings, and total price", () => {
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.addIngredientButtons()[2].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(500);
    const subtotal = parseFloat(
      OrderSummaryPage.getSubtotalPrice()
        .getText()
        .split("$")[1]
    );
    const toppingsTotal = parseFloat(
      OrderSummaryPage.getToppingsPrice()
        .getText()
        .split("$")[1]
    );
    const total = parseFloat(
      OrderSummaryPage.getTotalPrice()
        .getText()
        .split("$")[1]
    );
    assert.equal(subtotal + toppingsTotal, total);
    OrderSummaryPage.cancelOrderSummary().click();
  });

  it("should close summary modal when cancel is clicked", () => {
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(1500);
    OrderSummaryPage.cancelOrderSummary().click();
    browser.pause(500);
    assert.equal(OrderSummaryPage.getOrderSummary().isDisplayed(), false);
  });

  it("should close modal and proceed to checkout when continue is clicked", () => {
    BurgerBuilderPage.addIngredientButtons()[4].click();
    BurgerBuilderPage.orderButton().click();
    browser.pause(1500);
    OrderSummaryPage.goToCheckout().click();
    browser.pause(500);
    assert.equal(
      browser.getUrl(),
      "https://burger-96b0e.firebaseapp.com/checkout"
    );
  });
});
