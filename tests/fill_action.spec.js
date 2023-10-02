const { test, expect } = require('@playwright/test');

test('Test actions and assertions. Fill()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/automation-practice-form`);

  await expect(page.getByPlaceholder('First Name')).toBeEditable();

  await page.getByPlaceholder('First Name').fill('Yuliya');

  await page.locator('#lastName').fill('Zhuk');

  await expect(page
    .locator('#lastName'))
    .toHaveAttribute('required', '');

  await expect(page.locator('#userNumber')).toHaveValue(/\d*/);

  await page.locator('#currentAddress').fill('Brest');

  await expect(page.locator('#city input')).toHaveJSProperty('disabled', true);

  await expect(page.locator('#city input')).toBeDisabled();
})

test('Test actions and assertions. Fill()...(page 2)', async ({page}) => {
  await page.goto(`https://demoqa.com/webtables`);

  await page.locator('#searchBox').fill('Cierra');

  await expect(page
    .locator('.rt-tbody > .rt-tr-group:nth-child(1)'))
    .toContainText('Cierra');
})