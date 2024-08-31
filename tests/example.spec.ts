import { test, expect } from '@playwright/test';
import { ArtsworksPage } from '../pages/ArtworksPage';

test.only('demo', async ({ page }) => {
  const artsworkPage = new ArtsworksPage(page);

  await artsworkPage.visit();
  await artsworkPage.goToAddArtworkPage();
  await page.pause();
});

test('get started link', async ({ page }) => {

  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
