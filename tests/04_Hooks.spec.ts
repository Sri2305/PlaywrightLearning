import test from '@playwright/test';

test.beforeAll(async () => {
  console.log('Before All Tests');
});
  test.afterAll(async () => {
    console.log('After All Tests');
  });

test('test', async ({ page }) => {
  await test.step('Goto Website ', async () => {
    await page.goto('https://onlinedataformatter.vercel.app/');
  });

});