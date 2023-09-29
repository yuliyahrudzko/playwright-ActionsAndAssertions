const { test, expect } = require('@playwright/test');
const exp = require('constants');
const moment = require('moment');

test('Test actions and assertions. getAttribute()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/radio-button`);

  let classValue = await page.locator('#yesRadio').getAttribute('class');

  await expect(page.locator('#impressiveRadio')).toHaveAttribute('class', classValue);
})