## Installation

### Setup
http://appium.io/docs/en/about-appium/getting-started/

1. navigate to root /appium-mocha
2. npm install
3. run `appium-doctor` - To verify that all of Appium's dependencies are met, you only need to install ios dependencies
5. run `xcrun simctl list` - see full list of ios devices that are already installed
6. open Xcode

note: you may need to update the 'udid' and the `platformName/Version` within the config folder. as explained above run `xcrun simctl list`;
`/iosBrowser.config.js`
`/iosBrowser.config.js`

### scripts
navigate to root /appium-mocha
`npm run iosBrowser`

`npm run ipadBrowser`

### webdriver.io - mocha + Appium
scripts have been added in package.json under 'scripts'. i have  created test scripts for ios browser safari and iPad browser safari so the script to run is `npm run iosBrowser`
`npm run ipadBrowser`

- navigate to root /appium-mocha
- `npm run iosBrowser` 

`xcrun simctl list`

### Directories/file added for test scripts
/config
iosBrowser.config.js
iPadBrowser.config.js

/src/page-object
login-page.js
page.js

/src/specs/mobilebrowser
invalidEmail.spec.js
mobileLink.spec.js
forgottenPassword.spec.js

### Boiler-plate
https://github.com/Arjun-Ar91/WebdriverIO-V6-appium-mocha-boilerplate

### Useful material
http://appium.io/docs/en/writing-running-appium/running-tests/

https://www.npmjs.com/package/assert

https://webdriver.io/docs/babel.html

https://www.lambdatest.com/blog/how-webdriverio-uses-selenium-locators/