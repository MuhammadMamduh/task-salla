import {expect, Page, Locator} from '@playwright/test'

export class LoginPage{
    readonly page: Page;
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.emailField = this.page.locator("input[id='email']");
        this.passwordField = this.page.locator("input[id='password']");
        this.loginBtn = this.page.locator("button[type='submit']");
    }

    visit = async () => {
        await this.page.goto("https://staging.alt.art/login");
    }

    login = async (email:string, password:string) => {
        await this.emailField.waitFor();
        await this.passwordField.waitFor();
        await this.loginBtn.waitFor();

        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
    }
}