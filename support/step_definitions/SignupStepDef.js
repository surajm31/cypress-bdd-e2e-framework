import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import SignupPage from '../../e2e/pages/PageObjects/SignupPage'

const signuppage = new SignupPage();

When('User Navigate to Signup Page', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/', { timeout: 10000 });
})

When('User fill Email and Password', () => {

    cy.fixture('CreateAccountUserDetails').then((data) => {
        const user = data.UserSignupData;
        signuppage.enterUserSignupDetails(user.UserEmail, user.UserPassword);
    });
})

When('User click on Signup button', () => {
    signuppage.clickOnSignupBtn()
})

Then('User should signup successfully', () => {
    signuppage.verifySuccessfullSignup()
})