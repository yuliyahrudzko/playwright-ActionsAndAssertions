const { test, expect } = require('@playwright/test');

test('Test actions and assertions. count()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/radio-button`);

  let count = await page.locator('.custom-radio').count()

  console.log(count);
})