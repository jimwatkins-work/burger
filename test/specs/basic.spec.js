const assert = require("assert");

describe("webdriver.io page", () => {
  it("should have the right title", () => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    const title = browser.getTitle();
    assert.equal(title, "MyBurger");
  });
});
