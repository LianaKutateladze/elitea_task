import { test, expect } from '@playwright/test';

test('EPAM - navigate to Client Work via Services', async ({ page }) => {
  await page.goto('https://www.epam.com/');

  // Click Services in the header
  await page.getByRole('link', { name: /Services/i }).click();
  await page.waitForLoadState('networkidle');

  // Click Explore Our Client Work
  await page.getByRole('link', { name: /Explore Our Client Work/i }).click();
  await page.waitForLoadState('networkidle');

  // Verify Client Work text is visible
  await expect(page.getByText(/Client Work/i)).toBeVisible();
});