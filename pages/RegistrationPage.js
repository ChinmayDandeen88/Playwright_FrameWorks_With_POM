import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {

    constructor(page) {

        super(page);
        this.newUserLink = this.page.getByText('New user? Signup');
        this.name = this.page.locator('#name')
        this.email = this.page.getByPlaceholder('Email');
        this.password = this.page.getByPlaceholder('Password');
        this.interest = this.page.getByRole('checkbox', { name: 'Java' });
        this.gender = this.page.locator('#gender2');
        this.state = this.page.locator('#state');
        this.hobbies =this.page.locator('#hobbies');
        this.signInButton= this.page.getByText('Sign up', { exact: true });
    }

        async clickOnNewUserLink(){
            await this.newUserLink.click();
        }

        async enterName(name){
            await this.name.pressSequentially(name, { delay: 100 });
        }

        async enterEmail(email){
            await this.email.pressSequentially(email, { delay: 100 });
        }

        async enterPassword(password){
            await this.password.fill(password);
        }

        async selectInterest(){
            await this.interest.click();
        }

        async selectGender(){
            await this.gender.click();
        }

        async selectState(state){
            await this.state.selectOption({label: state});
        }

        async selectHobbies(hobbies){
            await this.hobbies.selectOption({hobbies});
        }

        async clickOnSignIn(){
            await this.signInButton.click();
        }

}

