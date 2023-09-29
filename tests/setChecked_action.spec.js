const { test, expect } = require('@playwright/test');

test('Test actions and assertions. setChecked()... for checkbox element', async ({page}) => {
  await page.goto(`https://demoqa.com/checkbox`);

  await page.locator('//*[@id="tree-node"]/ol/li/span/button[@title="Toggle"]').click();

  await expect(page.locator('[for="tree-node-desktop"] .rct-checkbox')).toBeVisible();

  await page.locator('[for="tree-node-desktop"] .rct-checkbox').setChecked(true);

  await page.locator('[for="tree-node-desktop"] .rct-checkbox').check();

  await page.locator('//*/li/ol/li[1]/span/button[@title="Toggle"]').click();

  await expect(page.locator('[for="tree-node-notes"] .rct-checkbox')).toBeChecked();

  await expect(page.locator('[for="tree-node-commands"] .rct-checkbox')).toBeChecked();

  await expect(page.locator('#result span')).toHaveText(['You have selected :', 'desktop', 'notes', 'commands']);

  await page.locator('[for="tree-node-commands"] .rct-checkbox').setChecked(false);

  await expect(page.locator('#result span')).toHaveText(['You have selected :',  'notes']);
})

test('Test actions and assertions. setChecked()... for radio button element', async ({page}) => {
  await page.goto(`https://demoqa.com/radio-button`);

  await expect(page.locator('.custom-radio [for="yesRadio"]')).toBeVisible();

  await page.locator('.custom-radio [for="yesRadio"]').check();

  await expect(page.locator('.custom-radio [for="yesRadio"]')).toBeChecked();

  await expect(page.locator('.text-success')).toHaveText(['Yes']);

  await expect(page.locator('.custom-radio [for="noRadio"]')).toBeDisabled()

  await expect(page.locator('#submit')).toBeEnabled();
})