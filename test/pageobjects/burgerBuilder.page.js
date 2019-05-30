import Page from "./page.page";

class burgerBuilderPage extends Page {
  basePrice = "6.00";
  brownColor = "rgba(170,104,23,1)";
  numOfIngredients = 5;
  redColor = "rgba(238,0,0,1)";

  addIngredientButtons() {
    return $$(".BuildControl_More__qJ6-O");
  }

  bacon() {
    return $("div=BACON");
  }

  baconImage() {
    return $(".BurgerIngredient_Bacon__30Pdc");
  }

  bottomBunImage() {
    return $(".BurgerIngredient_BreadBottom__2qd20");
  }

  burgerPrice() {
    return $(".BuildControls_CurrentPrice__2WTop");
  }

  burgerText() {
    return $("p=ADD SOME INGREDIENTS TO YOUR BURGER!");
  }

  cheeseImage() {
    return $(".BurgerIngredient_Cheese__1jJP6");
  }

  getAllIngredients() {
    return $$(".BuildControl_BuildControl__2rpbb");
  }

  getIngredientsInfo() {
    return $$(".BuildControl_Label__1MJVz");
  }

  lettuceImage() {
    return $(".BurgerIngredient_Lettuce__3kGVy");
  }

  logIn() {
    super.logIn();
  }

  logOut() {
    super.logOut();
  }

  meatImage() {
    return $(".BurgerIngredient_Meat__hEcWb");
  }

  orderButton() {
    return $(".BuildControls_OrderButton__1RtWW");
  }

  removeIngredientButtons() {
    return $$(".BuildControl_Less__2l7aH");
  }

  tomatoImage() {
    return $(".BurgerIngredient_Tomato__r_fht");
  }

  topBunImage() {
    return $(".BurgerIngredient_BreadTop__4eG7V");
  }
}

export default new burgerBuilderPage();
