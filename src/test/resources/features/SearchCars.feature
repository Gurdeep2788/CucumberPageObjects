@Search-Cars
Feature: Acceptance testing to validate Car Search Page
  This is to validate the Cars Search feature of 
  CarsGuide application

  @Search-Cars-Positive
  Scenario: Validate Search Cars page
    Given I am on the Home Page "https://www.carsguide.com.au" of the CarsGuide website
    When I move to the menu
      | Menu     |
      | buy+sell |
      | reviews  |
    And click on "Search Cars" link
    And Select car brand as "BMW" from AnyMake dropdown
    And Select car model as "1 Series" from AnyModel dropdown
    And Select location as "NSW - All" from AnyLocation dropdown
    And Select price_max as "$1,000" from Price dropdown
    And I click on Find_My_Next_Car button
    Then I should see list of searched cars
    And the page title should be "Bmw 1 Series Under 1000 for Sale NSW | carsguide"
