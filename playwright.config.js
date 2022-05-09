// @ts-nocheck

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: 'specs',
  forbidOnly: !!process.env.CI,
  timeout:30000,
  globalTimeout: 60000,
  timeout: 5 * 60 * 1000,
  use: {
    baseURL: ' https://spacee.com/',
    browserName: 'chromium',
    //browserName: 'firefox',
    //browserName: 'webkit',
    actionTimeout:200000,
    headless: false,
  },
  expect: {
    timeout: 10000,   // <---------
  },
};

module.exports = config;