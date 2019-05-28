import Page from "./page.page";

class NavPage extends Page {
  brownColor = "rgba(170,104,23,1)";
  redColor = "rgba(238,0,0,1)";

  logIn() {
    super.logIn();
  }

  logout() {
    super.logout();
  }

  navItemBurgerBuilder() {
    return $("a=BURGER BUILDER");
  }

  navItemOrders() {
    return $("a=ORDERS");
  }
  navItemSignIn() {
    return $("a=SIGN IN");
  }

  navItemSignOut() {
    return $("a=SIGN OUT");
  }
}

export default new NavPage();
