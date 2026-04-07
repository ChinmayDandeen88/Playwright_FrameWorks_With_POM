import { BasePage } from "./BasePage";

export class LoginPage extends BasePage{


        constructor(page){
            
            super(page);
            this.page = page;
            this.emailField = this.page.locator("#email1");
            this.passwordField = this.page.locator("#password1");
            this.loginButton = this.page.locator(".submit-btn");
        }

        async enterEmail(email) {
            await this.emailField.fill(email);
        }

        async enterPassword(pass){
            await this.passwordField.fill(pass);
        }

        async clickOnLoginButton(){
            await this.loginButton.click();
        }
















}