module.exports = {
    computerpage:{
        add_button: "#add",
        computer_name_field: "#name",
        introduced_field: "#introduced",
        discontinued_field: "#discontinued",
        company_dropdown: "#company",
        create_button: ".btn primary",
        search_field: "#searchbox",
        filter_button: "#searchsubmit",
        computer_name_link: "a[href*='/computers/300']",
        save_button: ".btn primary",
        delete_button: "input.btn.danger"
    },

    accountPage : {
        firstNameTxtField :"#form-validate > .fieldset > .field > .control > #firstname",
        lastNameTxtField: "#form-validate > .fieldset > .field > .control > #lastname",
        emailField : "#form-validate > .fieldset > .field > .control > #email_address",
        passwordField : "#form-validate > .fieldset > .field > .control > #password",
        confirmPasswordField: "#form-validate > .fieldset > .field > .control > #password-confirmation",
        createAccountButton : ".customer-account-create > .page-wrapper > #maincontent > .columns > .column",
        successMsg : ".message-success"
    },

    SignupPage :{

        signupEmailField :"#login-form > .fieldset > .field > .control > #email",
        signupPasswordField:"#login-form > .fieldset:nth-child(2) > .field > .control > #pass",
        signupButton :"#login-form > .fieldset:nth-child(2) > .actions-toolbar > .primary > #send2"
    }
}