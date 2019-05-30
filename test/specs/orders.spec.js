import OrdersPage from "../pageobjects/orders.page";
import NavPage from "../pageobjects/nav.page";

const assert = require("assert");

describe("orders page", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com/");
    browser.pause(500);
    OrdersPage.logIn("test@test.com", "password");
    NavPage.navItemOrders().click();
  });

  afterEach(() => {
    OrdersPage.logOut();
  });

  it("should have a correct url of /orders", () => {
    assert.equal(
      browser.getUrl(),
      "https://burger-96b0e.firebaseapp.com/orders"
    );
  });

  it("should have the 'Date Ordered', 'Ingredients', and 'Total Price' fields for each past order", () => {
    browser.pause(500);
    const dateOrderedField = OrdersPage.getOrders()[0].$(
      "strong=DATE ORDERED:"
    );
    assert(dateOrderedField !== null);
    const ingredientsField = OrdersPage.getOrders()[0].$("strong=INGREDIENTS:");
    assert(ingredientsField !== null);
    const totalPriceField = OrdersPage.getOrders()[0].$("strong=TOTAL PRICE:");
    assert(totalPriceField !== null);
  });
});
