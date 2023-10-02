const { test, expect } = require('@playwright/test');

test('Test actions and assertions. dragTo...(page 1)', async ({page}) => {
  await page.goto(`https://demoqa.com/droppable`);

  await expect(page.locator('.simple-drop-container #droppable')).toHaveText('Drop here');

  await page.locator('#draggable').dragTo(page.locator('.simple-drop-container #droppable'));

  await expect(page.locator('.simple-drop-container #droppable')).toHaveText('Dropped!');
})

test('Test actions and assertions. dragTo...(page 2)', async ({page}) => {
  await page.goto(`https://demoqa.com/droppable`);

  await page.locator('#droppableExample-tab-accept').click();
  
  await expect(page.locator('.accept-drop-container #droppable')).toHaveText('Drop here');

  //await page.locator('#notAcceptable').dragTo(page.locator('.accept-drop-container #droppable'));

  await expect(page.locator('.accept-drop-container #droppable')).toHaveText('Drop here');
  
   await page.locator('#acceptable').dragTo(page.locator('.accept-drop-container #droppable'));
  
  await expect(page.locator('.accept-drop-container #droppable')).toHaveText('Dropped!');

  await expect(page.locator('.accept-drop-container #droppable')).toHaveClass(/ui-state-highlight/);
})

test('Test actions and assertions. dragTo...(page 3)', async ({page}) => {
  await page.goto(`https://demoqa.com/droppable`);

  await page.locator('#droppableExample-tab-preventPropogation').click();
  
  await expect(page.locator('#notGreedyDropBox > p')).toHaveText('Outer droppable');

  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Inner droppable (not greedy)');

  await page.locator('#dragBox').dragTo(page.locator('#notGreedyInnerDropBox > p'));

  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Dropped!');

  await expect(page.locator('#notGreedyInnerDropBox > p')).toHaveText('Dropped!');

  await expect(page.locator('#greedyDropBox > p')).toHaveText('Outer droppable');

  await expect(page.locator('#greedyDropBoxInner > p')).toHaveText('Inner droppable (greedy)');

  await page.locator('#dragBox').dragTo(page.locator('#greedyDropBoxInner > p'));

  await expect(page.locator('#greedyDropBox > p')).toHaveText('Outer droppable');

  await expect(page.locator('#greedyDropBoxInner > p')).toHaveText('Dropped!');

  await page.locator('#dragBox').dragTo(page.locator('#greedyDropBox > p'));

  await expect(page.locator('#greedyDropBox > p')).toHaveText('Dropped!');
})




