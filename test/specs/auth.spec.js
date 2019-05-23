import AuthPage from "../pageobjects/auth.page";
const assert = require("assert");

describe("auth page", () => {
  beforeEach(() => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    browser.pause(100);
  });

  it("should set a userId, token, and tokenExpiration in local storage upon authorization", () => {
    AuthPage.logIn();
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
    AuthPage.logIn();
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
});
