Feature: User Signup Functionality
  Scenario: Verify user signup 
    When User Navigate to Signup Page
    When User fill Email and Password
    When User click on Signup button
    Then User should signup successfully
