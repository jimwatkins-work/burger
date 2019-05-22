import Page from "./page.page";

class burgerBuilderPage extends Page {
  brownColor = "rgba(170,104,23,1)";
  redColor = "rgba(238,0,0,1)";
  basePrice = "6.00";
  numOfIngredients = 5;

  logIn() {
    super.logIn();
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

  orderButton() {
    return $(".BuildControls_OrderButton__1RtWW");
  }

  getAllIngredients() {
    return $$(".BuildControl_BuildControl__2rpbb");
  }

  getIngredientsInfo() {
    return $$(".BuildControl_Label__1MJVz");
  }

  addIngredientButtons() {
    return $$(".BuildControl_More__qJ6-O");
  }

  removeIngredientButtons() {
    return $$(".BuildControl_Less__2l7aH");
  }

  bacon() {
    return $("div=BACON");
  }

  topBunImage() {
    return $(".BurgerIngredient_BreadTop__4eG7V");
  }

  bottomBunImage() {
    return $(".BurgerIngredient_BreadBottom__2qd20");
  }

  meatImage() {
    return $(".BurgerIngredient_Meat__hEcWb");
  }

  cheeseImage() {
    return $(".BurgerIngredient_Cheese__1jJP6");
  }

  baconImage() {
    return $(".BurgerIngredient_Bacon__30Pdc");
  }

  lettuceImage() {
    return $(".BurgerIngredient_Lettuce__3kGVy");
  }

  tomatoImage() {
    return $(".BurgerIngredient_Tomato__r_fht");
  }
}

export default new burgerBuilderPage();
