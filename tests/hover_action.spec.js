const { test, expect } = require('@playwright/test');

test('Test actions and assertions. hover()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/menu#`);

  await page.locator('#nav > li:nth-child(2)').hover();
  
  await expect(page.locator('#nav > li:nth-child(2) > ul > li:nth-child(3) > a')).toBeVisible();
  
  await page.locator('#nav > li:nth-child(2) > ul > li:nth-child(3) > a').hover();

  await expect(page.locator('#nav > li:nth-child(2) > ul > li:nth-child(3) > ul > li:nth-child(2) > a')).toBeVisible();
})