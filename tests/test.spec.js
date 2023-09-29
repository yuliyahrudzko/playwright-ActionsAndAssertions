const { test, expect } = require('@playwright/test');

test('Test actions and assertions. setChecked()... for checkbox element', async ({page}) => {
  await page.goto(`https://demoqa.com/checkbox`);

  await page.locator('//*[@id="tree-node"]/ol/li/span/button[@title="Toggle"]').click();

  await page.locator('[for="tree-node-desktop"] .rct-checkbox').setChecked(true);
})

test('Test actions and assertions. check()... for checkbox element', async ({page}) => {
  await page.goto(`https://demoqa.com/checkbox`);

  await page.locator('//*[@id="tree-node"]/ol/li/span/button[@title="Toggle"]').click();

  await page.locator('[for="tree-node-desktop"] .rct-checkbox').check();
})