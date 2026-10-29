import SignUpPage from "./page/signUpPage";
import userData from "../fixtures/user-data.json";

const signUpPage = new SignUpPage();

describe("Register Scenarios", () => {
  beforeEach(() => {
    signUpPage.accessSignUpPage();
  });

  it("Register new user - Success", () => {
    signUpPage.registerWithAnyUser(
      userData.userRegisterSuccess.name,
      userData.userRegisterSuccess.email,
      userData.userRegisterSuccess.phone,
      userData.userRegisterSuccess.password,
      userData.userRegisterSuccess.confirmPassword,
    );
    // Nota: O clique no reCAPTCHA requer bypass de ambiente para submissão final
    // signUpPage.clickCaptcha();
    // signUpPage.clickSubmitButton();
  });

  it("Register new user - Fail: Passwords do not match", () => {
    signUpPage.registerWithAnyUser(
      userData.userRegisterFail.name,
      userData.userRegisterFail.email,
      userData.userRegisterFail.phone,
      userData.userRegisterFail.password,
      userData.userRegisterFail.confirmPassword,
    );
    signUpPage.clickSubmitButton();
    signUpPage.checkAccessInvalid();
  });

  it("Register new user - Fail: Email field is empty", () => {
    signUpPage.registerWithAnyUser(
      userData.userRegisterBlankEmail.name,
      userData.userRegisterBlankEmail.email,
      userData.userRegisterBlankEmail.phone,
      userData.userRegisterBlankEmail.password,
      userData.userRegisterBlankEmail.confirmPassword,
    );
    signUpPage.clickSubmitButton();
    signUpPage.checkEmailRequired();
  });
});
