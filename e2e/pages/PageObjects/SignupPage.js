var elements = require('./elements')

class SignupPage{

    enterUserSignupDetails(UserEmail,UserPassword){ 
       cy.get(elements.SignupPage.signupEmailField).type(UserEmail)   
       cy.get(elements.SignupPage.signupPasswordField).type(UserPassword)   
    }

    clickOnSignupBtn(){
        cy.get(elements.SignupPage.signupButton).click()
    }

    verifySuccessfullSignup(){
        cy.url().should('include', '/customer/account/');
    }

   }

export default SignupPage