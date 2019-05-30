import AuthPage from "../pageobjects/auth.page";
const assert = require("assert");

describe("auth page", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com/signin");
    browser.pause(500);
  });

  it("should set a userId, token, and tokenExpiration in local storage upon successful authorization", () => {
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
    AuthPage.getPasswordField().setValue("passwor");
    assert.equal(AuthPage.getValidationError().isDisplayed(), true);
    assert.equal(
      AuthPage.getValidationError().getText(),
      "PLEASE ENTER A VALID PASSWORD"
    );
    AuthPage.getPasswordField().setValue("password");
    assert.equal(AuthPage.getValidationError().isDisplayed(), false);
  });

  it("should show a 'Sign In' CTA inititally, and a 'Sign Up' CTA if 'Switch To Sign Up' button is selected", () => {
    browser.pause(100);
    assert.equal(AuthPage.getAuthCTAs()[0].getText(), "SIGN IN");
    assert.equal(AuthPage.getAuthCTAs()[1].getText(), "SWITCH TO SIGN UP");
    AuthPage.getAuthCTAs()[1].click();
    browser.pause(100);
    assert.equal(AuthPage.getAuthCTAs()[0].getText(), "SIGN UP");
    assert.equal(AuthPage.getAuthCTAs()[1].getText(), "SWITCH TO SIGN IN");
  });

  it("should not sign up a user in which the email already exists", () => {
    AuthPage.signUp("test@test.com", "password");
    const error = AuthPage.getAuthError().getText();
    assert.equal(error, "AUTH ERROR: EMAIL_EXISTS");
  });

  it("should log user in by setting a userId, token, and tokenExpiration in local storage, upon successful sign up", () => {
    AuthPage.signUp("newUser", "password");
    browser.pause(500);
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
});
