import {expect, Page, Locator} from '@playwright/test'

export class AddArtworksPage{
    readonly page: Page;
    readonly artworkNameField: Locator;
    readonly editionsDropdown: Locator;
    readonly descriptionField: Locator;
    readonly currentPriceField: Locator;
    readonly priceAtPrimarySaleField: Locator;
    readonly primarySaleDateBtn: Locator;
    readonly primarySaleBuyerField: Locator;
    readonly uploadArtworkFileInput: Locator;
    readonly styleOfArtworkDropdown: Locator;
    readonly genesisDropdown: Locator;
    readonly supplyDropdown: Locator;
    readonly collaboratorField: Locator;
    readonly owenedByField: Locator;
    readonly marketplaceMintedOnDropdown: Locator;
    readonly marketplaceUrlField: Locator;
    readonly mintDateBtn: Locator;
    readonly creationDateBtn: Locator;
    readonly copyrightDropdown: Locator;
    readonly artistLoyaltyRadiobtnYes: Locator;
    readonly artistLoyaltyRadiobtnNo: Locator;
    readonly physicalPieceRadiobtnYes: Locator;
    readonly physicalPieceRadiobtnNo: Locator;
    readonly publishBtn: Locator;
    editionsDropdownListItems: Locator;
    styleOfWorkDropdownListItems: Locator;
    genesisDropdownListItems: Locator;
    supplyDropdownListItems: Locator;
    marketplaceMintedonListItems: Locator;
    copyrightListItems: Locator;
    calenderDayBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.artworkNameField = this.page.locator("input[id='artwork_name']");
        this.editionsDropdown = this.page.getByRole('button', { name: 'Select Edition Type' });
        this.descriptionField = this.page.locator("//div[@id='editorblock']//div[@contenteditable='true']");
        this.currentPriceField = this.page.locator("input[id='current_price']");
        this.priceAtPrimarySaleField = this.page.locator("//input[@id='primary_sale_price']");
        this.primarySaleDateBtn = this.page.locator("//p[text()='Date At Primary Sale']//following-sibling::button[1]");
        this.primarySaleBuyerField = this.page.locator("//label[text()='Primary Sale Buyer']//following-sibling::div//div//input");
        this.uploadArtworkFileInput = this.page.locator("input[type='file']");
        this.styleOfArtworkDropdown = this.page.locator("//label[text()='Style Of Artwork *']//following-sibling::div");
        this.genesisDropdown = this.page.locator("//label[text()='NFT Genesis *']//following-sibling::div");
        this.supplyDropdown = this.page.locator("//label[text()='Supply *']//following-sibling::div");
        this.collaboratorField = this.page.locator("//label[text()='Collaborator']//following-sibling::div//div//input");
        this.owenedByField = this.page.locator("//label[text()='Owned By']//following-sibling::div//div//input");
        this.marketplaceMintedOnDropdown = this.page.locator("//p[text()='The Marketplace Minted On']//following-sibling::div");
        this.marketplaceUrlField = this.page.locator('#url');
        this.mintDateBtn = this.page.locator("//p[text()='Minted On']//following-sibling::button[1]");
        this.creationDateBtn = this.page.locator("//p[text()='Created On *']//following-sibling::button[1]");
        this.copyrightDropdown = this.page.locator("//p[text()='Copyright']//following-sibling::div");
        this.artistLoyaltyRadiobtnYes = this.page.locator("//input[@name='artist_loyalty' and @value='1']");
        this.artistLoyaltyRadiobtnNo = this.page.locator("//input[@name='artist_loyalty' and @value='0']");
        this.physicalPieceRadiobtnYes = this.page.locator("//input[@name='physical_piece' and @value='1']");
        this.physicalPieceRadiobtnNo = this.page.locator("//input[@name='physical_piece' and @value='0']");
        this.publishBtn = this.page.getByRole('button', { name: 'Publish' });
    }

    createArtwork = async (name:string, price:number) => {
        await this.artworkNameField.waitFor();
        await this.artworkNameField.clear();
        await this.artworkNameField.fill(name);

        await this.editionsDropdown.waitFor();
        await this.editionsDropdown.click();
        this.editionsDropdownListItems = this.page.getByRole('option', { name: "Open Edition" }).locator('div');
        await this.editionsDropdownListItems.waitFor();
        await this.editionsDropdownListItems.click();

        await this.descriptionField.waitFor();
        await this.descriptionField.clear();
        await this.descriptionField.fill("Test102478");
        await this.currentPriceField.clear();
        await this.currentPriceField.fill(price.toString(), { force: true });
        await this.priceAtPrimarySaleField.clear();
        await this.priceAtPrimarySaleField.fill((price - 20).toString(), { force: true });

        await this.primarySaleDateBtn.waitFor();
        await this.primarySaleDateBtn.click();

        this.calenderDayBtn = this.page.getByRole('gridcell', { name: '14' }).first();
        await this.calenderDayBtn.waitFor();
        await this.calenderDayBtn.click();
        // to make the calander disappear
        await this.primarySaleDateBtn.click();
        
        await this.primarySaleBuyerField.waitFor();
        await this.primarySaleBuyerField.clear();
        await this.primarySaleBuyerField.fill("test@test.com");

        let projectRoot:string = process.cwd();
        let filePath:string = projectRoot + "/resources/data/images/aqsa.jpeg"
        // console.log('Project Root Directory:',  projectRoot + "/resources/data/images/aqsa.jpeg");

        await this.uploadArtworkFileInput.setInputFiles(filePath);

        await this.styleOfArtworkDropdown.waitFor();
        await this.styleOfArtworkDropdown.click();

        this.styleOfWorkDropdownListItems = this.page.getByRole('option', { name: 'Cubism' }).locator('label');
        await this.styleOfWorkDropdownListItems.waitFor();
        await this.styleOfWorkDropdownListItems.click();

        await this.genesisDropdown.waitFor();
        await this.genesisDropdown.click();

        this.genesisDropdownListItems = this.page.getByRole('option', { name: '2018' }).locator('label');
        await this.genesisDropdownListItems.waitFor();
        await this.genesisDropdownListItems.click();

        await this.supplyDropdown.waitFor();
        await this.supplyDropdown.click();

        this.supplyDropdownListItems = this.page.getByRole('option', { name: '- 49 /year' }).locator('label')
        await this.supplyDropdownListItems.waitFor();
        await this.supplyDropdownListItems.click();

        await this.collaboratorField.waitFor();
        await this.collaboratorField.clear();
        await this.collaboratorField.fill("test@test.com", { force: true });

        await this.owenedByField.waitFor();
        await this.owenedByField.clear();
        await this.owenedByField.fill("test@test.com");

        await this.marketplaceMintedOnDropdown.waitFor();
        await this.marketplaceMintedOnDropdown.click();

        this.marketplaceMintedonListItems = this.page.getByRole('option', { name: 'SuperRare' }).locator('div')
        await this.marketplaceMintedonListItems.waitFor();
        await this.marketplaceMintedonListItems.click();

        await this.marketplaceUrlField.waitFor();
        await this.marketplaceUrlField.clear();
        await this.marketplaceUrlField.fill("https://www.google.com/");


        await this.mintDateBtn.waitFor();
        await this.mintDateBtn.click();
        this.calenderDayBtn = this.page.getByRole('gridcell', { name: '14' }).first();
        await this.calenderDayBtn.waitFor();
        await this.calenderDayBtn.click();
        await this.mintDateBtn.click();

        await this.creationDateBtn.waitFor();
        await this.creationDateBtn.click();

        this.calenderDayBtn = this.page.getByRole('gridcell', { name: '14' }).first();
        await this.calenderDayBtn.waitFor();
        await this.calenderDayBtn.click();
        await this.creationDateBtn.click();

        await this.copyrightDropdown.waitFor();
        await this.copyrightDropdown.click();
        this.copyrightListItems = this.page.getByRole('option', { name: 'COPY RIGHT 1 Lorem ipsum' })
        await this.copyrightListItems.waitFor();
        await this.copyrightListItems.click();

        await this.artistLoyaltyRadiobtnYes.waitFor();
        await this.artistLoyaltyRadiobtnYes.check();

        await this.physicalPieceRadiobtnNo.waitFor();
        await this.physicalPieceRadiobtnNo.check();

        await this.publishBtn.waitFor();
        await expect(this.publishBtn).toBeEnabled();
        await this.publishBtn.click();

        await this.page.waitForURL("https://staging.alt.art/artworks");
    }

}