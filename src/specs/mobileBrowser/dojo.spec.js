const assert = require('assert');
const LoginPage = require('../../page-object/dojo.page')

// const dojoPage = new DojoPage();
// const LoginPage = require('./../../page-object/dojo.page');


describe('dojo login browser', () => {
    it('should have the right title', () => {
      
      const emailField = $('[class="mdc-text-field__input"]')
      const passwordField = $('#password-field:first-child')
      const loginBtn = $('[id="loginButton"]')
      const emailValidation = $('[class="login-error"]')
        browser.url('https://account.dojo.tech/')
        expect(browser).toHaveTitle('Dojo')
        // expect(browser).toHaveUrl('tech')
        // emailField.click()
        // LoginPage.emailfield.setValue('a')
        emailField.setValue('j@gmail.com')
        passwordField.setValue('hahah')
        loginBtn.click()
        emailValidation.getValue('Email and password combination not recognised')
    })
})
