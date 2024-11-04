
var elements = require('./elements')

class CreateAccountPage{

    enterUserDetails(FirstName,LastName,UserEmail,UserPassword){       
        cy.get(elements.accountPage.firstNameTxtField).type(FirstName)   
        cy.get(elements.accountPage.lastNameTxtField).type(LastName)   
        cy.get(elements.accountPage.emailField).type(UserEmail)   
        cy.get(elements.accountPage.passwordField).type(UserPassword)  
        cy.get(elements.accountPage.confirmPasswordField).type(UserPassword)      
    }

    clickOnCreateAccountBtn(){
        cy.get(elements.accountPage.createAccountButton).click()
    }

    verifySuccessfullAccountCreation(){
        cy.url().should('include', 'customer/account/');
    }

   }

export default CreateAccountPage