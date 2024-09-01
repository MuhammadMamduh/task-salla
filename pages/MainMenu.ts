import {expect, Page, Locator} from '@playwright/test'

export class HomesPage{
    readonly page: Page;
    readonly artistsPageBtn: Locator;
    readonly artworksPageBtn: Locator;
    readonly collectorsPageBtn: Locator;
    readonly blogsPageBtn: Locator;
    readonly eventsPageBtn: Locator;
    readonly loginPageBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.artistsPageBtn = this.page.locator("[id='artists']");
        this.artworksPageBtn = this.page.locator("[id='artworks']");
        this.collectorsPageBtn = this.page.locator("[id='collectors']");
        this.blogsPageBtn = this.page.locator("[id='blogs']");
        this.eventsPageBtn = this.page.locator("[id='events']");
        this.loginPageBtn = this.page.locator("a[href='/login']");
    }

    goToArtistsPage = async () => {
        await this.artistsPageBtn.click();
    }
    goToArtworksPage = async () => {
        await this.artworksPageBtn.click();
    }
    goToCollectorsPage = async () => {
        await this.collectorsPageBtn.click();
    }
    goToBlogsPage = async () => {
        await this.blogsPageBtn.click();
    }
    goToEventsPage = async () => {
        await this.eventsPageBtn.click();
    }
    goToLoginPage = async () => {
        await this.loginPageBtn.click();
    }
}