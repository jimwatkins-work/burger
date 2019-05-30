import Page from "./page.page";

class OrdersPage extends Page {
  getOrders() {
    return $$(".Order_Order__2ZyfV");
  }

  logIn() {
    super.logIn();
  }

  logOut() {
    super.logOut();
  }

  signIn() {
    return $("a=SIGN IN");
  }
}

export default new OrdersPage();
