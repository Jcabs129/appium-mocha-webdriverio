const LoginPage = require('./../../page-object/login.page');

describe('forgot your password page', () => {

  beforeEach(() => {
    browser.url('https://account.dojo.tech/')
    expect(browser).toHaveTitle('Dojo')
    // expect(browser).toHaveUrlContaining('/login')
  })
    it('naviagte to apple dojo page', () => {
      LoginPage.appleBtn()
    });
    it('naviagte to google dojo page', () => {
      LoginPage.googleBtn()
    });
});
