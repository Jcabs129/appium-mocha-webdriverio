const assert = require('assert');
import LoginPage from '../../page-object/dojo.page'



const loginPage = new LoginPage();

describe('dojo login browser', () => {
    it('should have the right title', () => {
        browser.url('https://account.dojo.tech/login')
        assert.equal(loginPage.getTitle);
    })
})
