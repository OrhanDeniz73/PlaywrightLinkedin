import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.yahoo.com/');
  await page.getByRole('button', { name: 'Alles accepteren' }).click();
  await page.locator('#ybar-l1-nav').getByRole('link', { name: 'News' }).click();
  await page.getByRole('link', { name: 'Debra Messing ditches' }).click();
  await expect(page.locator('#seamless-list')).toContainText('Debra Messing has had enough with the state of New York.');
});