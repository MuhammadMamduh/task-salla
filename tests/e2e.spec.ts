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
});

test('TC_1 | ADD Artwork and Verify its ADDED', async ({ page }) => {

  // initialize
  const mainMenu = new MainMenu(page);
  const artsworkPage = new ArtsworksPage(page);
  const addArtworksPage = new AddArtworksPage(page);
  let artworkTitle: string = faker.lorem.words({ min: 1, max: 3 });
  
  // steps
  await mainMenu.goToArtworksPage();
  await artsworkPage.goToAddArtworkPage();
  await addArtworksPage.createArtwork(artworkTitle, 100);
  // verify
  await artsworkPage.verifyArtworkTitle(artworkTitle);
});

test('TC_2 | ADD Review & Verify its ADDED', async ({ page }) => {

  // initialize
  const mainMenu = new MainMenu(page);
  const artsworkPage = new ArtsworksPage(page);
  const artworkDetailsPage = new ArtworkDetailsPage(page);
  let reviewTitle: string = faker.word.words({ count: { min: 1, max: 3 }});
  let reviewDetails: string = faker.word.words({ count: { min: 5, max: 20 } });

  // steps
  await mainMenu.goToArtworksPage();
  await artsworkPage.openArtworkAtIndex(0);
  await artworkDetailsPage.addReview(reviewTitle, reviewDetails);

  // verify
  await artworkDetailsPage.verifyReview(reviewTitle, reviewDetails);
});
