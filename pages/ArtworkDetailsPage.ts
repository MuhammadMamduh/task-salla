import {expect, Page, Locator} from '@playwright/test'

export class ArtworkDetailsPage{
    readonly page: Page;
    readonly reviewsBtn: Locator;
    readonly reviewTitle: Locator;
    readonly reviewDetails: Locator;
    readonly submitReviewBtn: Locator;
    readonly lastReviewTitle: Locator;
    readonly lastReviewDetails: Locator;

    constructor(page: Page){
        this.page = page;
        this.reviewsBtn = this.page.locator("//button[text()='Reviews']");
        this.reviewTitle = this.page.locator("//input[@id='review-title']");
        this.reviewDetails = this.page.locator("//textarea[@id='review-detail']");
        this.submitReviewBtn = this.page.locator("//textarea[@id='review-detail']//following-sibling::button");
        this.lastReviewTitle = this.page.locator("//html/body//div[1]/main//div[4]//div[2]//div[3]//div//div//div[3]//div//div[2]//h5");
        this.lastReviewDetails = this.page.locator("//html//body//div[1]//main//div[4]//div[2]//div[3]/div//div//div[3]//div//div[2]//div[2]//p");
    }

    addReview = async (title:string, details:string) => {
        await this.reviewsBtn.waitFor();
        await this.reviewsBtn.click();
       
        await this.reviewTitle.clear();
        await this.reviewTitle.fill(title);
        await this.reviewDetails.clear();
        await this.reviewDetails.fill(details);

        await this.submitReviewBtn.waitFor();
        await this.submitReviewBtn.click();
    }

    verifyReview = async (expectedTitle:string, expectedDetails:string) => {
        await this.lastReviewTitle.waitFor();
        await expect(this.lastReviewTitle).toHaveText(expectedTitle);
       
        await this.lastReviewDetails.waitFor();
        await expect(this.lastReviewDetails).toHaveText(expectedDetails);
    }

}