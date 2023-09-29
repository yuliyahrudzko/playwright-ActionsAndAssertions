const { test, expect } = require('@playwright/test');

test('Test actions and assertions. innerText()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/alerts`);

  await expect(page).toHaveTitle('DEMOQA');

  await expect(page).toHaveURL('https://demoqa.com/alerts')

  let textArray = await page.locator('#javascriptAlertsWrapper> div > div:nth-child(1)').allInnerTexts();

  console.log(textArray);

  let textString = await page.locator('#javascriptAlertsWrapper> div:nth-child(1) > div:nth-child(1)').innerText();

  console.log(textString);
})