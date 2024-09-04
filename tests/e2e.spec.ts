import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MainMenu } from '../pages/MainMenu';
import { LoginPage } from '../pages/LoginPage';
import { ArtsworksPage } from '../pages/ArtworksPage';
import { AddArtworksPage } from '../pages/AddArtworksPage';
import { ArtworkDetailsPage } from '../pages/ArtworkDetailsPage';
import { faker } from '@faker-js/faker';

test.beforeEach(async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const mainMenu = new MainMenu(page);

  await homePage.visit();
  await mainMenu.goToLoginPage();
  await loginPage.login("jamiwa8396@tospage.com", "nhk9dad2EQW!xae_bpm");
  await page.waitForURL('https://staging.alt.art/');
});

let artworkTitle: string = faker.lorem.words({ min: 1, max: 3 });
test('TC_1 | ADD Artwork and Verify its ADDED', async ({ page }, testInfo) => {

  // initialize
  const mainMenu = new MainMenu(page);
  const artsworkPage = new ArtsworksPage(page);
  const addArtworksPage = new AddArtworksPage(page);
  
  
  // steps
  await mainMenu.goToArtworksPage();
  await artsworkPage.goToAddArtworkPage();
  await addArtworksPage.createArtwork(artworkTitle, 100);
  // verify
  await artsworkPage.verifyArtworkCreation(artworkTitle);
  const screenshot = await page.screenshot({ path: './screenshots/' + testInfo.title + '_screenshot.png', fullPage: true });
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' })
});

test('TC_2 | ADD Review & Verify its ADDED', async ({ page }, testInfo) => {

  // INITIALIZE:
  // ============
  const mainMenu = new MainMenu(page);
  const artsworkPage = new ArtsworksPage(page);
  const artworkDetailsPage = new ArtworkDetailsPage(page);
  let reviewTitle: string = faker.word.words({ count: { min: 1, max: 3 }});
  let reviewDetails: string = faker.word.words({ count: { min: 5, max: 20 } });

  // STEPS:
  // =======
  // (1) Open the Artworks List page
  await mainMenu.goToArtworksPage();

  // (2) Open the last Artwork Details page (the Artwork that we have just added)
  await artsworkPage.openArtworkAtIndex(0);
  await artsworkPage.openArtworkAtByTitle(artworkTitle);
  // (3) Add a review
  await artworkDetailsPage.addReview(reviewTitle, reviewDetails);

  // VERIFY THAT: the review was added (by comparing the review we added with the last review)
  await artworkDetailsPage.verifyReview(reviewTitle, reviewDetails);
  const screenshot = await page.screenshot({ path: './screenshots/' + testInfo.title + '_screenshot.png', fullPage: true });
  await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' })
});
