import { test, expect } from '@playwright/test';
test('first test', async ({ page }) => {
    await page.goto('https://google.com');
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright by Srilakshmi');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'sri lakshmi - Testing, Playwright, Javascript, AIO, manual ...' }).first().click();
    await expect(page).toHaveTitle('Sign Up | LinkedIn');
await page.getByRole('button', { name: 'Agree & Join' }).click();
await expect(page.getByRole('button', { name: 'Agree & Join' })).toBeVisible();
}); 