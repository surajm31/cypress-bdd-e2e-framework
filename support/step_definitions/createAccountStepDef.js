import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import CreateAccountPage from '../../e2e/pages/PageObjects/CreateAccountPage'

const createaccountpage = new CreateAccountPage();

When('User Navigate to Create Account Page', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/', { timeout: 10000 });
})

When('User fill all the details', () => {
    cy.fixture('CreateAccountUserDetails').then((data) => {
        const user = data.UserSignupData;
        createaccountpage.enterUserDetails(user.FirstName, user.LastName, user.UserEmail, user.UserPassword);
    });
})

When('User click on create account', () => {
    createaccountpage.clickOnCreateAccountBtn()
})

Then('User should see the success message', () => {
    createaccountpage.verifySuccessfullAccountCreation()
})