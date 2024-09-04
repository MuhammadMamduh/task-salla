import {expect, Page, Locator} from '@playwright/test'

export class ArtsworksPage{
    readonly page: Page;
    readonly addArtworkBtn: Locator;
    readonly artworkTitlesList: Locator;

    constructor(page: Page){
        this.page = page;
        this.addArtworkBtn = this.page.locator("a[href='/artworks/create']");
        this.artworkTitlesList = this.page.locator("//div[@id='artworks-list']//h3");
    }

    visit = async () => {
        await this.page.goto("https://staging.alt.art/artworks");
    }

    goToAddArtworkPage = async () => {
        await this.addArtworkBtn.waitFor();
        await this.addArtworkBtn.click();
        await this.page.waitForURL("https://staging.alt.art/artworks/create");

        // alternative way
        // await this.page.goto("https://staging.alt.art/artworks/create");
    }

    verifyArtworkTitle = async (expectedArtworkTitle:string) => {
        let actualArtworkTitle = await this.artworkTitlesList.nth(0);
        await actualArtworkTitle.waitFor();

        await expect(actualArtworkTitle).toHaveText(expectedArtworkTitle);
    }

    verifyArtworkCreation = async (expectedArtworkTitle:string) => {
        let actualArtworkTitle = await this.artworkTitlesList.nth(0);
        await actualArtworkTitle.waitFor();

        await expect(actualArtworkTitle).toHaveText(expectedArtworkTitle);
    }

    openArtworkAtIndex = async (index:number) => {
        let artworkTitle = await this.artworkTitlesList.nth(index);
        await artworkTitle.waitFor();
        await artworkTitle.click();
    }

}