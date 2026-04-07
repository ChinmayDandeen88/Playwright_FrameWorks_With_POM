// common useful method which will be used across all pages mostly playwright methods

import { expect } from "@playwright/test";

export class BasePage{

    /**
     * 
     * @param{import("@playwright/test").Page } page 
     * // this is Javascript.type annotation
     */


    constructor(page){
        this.page = page;
    }

    async refreshApplication(){
        await this.page.reload();
    }

    async goBack() {
        await this.page.goBack();
    }

    async goForward() {
        await this.page.goForward();
    }

    async goto(path) {
        this.page.goto(path);
    }

    getCurrentUrl(){
        return this.page.url();
    }

    async getCurrentTitle(){
        return this.page.title();
    }

    async assertUrlNotContains(pattern){
        await expect(this.page).not.toHaveURL(pattern);
    }

    /**
     * 
     * @param {import("@playwright/test").Locator} locator 
     * @param {number} timeout 
     */
    async waitForVisible(locator,timeout=10000){
            await locator.waitFor({state:"visible",timeout});
    }

    async waitForInVisible(locator,timeout=10000){
            await locator.waitFor({state:"hidden",timeout});
    }

}