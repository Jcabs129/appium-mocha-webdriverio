// import Page from './page';

export default class LoginPage  {

    /**
     * define elements
     */
    get emailfield () { return $('[class="mdc-text-field__input"]'); }
    get password () { return $('#password'); }
    get submitButton () { return $('#login button[type=submit]'); }
    get flash () { return $('#flash'); }

    /**
     * define or overwrite page methods
     */
    open () {
        super.open('login');
    }

    submit () {
        browser.hideKeyboard();
        this.submitButton.click();
    }
}


// const { browserName } = require('../../config/ios.info');

// export default class LoginPage {
//   constructor() {
//     this.getTitle = '[class="logo"]'
//   }

//   getDojoTitle() {

//   }
// }


// class LoginPage {
//     constructor() {
//         this.getTitle = '[class="logo"]'
//         this.emailField = $('id=login-field')
//     }

//     launchDojo() {
//       ActionHelper.launchBrowserUrl(this.getObjectLocator().googleUrl);
//       ActionHelper.pause(2);
//   }

//   getDojoTitle() {
//       return ActionHelper.getTitle();
//   }

//   getEmailField() {
//     return this.emailField = $('id=login-field')
//   }
// }



// module.exports = new LoginPage();