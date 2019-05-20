const assert = require("assert");

let logIn = () => {
  const signIn = $("a=SIGN IN");
  const emailField = $("[placeholder=EMAIL]");
  const passwordField = $("[placeholder=PASSWORD]");
  const signInButton = $("button=SIGN IN");
  signIn.click();
  emailField.setValue("test@test.com");
  passwordField.setValue("password");
  signInButton.click();
};

let logOut = () => {
  const signOut = $("a=SIGN OUT");
  signOut.click();
};

describe("navigation bar", () => {
  before(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
  });

  it("should have nav item BURGER BUILDER", () => {
    const navItemBurgerBuilder = $("a=BURGER BUILDER");
    assert.equal(navItemBurgerBuilder.getText(), "BURGER BUILDER");
  });

  it("while not authenticated should have nav item SIGN IN", () => {
    const navItemSignIn = $("a=SIGN IN");
    assert.equal(navItemSignIn.getText(), "SIGN IN");
  });

  it("while authenticated should have nav item ORDERS", () => {
    logIn();
    const navItemOrders = $("a=ORDERS");
    assert.equal(navItemOrders.getText(), "ORDERS");
    logOut();
  });

  it("while authenticated should have nav item SIGN OUT", () => {
    logIn();
    const navItemSignOut = $("a=SIGN OUT");
    assert.equal(navItemSignOut.getText(), "SIGN OUT");
    logOut();
  });

  it("while authenticated should still have nav item BURGER BUILDER", () => {
    logIn();
    const navItemBurgerBuilder = $("a=BURGER BUILDER");
    assert.equal(navItemBurgerBuilder.getText(), "BURGER BUILDER");
    logOut();
  });

  it("should display active link with the backround color of rgba(238,0,0,1)", () => {
    const navItemBurgerBuilder = $("a=BURGER BUILDER");
    navItemBurgerBuilder.click();
    const activeNavBackground = navItemBurgerBuilder.getCSSProperty(
      "background-color"
    ).value;
    assert.equal(activeNavBackground, "rgba(238,0,0,1)");
  });

  it("should update background color to rgba(238,0,0,1) when new link has been selected", () => {
    const navItemBurgerBuilder = $("a=BURGER BUILDER");
    navItemBurgerBuilder.click();
    const navItemSignIn = $("a=SIGN IN");
    navItemSignIn.click();
    const activeNavBackground = navItemSignIn.getCSSProperty("background-color")
      .value;
    assert.equal(activeNavBackground, "rgba(238,0,0,1)");
  });

  it("should change the url when a link has been selected", () => {
    const navItemBurgerBuilder = $("a=BURGER BUILDER");
    navItemBurgerBuilder.click();
    const baseUrl = browser.getUrl();
    assert.equal(baseUrl, "https://burger-96b0e.firebaseapp.com/");
    const navItemSignIn = $("a=SIGN IN");
    navItemSignIn.click();
    const signInUrl = browser.getUrl();
    assert.equal(signInUrl, "https://burger-96b0e.firebaseapp.com/signin");
  });
});
