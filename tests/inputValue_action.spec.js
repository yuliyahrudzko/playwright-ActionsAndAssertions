const { test, expect } = require('@playwright/test');
const moment = require('moment');

test('Test actions and assertions. inputValue()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/automation-practice-form`);

  let dateOfBirth = await page.locator('#dateOfBirthInput').inputValue();

  expect(dateOfBirth).toBe(moment().format('D MMM YYYY'));
})