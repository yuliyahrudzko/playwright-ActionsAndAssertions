const { test, expect } = require('@playwright/test');
const moment = require('moment');

test('Test actions and assertions. press()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/login`);

  await page.locator('#userName').fill('Yuliya');

  await page.locator('#userName').press('Enter');

  await expect(page.locator('#password')).toHaveClass(/is-invalid/);

  await page.locator('#password').fill('Zhuk');

  await page.locator('#password').press('Enter');

  await expect(page.locator('#name')).toHaveText('Invalid username or password!');

  await expect(page.locator('#userName')).not.toBeEmpty();

  //реальные примеры использования press()?
})