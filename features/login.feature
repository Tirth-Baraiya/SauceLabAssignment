Feature: Sauce Lab login senarios

  Scenario Outline: As a user, I can log into sauce lab apk

    When I login with "standard_user" and "secret_sauce"
    Then I click on Login button
    Then I should see a Dashboard page
    And I click on burger icon button
    Then I click logout


  Scenario: As a user, I cannot login with incorrect credentials into sauce lab apk

    When I login with "standard" and "secret_sauce"
    Then I click on Login button
    And I verify error message popup displayed  