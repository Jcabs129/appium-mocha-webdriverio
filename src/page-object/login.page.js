const Page = require('./page');

  class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputEmail () { return $('[class="mdc-text-field__input"]') }
    get inputPassword () { return $('#password-field:first-child') }
    get loginBtn () { return $('[id="loginButton"]') }
    get emailValidationText() { return $('[class="login-error"]') }
    get forgotBtn() { return $('#resetPasswordButton > a') }
    get inputForgotEmail() { return $('[id="emailInput"]') }
    get resetBtn() { return $('[id="emailPasswordResetLinkBtn"]') }
    get passwordSelector() { return $('#password-field":first-child') }
    get emailSelector() { return $('[id="login-field"]') }
    get logo() { return $('[class="logo"]') }
    get appleLink() { return $('body > app-root > div > div > div:nth-child(2) > app-login > div.download-app > div > a:nth-child(1) > img')}
    get googleLink() { return $(' body > app-root > div > div > div:nth-child(2) > app-login > div.download-app > div > a:nth-child(2) > img')}


    
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (inputEmail, password) {
        this.inputEmail.setValue(inputEmail);
        this.inputPassword.setValue(password);
        this.loginBtn.click(); 
    }

    ////////////////////////
    
    emailElem(email) {
      this.emailSelector.setValue(email)
    }

    passwordElem() {
      this.passwordSelector.doubleClick()
    }

    appleBtn() {
      this.appleLink.click()
    }

    googleBtn() {
      this.googleLink.click()
    }
    ////////////////////////

    emailErrorValidation() {
      this.emailValidationText.getValue('Email and password combination not recognised');
    }

    forgotPassLink() {
      this.forgotBtn.click();
    }

    forgotEmail(emailForgot) {
      this.inputForgotEmail.setValue(emailForgot);
    }

    resetEmailBtn() {
      this.resetBtn;
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();