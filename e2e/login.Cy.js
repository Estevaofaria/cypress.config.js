import SignInPage from "./page/signInPage";
import userData from "../fixtures/user-data.json";

const signInPage = new SignInPage();

describe("Login Scenarios", () => {
  beforeEach(() => {
    signInPage.accessSignInPage();
  });

  it("Login user credentials valid - Success", () => {
    signInPage.loginWithAnyUser(
      userData.userLoginSuccess.email,
      userData.userLoginSuccess.password,
    );
    // Nota: O clique no reCAPTCHA requer bypass de ambiente para submissão final
    // signInPage.clickCaptcha();
    // signInPage.clickSubmitButton();
  });

  it("Login user password invalid - Fail", () => {
    signInPage.loginWithAnyUser(
      userData.userLoginInvalidPassword.email,
      userData.userLoginInvalidPassword.password,
    );
    signInPage.clickSubmitButton();
    signInPage.checkInvalidCredentials();
  });

  it("Login user email invalid - Fail", () => {
    signInPage.loginWithAnyUser(
      userData.userLoginInvalidEmail.email,
      userData.userLoginInvalidEmail.password,
    );
    signInPage.clickSubmitButton();
    signInPage.checkInvalidCredentials();
  });
});
