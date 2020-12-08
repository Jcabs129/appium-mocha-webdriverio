module.exports = {
    platformName: 'iOS',
    automationName: 'XCUITest',
    deviceName: process.env.IOS_DEVICE_NAME || 'iPhone 12 mini',
    platformVersion: process.env.IOS_PLATFORM_VERSION || '13',
    browserName: 'Safari'

    // deviceName: '', // pass the udid or device name
    // platformVersion: '', // pass the platform version
    // app: 'com.apple.Preferences'
};
