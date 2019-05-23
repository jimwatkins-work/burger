import AuthPage from "../pageobjects/auth.page";
const assert = require("assert");

describe("auth page", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    browser.pause(100);
  });

  it("should set a userId, token, and tokenExpiration in local storage upon authorization", () => {
    AuthPage.logIn("test@test.com", "password");
    const userId = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("userId"));
      }, 500);
    });
    const token = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("token"));
      }, 500);
    });
    const tokenExpiration = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("tokenExpiration"));
      }, 500);
    });
    assert(userId != null);
    assert(token != null);
    assert(tokenExpiration != null);
    AuthPage.logOut();
  });

  it("should remove the userId, token, and tokenExpiration in local storage upon log out", () => {
    AuthPage.logIn("test@test.com", "password");
    const userId = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("userId"));
      }, 500);
    });
    const token = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("token"));
      }, 500);
    });
    const tokenExpiration = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage.getItem("tokenExpiration"));
      }, 500);
    });
    assert(userId != null);
    assert(token != null);
    assert(tokenExpiration != null);
    AuthPage.logOut();
    const localStorage = browser.executeAsync(function(done) {
      setTimeout(() => {
        done(window.localStorage);
      }, 500);
    });
    assert.equal(localStorage.length, 0);
  });

  it("should not log in the user when an unrecognized email is used", () => {
    AuthPage.logIn("invalid@test.com", "password");
    const error = AuthPage.getAuthError().getText();
    assert.equal(error, "AUTH ERROR: EMAIL_NOT_FOUND");
  });

  it("should not log in the user when an invalid password is used", () => {
    AuthPage.logIn("test@test.com", "invalid");
    assert.equal(
      AuthPage.getAuthError().getText(),
      "AUTH ERROR: INVALID_PASSWORD"
    );
  });

  it("should require a valid email and will give appropriate error message otherwise", () => {
    AuthPage.signIn().click();
    AuthPage.getEmailField().setValue("test");
    assert.equal(AuthPage.getValidationError().isDisplayed(), true);
    assert.equal(
      AuthPage.getValidationError().getText(),
      "PLEASE ENTER A VALID EMAIL"
    );
    AuthPage.getEmailField().setValue("test@test");
    assert.equal(AuthPage.getValidationError().isDisplayed(), true);
    AuthPage.getEmailField().setValue("test@test.");
    assert.equal(AuthPage.getValidationError().isDisplayed(), true);
    AuthPage.getEmailField().setValue("test@test.com");
    assert.equal(AuthPage.getValidationError().isDisplayed(), false);
  });

  it("should require a valid password and will give appropriate error message otherwise", () => {
    AuthPage.signIn().click();
    AuthPage.getPasswordField().setValue("passwor");
    assert.equal(AuthPage.getValidationError().isDisplayed(), true);
    assert.equal(
      AuthPage.getValidationError().getText(),
      "PLEASE ENTER A VALID PASSWORD"
    );
    AuthPage.getPasswordField().setValue("password");
    assert.equal(AuthPage.getValidationError().isDisplayed(), false);
  });
});
