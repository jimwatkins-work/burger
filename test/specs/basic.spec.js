const assert = require("assert");

describe("website title", () => {
  it("should have the right title", () => {
    browser.url("https://burger-96b0e.firebaseapp.com");
    const title = browser.getTitle();
    assert.equal(title, "MyBurger");
  });
});
