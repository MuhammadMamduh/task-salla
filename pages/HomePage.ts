import {expect, Page, Locator} from '@playwright/test'

export class HomesPage{
    readonly page: Page;
    readonly loginPageBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginPageBtn = this.page.locator("a[href='/login']");
    }

    visit = async () => {
        await this.page.goto("https://staging.alt.art/");
    }
}