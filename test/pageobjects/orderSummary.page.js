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
}

export default new orderSummaryPage();
