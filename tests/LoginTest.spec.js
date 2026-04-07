
import {test} from "../fixtures/fixture.js";

test.describe("All Login Scenarios",()=> {

    test("Login To Application With Valid Crdentials", async function ({loginPage}) {

          test.setTimeout(0);
          
          await loginPage.goto("https://freelance-learn-automation.vercel.app/login");

          await loginPage.enterEmail("admin@email.com");
          await loginPage.enterPassword("admin@1234");
          await loginPage.clickOnLoginButton();

          await loginPage.page.waitForTimeout(5000);

          await loginPage.assertUrlNotContains(/login/);


    })
})
