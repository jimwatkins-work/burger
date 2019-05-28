import Page from "./page.page";

class AuthPage extends Page {
  getAuthError() {
    return $("p*=AUTH");
  }

  getAuthCTAs() {
    return $$(".Button_Button__1UPhn ");
  }

  getEmailField() {
    return $("[placeholder=EMAIL]");
  }

  getPasswordField() {
    return $("[placeholder=PASSWORD]");
  }

  getValidationError() {
    return $(".Input_ValidationError__2SPi_");
  }

  logIn() {
    super.logIn();
  }

  logout() {
    super.logout();
  }

  signIn() {
    return $("a=SIGN IN");
  }

  signUp = (email, password) => {
    if (email === "test@test.com") {
      email = email;
    } else {
      email = email + "@" + Math.ceil(Math.random() * 10000) + ".com";
    }
    this.getAuthCTAs()[1].click();
    this.getEmailField().setValue(email);
    this.getPasswordField().setValue(password);
    this.getAuthCTAs()[0].click();
  };
}

export default new AuthPage();
