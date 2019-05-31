import Page from "./page.page";

class orderSummaryPage extends Page {
  logIn() {
    super.logIn();
  }

  logOut() {
    super.logOut();
  }

  cancelOrderSummary() {
    return $("button=CANCEL");
  }

  getOrderSummary() {
    return $(".OrderSummary_OrderConfirmation__17s5c");
  }

  getIngredientList() {
    return $$("li span");
  }

  getSubtotalPrice() {
    return $$(".OrderSummary_Subtotal__3ArGl")[0];
  }

  getToppingsPrice() {
    return $$(".OrderSummary_Subtotal__3ArGl")[1];
  }

  getTotalPrice() {
    return $(".OrderSummary_Total__1i6Ua");
  }

  goToCheckout() {
    return $("button=CONTINUE");
  }
}

export default new orderSummaryPage();
