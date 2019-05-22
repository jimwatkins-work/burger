export default class Page {
  constructor() {
    this.title = "My Page";
  }

  getUrl = () => {
    browser.getUrl();
  };

  logIn = () => {
    const signIn = $("a=SIGN IN");
    const emailField = $("[placeholder=EMAIL]");
    const passwordField = $("[placeholder=PASSWORD]");
    const signInButton = $("button=SIGN IN");
    signIn.click();
    emailField.setValue("test@test.com");
    passwordField.setValue("password");
    signInButton.click();
  };

  logOut = () => {
    const signOut = $("a=SIGN OUT");
    signOut.click();
  };
}
