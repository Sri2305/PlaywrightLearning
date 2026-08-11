import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await test.step('Goto GitHub', async () => {
  await page.goto('https://github.com/');
  });
  await test.step('Enter username and password', async () => {
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).click();
  await page.getByRole('textbox', { name: 'Username or email address' }).fill('testertalk');
  await page.getByRole('textbox', { name: 'Username or email address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('testertalk');
  });

  await test.step('Click Sign in button', async () => {
  await page.getByRole('button', { name: 'Sign in', exact: true }).click();
  });
  await test.step('Verify error message', async () => {
  await expect(page.getByRole('alert')).toContainText('Incorrect username or password.');
  });
});