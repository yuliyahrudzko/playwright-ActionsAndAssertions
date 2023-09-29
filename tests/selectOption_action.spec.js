const { test, expect } = require('@playwright/test');

test('Test actions and assertions. selectOption()...(page 1)', async ({page}) => {
    await page.goto(`https://demoqa.com/webtables`);
  
    await page.locator('[aria-label="rows per page"]').selectOption('5');
  
    await expect(page
      .locator('.rt-tbody > .rt-tr-group'))
      .toHaveCount(5);

})

test('Test actions and assertions. selectOption()...{page 2)', async ({page}) => {
  await page.goto(`https://demoqa.com/select-menu`);

  // Single selection matching the label
  await page.locator('#oldSelectMenu').selectOption({label: 'Green'});

  // Single selection matching the value
  await page.locator('#oldSelectMenu').selectOption('3');

  await page.locator('#cars').selectOption({ label: 'Opel' });

})