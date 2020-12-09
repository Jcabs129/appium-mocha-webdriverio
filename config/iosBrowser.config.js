const {config} = require('./wdio.conf');
const iosInfo = require('./ios.info');

// appium capabilities
config.capabilities = [
    {
        platformName: 'iOS',
        automationName: 'XCUITest',
        udid: '2508910B-6792-46C0-B524-CDE58AA84664',
        browserName: 'Safari',
        maxInstances: 1,
        deviceName: 'iPhone 12 mini',
        platformVersion:'13',



        // udid: '2508910B-6792-46C0-B524-CDE58AA84664',
        // // For W3C the appium capabilities need to have an extension prefix
        // // This is `appium:` for all Appium Capabilities which can be found here
        // // http://appium.io/docs/en/writing-running-appium/caps/
        // 'appium:deviceName': 'iPhone 12 mini',
        // 'appium:platformVersion': '13',
        // 'appium:browserName': 'Safari',
        // 'appium:orientation': 'PORTRAIT',
        // // `automationName` will be mandatory, see
        // // https://github.com/appium/appium/releases/tag/v1.13.0
        // // 'appium:automationName': 'XCUITest',
        // // The path to the app
        // // Read the reset strategies very well, they differ per platform, see
        // // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        // 'appium:noReset': true,
        // 'appium:newCommandTimeout': 240,
    },
    
];

config.specs = [
    // './src/specs/mobileBrowser/**/*.js',
    './src/specs/mobileBrowser/**/dojo.invalid.spec.js'
    // './tests/specs/mobileBrowser/**/*.js'
];

exports.config = config;
