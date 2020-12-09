const assert = require('assert');
const LoginPage = require('../../page-object/dojo.page')

// const dojoPage = new DojoPage();
// const LoginPage = require('./../../page-object/dojo.page');


describe('dojo login browser', () => {
  beforeEach(() => {
    browser.url('https://account.dojo.tech/')
    expect(browser).toHaveTitle('Dojo')
    // expect(browser).toHaveUrl('tech')
  })
    it('Negative test - unvalid email must not be able to login', () => {
      const emailField = $('[class="mdc-text-field__input"]')
      const passwordField = $('#password-field:first-child')
      const loginBtn = $('[id="loginButton"]')
      const emailValidation = $('[class="login-error"]')
  
        emailField.setValue('j@gmail.com')
        passwordField.setValue('hahah')
        loginBtn.click()
        emailValidation.getValue('Email and password combination not recognised')
    })
})
