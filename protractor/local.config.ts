import { browser, Config } from 'protractor'

export const config: Config = {
  framework: 'mocha',
  specs: ['../test/ui/**/*.spec.ts'],
  seleniumAddress: 'http://0.0.0.0:4444/',
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false)
    await browser.manage().window().maximize()
    await browser.manage().timeouts().implicitlyWait(0)
  },
  mochaOpts: {
    reporter: 'mochawesome-screenshots',
    reporterOptions: {
      reportName: 'atsea',
      multiReport: true,
    },
    timeout: 30000,
  },
  multiCapabilities: [
    {
      browserName: 'chrome',
      name: 'chrome-tests',
      shardTestFiles: true,
      maxInstances: 1,
      chromeOptions: {
        args: [
          '--disable-popup-blocking',
          '--no-default-browser-check',
          '--ignore-certificate-errors',
        ],
      },
    },
    {
      browserName: 'firefox',
      name: 'firefox-tests',
      shardTestFiles: true,
      maxInstances: 1,
      acceptInsecureCerts: true,
      'moz:firefoxOptions': {
        args: [],
      },
    },
  ],
}
