import test from '@playwright/test';
test('test', async ({ page }) => {
  await test.step('Goto Website ', async () => {    
    await page.goto('https://onlinedataformatter.vercel.app/');
  });
  await test.step('Test the Locators', async () => {
        await page.locator('//a[@data-type="compare"]').first().click();//xapth
        await page.goBack();
        await page.locator('a[data-type="convert"]').first().click();//css

  });
});

