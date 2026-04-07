
import {test,expect} from "../fixtures/fixture.js";
import testData from "../testdata/registration.json";

//test.setTimeout(0);

test.describe("New user Registration Test",()=> {

for(const data of testData) {

    console.log(data);
    
    test(`Creating New User ${data.name}`,async function ({registrationPage}) {
        
        await registrationPage.goto("https://freelance-learn-automation.vercel.app/login");
        await registrationPage.clickOnNewUserLink();
        //await registrationPage.page.waitForTimeout(5000);
        
        await registrationPage.enterName(data.name);
        await registrationPage.enterEmail(`${data.email}_${Date.now()}@email.com`);
        await registrationPage.page.waitForTimeout(5000);
        
        await registrationPage.enterPassword(data.password);
        await registrationPage.selectInterest("Java");
        await registrationPage.page.waitForTimeout(5000);
        
        await registrationPage.selectGender();
        await registrationPage.selectState(data.state);
        await registrationPage.page.waitForTimeout(5000);
        
        await registrationPage.selectHobbies(data.hobbies);
        await registrationPage.clickOnSignIn();
        await registrationPage.page.waitForTimeout(5000);

        await registrationPage.assertUrlNotContains(/Signup/);

        //await page.locator('#inputName').pressSequentially("Playwright JS",{delay:100});



    })
}

})


