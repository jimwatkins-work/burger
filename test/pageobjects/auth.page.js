import Page from "./page.page";

class AuthPage extends Page {
  getAuthError() {
    return $("p*=AUTH");
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

  login() {
    super.login();
  }

  logout() {
    super.logout();
  }

  signIn() {
    return $("a=SIGN IN");
  }
}

export default new AuthPage();
