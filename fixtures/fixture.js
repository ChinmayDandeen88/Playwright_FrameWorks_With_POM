import {test as base,expect} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage.js";
import {RegistrationPage} from "../pages/RegistrationPage.js";

const test = base.extend({

    loginPage: async({page},use)=>{
 
        console.log("Running Fixture for test Login...");
        
        const loginPage = new LoginPage(page);

        // whatever we write before USE - it will be executed before each test
        await use(loginPage);
        // whatever we write After USE - it will be executed After each test
    },

    registrationPage: async({page},use)=>{
 
        console.log("Running Fixture for test Registration...");
        
        const registrationPage = new RegistrationPage(page);

        // whatever we write before USE - it will be executed before each test
        await use(registrationPage);
        // whatever we write After USE - it will be executed After each test
    }

});

export{test,expect}