import Page from "./page.page";

class NavPage extends Page {
  chromeBrownColor = "rgba(170,104,23,1)";
  chromeRedColor = "rgba(238,0,0,1)";
  firefoxBrownColor = "rgb(170,104,23)";
  firefoxRedColor = "rgb(238,0,0)";

  logIn() {
    super.logIn();
  }

  logOut() {
    super.logOut();
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
