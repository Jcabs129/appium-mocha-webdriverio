const assert = require('assert');

// const dojoPage = new DojoPage();

const LoginPage = require('./../../page-object/dojo.page');

describe('dojo login browser', () => {
    it('should have the right title', () => {
        browser.url('https://account.dojo.tech/')
        // assert.equal(LoginPage.getTitle, 'Dojo')
        // .toHaveTitle('Dojo')
        expect(browser).toHaveTitle('Dojo')
        expect(browser).toHaveUrl('tech')
        // expect($button).toBeDisplayed()

    })
})
