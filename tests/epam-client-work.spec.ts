import { test, expect } from '@playwright/test';

test('EPAM - Client Work navigation and verification', async ({ page }) => {
  // a. Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // b. Select "Services" from the header menu
  // Hover over the header to reveal menu if necessary and click Services
  const services = page.getByRole('link', { name: /Services/i });
  await services.hover();
  await services.click();

  // c. Click the "Explore Our Client Work" link.
  const explore = page.getByRole('link', { name: /Explore our client work/i });
  await explore.click();

  // d. Verify that the "Client Work" text is visible on the page.
  await expect(page.getByText(/Client Work/i)).toBeVisible();
});