require('babel-core/register');

const browsers = {
    firefox: {
        name: 'Firefox',
        browserName: 'firefox'
    },
    chrome: {
        name: 'Chrome',
        browserName: 'chrome'
    }
};

exports.config = {
    seleniumServerJar: './node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.48.2.jar',
    baseUrl: 'http://' + (process.env.HOST || 'localhost') + ':' + (process.env.PORT || '8080'),
    specs: ['./e2e/**/*.spec.js'],
};

if (process.argv[3] === '--chrome') {
    exports.config.capabilities = browsers.chrome;
} else {
    exports.config.capabilities = browsers.firefox;
}
