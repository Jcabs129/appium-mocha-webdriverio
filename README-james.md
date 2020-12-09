## Run scripts
`npx wdio wdio.conf.js`

`npx wdio wdio.ios.conf.js`

`npm run iosBrowser`


## Installation

## Setup
- navigate to root /appium-mocha
- npm install
- run `appium-doctor`
- open Xcode
- run `xcrun simctl list` full list of ios device that are already installed
- open appium: Check port when running appium. must be the same as specified on config /config/wdio.conf.js

### Appium
all scripts have been added on package.json under `scripts{}`. i have only created test scripts for ios browser safari so the script to run is `npm run iosBrowser`

- navigate to root /appium-mocha
- `npm run iosBrowser` 

`xcrun simctl list`


### Boiler-plate
https://github.com/Arjun-Ar91/WebdriverIO-V6-appium-mocha-boilerplate

### Useful material
http://appium.io/docs/en/writing-running-appium/running-tests/

https://www.npmjs.com/package/assert

https://webdriver.io/docs/babel.html

https://www.lambdatest.com/blog/how-webdriverio-uses-selenium-locators/