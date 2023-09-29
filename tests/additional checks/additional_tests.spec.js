const { test, expect } = require('@playwright/test');

test('Test actions and assertions. Work with buttons', async ({page}) => {
  await page.goto(`https://demoqa.com/dynamic-properties`);

  await expect(page.locator('#enableAfter')).toBeDisabled();

  await expect(page.locator('#enableAfter')).toBeEnabled({ timeout: 5000 });

  await expect(page.locator('#visibleAfter')).toBeHidden();
})