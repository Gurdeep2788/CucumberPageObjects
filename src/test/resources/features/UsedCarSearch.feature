@Used-Search-Cars
Feature: Acceptance testing to validate Car Search Page
  This is to validate the Cars Search feature of 
  CarsGuide application

  @Used-Search-Cars-Positive
  Scenario: Validate Search Cars page
    Given I am on the Home Page "https://www.carsguide.com.au" of the CarsGuide website
    When I move to the menu
      | Menu     |
      | buy+sell |
      | reviews  |
    And I click on "Used" link
    And Select car brand as "Audi" from AnyMake dropdown
    And Select car model
      | Model |
      | A1    |
      | A2    |
    And Select location as "ACT - All" from AnyLocation dropdown
    And Select price_max as "$2,000" from Price dropdown
    And I click on Find_My_Next_Car button
    Then I should see list of searched cars
    And the page title should be "Used Audi A1 Under 2000 for Sale ACT | carsguide"
