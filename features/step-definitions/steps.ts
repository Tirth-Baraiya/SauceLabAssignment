import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';


import LoginPage from '../pageobjects/login.page';
import dashboardPages from '../pageobjects/dashboard.pages';
import loginPage from '../pageobjects/login.page';


When('I login with {string} and {string}', async (username: string, password: string) => {
    await LoginPage.login(username,password);
});


Then('I click on Login button',async() => {
    await LoginPage.loginButton();
})

Then('I should see a Dashboard page', async () => {
    await expect(dashboardPages.dashboardElement).toBeExisting();
});

Then('I click on burger icon button', async () => {
   await dashboardPages.burgerbutton();
})

Then('I click logout', async () => {
    await dashboardPages.logoutbutton();
})

Then('I verify error message popup displayed',async () => {
    await expect(loginPage.errorAlert).toBeExisting();
})
