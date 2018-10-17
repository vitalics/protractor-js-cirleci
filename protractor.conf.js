exports.config = {
    specs: ['e2e/*.js'],
    baseUrl: 'https://epam.com',
    maxSessions: 1,
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ['--headless']
            }
        }
    ],
    directConnect: true,

    onPrepare: () => {
        browser.waitForAngularEnabled(false);
    },
};
