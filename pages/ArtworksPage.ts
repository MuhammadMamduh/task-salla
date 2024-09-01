import {expect, Page, Locator} from '@playwright/test'

export class ArtsworksPage{
    readonly page: Page;
    readonly addArtworkBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.addArtworkBtn = this.page.locator("a[href='/artworks/create']");
    }

    visit = async () => {
        await this.page.goto("https://staging.alt.art/artworks");
    }

    goToAddArtworkPage = async () => {
        await this.addArtworkBtn.waitFor();
        await this.addArtworkBtn.click();
    }

}