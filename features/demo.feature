Feature: I am going to validate the calculator App

    # @calculatorTesting
    # Scenario: Calculator add functionality testing
    # Given I will navigate to the "calc" site
    # When I add two number "3" and "5"
    # Then the output displayed should be "8"

    @calculatorTesting
    Scenario: Calculator add functionality testing Again 
    Given I will navigate to the calc site
    When I add two number "4" and "7"
    Then the output displayed should be "11"

    @angularTesting
    Scenario Outline: Navigate to Angular Home Page
    Given I will navigate to "AngularJs" site
    When I clicked on Header Link
    And you will navigate to angular Page
    Then you will enter "<key>" in search box

    Examples:
        | key |
        | hello|
        | hey|
    