// const { browserName } = require('../../config/ios.info');

// export default class LoginPage {
//   constructor() {
//     this.getTitle = '[class="logo"]'
//   }

//   getDojoTitle() {

//   }
// }


class LoginPage {
    constructor() {
        this.getTitle = '[class="logo"]'
    }

    launchDojo() {
      ActionHelper.launchBrowserUrl(this.getObjectLocator().googleUrl);
      ActionHelper.pause(2);
  }

  getDojoTitle() {
      return ActionHelper.getTitle();
  }
}



module.exports = new LoginPage();