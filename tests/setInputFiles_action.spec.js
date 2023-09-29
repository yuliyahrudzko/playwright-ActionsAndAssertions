const { test, expect } = require('@playwright/test');
const path = require('path');

test('Test actions and assertions. setInputFiles()...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/upload-download`);

  let document = 'Test Document.pdf';
  let rootPath = "C:\\fakepath\\";

  await page.locator('#uploadFile').setInputFiles(path.join(__dirname, document));

  await expect(page.locator('#uploadedFilePath')).toHaveText(`${rootPath}${document}`)
})