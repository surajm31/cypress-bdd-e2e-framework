Feature: Create A New User Account Functionality
  Scenario: Verify new user account creations
    When User Navigate to Create Account Page
    When User fill all the details
    When User click on create account
    Then User should see the success message
