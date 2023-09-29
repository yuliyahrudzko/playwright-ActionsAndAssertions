const { test, expect } = require('@playwright/test');

test('Test actions and assertions. blur()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/webtables`);

  await page.locator('#searchBox').fill('test');

  await page.locator('#searchBox').blur();

  //в каких ситуациях нужно использовать blur()?
})