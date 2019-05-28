import Page from "./page.page";

class orderSummaryPage extends Page {
  logIn() {
    super.logIn();
  }

  logout() {
    super.logout();
  }

  getOrderSummary() {
    return $(".OrderSummary_OrderConfirmation__17s5c");
  }
}

export default new orderSummaryPage();
