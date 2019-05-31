import NavPage from "../pageobjects/nav.page";
const assert = require("assert");

describe("navigation bar", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    if (browser.config.capabilities.browserName === "safari") {
      browser.maximizeWindow();
    }
    browser.pause(500);
  });

  it("should have a nav item BURGER BUILDER", () => {
    assert.equal(NavPage.navItemBurgerBuilder().getText(), "BURGER BUILDER");
  });

  it("while not authenticated should have a nav item SIGN IN", () => {
    assert.equal(NavPage.navItemSignIn().getText(), "SIGN IN");
  });

  it("while authenticated should have a nav item ORDERS", () => {
    NavPage.logIn("test@test.com", "password");
    assert.equal(NavPage.navItemOrders().getText(), "ORDERS");
    NavPage.logOut();
  });

  it("while authenticated should have a nav item SIGN OUT", () => {
    NavPage.logIn("test@test.com", "password");
    assert.equal(NavPage.navItemSignOut().getText(), "SIGN OUT");
    NavPage.logOut();
  });

  it("while authenticated should still have a nav item BURGER BUILDER", () => {
    NavPage.logIn("test@test.com", "password");
    assert.equal(NavPage.navItemBurgerBuilder().getText(), "BURGER BUILDER");
    NavPage.logOut();
  });

  it("should display active link with the backround color of rgba(238,0,0,1)", () => {
    NavPage.navItemBurgerBuilder().click();
    const burgerBuilderNavItemBackground = NavPage.navItemBurgerBuilder().getCSSProperty(
      "background-color"
    ).value;
    if (browser.config.capabilities.browserName === "firefox" || "safari") {
      assert.equal(burgerBuilderNavItemBackground, NavPage.firefoxRedColor);
    } else {
      assert.equal(burgerBuilderNavItemBackground, NavPage.chromeRedColor);
    }
  });

  it("should update background color to rgba(238,0,0,1) when new link has been selected", () => {
    NavPage.navItemBurgerBuilder().click();
    NavPage.navItemSignIn().click();
    const signInNavItemBackground = NavPage.navItemSignIn().getCSSProperty(
      "background-color"
    ).value;
    if (browser.config.capabilities.browserName === "firefox" || "safari") {
      assert.equal(signInNavItemBackground, NavPage.firefoxRedColor);
    } else {
      assert.equal(signInNavItemBackground, NavPage.chromeRedColor);
    }
  });

  it("should update background color to rgba(143,92,44) when link is hovered over", () => {
    NavPage.navItemBurgerBuilder().click();
    NavPage.navItemSignIn().moveTo();
    const signInNavItemBackground = NavPage.navItemSignIn().getCSSProperty(
      "background-color"
    ).value;
    if (browser.config.capabilities.browserName === "firefox" || "safari") {
      assert.equal(signInNavItemBackground, NavPage.firefoxBrownColor);
    } else {
      assert.equal(signInNavItemBackground, NavPage.chromeBrownColor);
    }
  });

  it("should change the url when a link has been selected", () => {
    NavPage.navItemBurgerBuilder().click();
    assert.equal(browser.getUrl(), "https://burger-96b0e.firebaseapp.com/");
    NavPage.navItemSignIn().click();
    assert.equal(
      browser.getUrl(),
      "https://burger-96b0e.firebaseapp.com/signin"
    );
  });
});
