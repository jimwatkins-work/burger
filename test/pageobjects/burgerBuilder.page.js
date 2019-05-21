import Page from "./page.page";

class burgerBuilderPage extends Page {
  brownColor = "rgba(170,104,23,1)";
  redColor = "rgba(238,0,0,1)";
  basePrice = "6.00";

  login() {
    super.login();
  }

  logout() {
    super.logout();
  }

  burgerText() {
    return $("p=ADD SOME INGREDIENTS TO YOUR BURGER!");
  }

  burgerPrice() {
    return $(".BuildControls_CurrentPrice__2WTop");
  }

  signInToOrderButton() {
    return $(".BuildControls_OrderButton__1RtWW");
  }

  addIngredient() {
    return $(".BuildControl_More__qJ6-O");
  }
}

export default new burgerBuilderPage();
