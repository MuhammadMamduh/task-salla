import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MainMenu } from '../pages/MainMenu';
import { LoginPage } from '../pages/LoginPage';
import { ArtsworksPage } from '../pages/ArtworksPage';
import { AddArtworksPage } from '../pages/AddArtworksPage';
import { faker } from '@faker-js/faker';


test('Create Artwork and Verify its Creation', async ({ page }) => {
  let artworkTitle: string = faker.lorem.words({ min: 1, max: 3 });
  
  const homePage = new HomePage(page);
  const mainMenu = new MainMenu(page);
  const loginPage = new LoginPage(page);
  const artsworkPage = new ArtsworksPage(page);
  const addArtworksPage = new AddArtworksPage(page);
  

  await homePage.visit();
  await mainMenu.goToLoginPage();
  await loginPage.login("jamiwa8396@tospage.com", "nhk9dad2EQW!xae_bpm");
  await mainMenu.goToArtworksPage();
  await artsworkPage.goToAddArtworkPage();
  await addArtworksPage.createArtwork(artworkTitle, 100);

  await artsworkPage.verifyArtworkTitle(artworkTitle);
  await artsworkPage.openArtworkAtIndex(0);
  // await page.pause();

});

// test('Add Review', async ({ page }) => {
//   const homePage = new HomePage(page);
//   const mainMenu = new MainMenu(page);
//   const loginPage = new LoginPage(page);
//   const artsworkPage = new ArtsworksPage(page);

//   await homePage.visit();
//   await mainMenu.goToLoginPage();
//   await loginPage.login("jamiwa8396@tospage.com", "nhk9dad2EQW!xae_bpm");
//   await mainMenu.goToArtworksPage();
//   await artsworkPage.openArtworkAtIndex(0);
//   // await page.pause();
// });
