const LoginPage = require('./../../page-object/login.page');
// const SecurePage = require('../pageobjects/secure.page');

describe('My Login application', () => {
  beforeEach(() => {
    LoginPage.open();
    expect(browser).toHaveTitle('Dojo')   // Valdiation
    // expect(browser).toHaveUrlContaining('/login')   // Valdiation
  })

    it('should not be able to login with invalid email credentials', () => {
        LoginPage.login('jc@test.com', 'SuperSecretPassword!');
        LoginPage.emailErrorValidation()
    });
  //   it('should not be able to login with invalid email credentials', () => {
  //     LoginPage.login('jc@test.com');
  //     LoginPage.passwordElem()
  //     LoginPage.logoElem()
      
  // });
});

