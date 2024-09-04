import {expect, Page, Locator} from '@playwright/test'

export class MainMenu{
    readonly page: Page;
    readonly artistsPageBtn: Locator;
    readonly artworksPageBtn: Locator;
    readonly collectorsPageBtn: Locator;
    readonly blogsPageBtn: Locator;
    readonly eventsPageBtn: Locator;
    readonly loginPageBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.artistsPageBtn = this.page.locator("//*[not(ancestor::div[@class='xl:hidden'])]/nav/a/span[@id='artists']");
        this.artworksPageBtn = this.page.locator("//*[not(ancestor::div[@class='xl:hidden'])]/nav/a/span[@id='artworks']").last();
        this.collectorsPageBtn = this.page.locator("//*[not(ancestor::div[@class='xl:hidden'])]/nav/a/span[@id='collectors']");
        this.blogsPageBtn = this.page.locator("//*[not(ancestor::div[@class='xl:hidden'])]/nav/a/span[@id='blogs']");
        this.eventsPageBtn = this.page.locator("//*[not(ancestor::div[@class='xl:hidden'])]/nav/a/span[@id='events']");
        this.loginPageBtn = this.page.locator("a[href='/login']");
    }

    goToArtistsPage = async () => {
        await this.artistsPageBtn.waitFor();
        await this.artistsPageBtn.click();
    }
    goToArtworksPage = async () => {
        // await this.artworksPageBtn.waitFor();
        // await this.artworksPageBtn.click();
        await this.page.goto("https://staging.alt.art/artworks");
        await this.page.reload();
        await this.page.waitForURL("https://staging.alt.art/artworks");
    }
    goToCollectorsPage = async () => {
        await this.collectorsPageBtn.waitFor();
        await this.collectorsPageBtn.click();
    }
    goToBlogsPage = async () => {
        await this.blogsPageBtn.waitFor();
        await this.blogsPageBtn.click();
    }
    goToEventsPage = async () => {
        await this.eventsPageBtn.waitFor();
        await this.eventsPageBtn.click();
    }
    goToLoginPage = async () => {
        await this.loginPageBtn.waitFor();

        if (await this.loginPageBtn.isVisible()) {
            await this.loginPageBtn.click();
            await this.page.waitForURL("https://staging.alt.art/login");
        }
        else{
            console.error("It seems that the Login Button is not visible, which probably means that you are already logged in")
        }
        
    }
}