$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchCars.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Car Search Page",
  "description": "This is to validate the Cars Search feature of \nCarsGuide application",
  "id": "acceptance-testing-to-validate-car-search-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 12475707101,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Search Cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-car-search-page;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of the CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "buy+sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "click on \"Search Cars\" link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select car brand as \"BMW\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select car model as \"1 Series\" from AnyModel dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Select location as \"NSW - All\" from AnyLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "Select price_max as \"$1,000\" from Price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "the page title should be \"Bmw 1 Series Under 1000 for Sale NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_the_CarsGuide_website(String)"
});
formatter.result({
  "duration": 14587189501,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 241131500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search Cars",
      "offset": 10
    }
  ],
  "location": "SearchCarsSteps.click_on_link(String)"
});
formatter.result({
  "duration": 4006428200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_car_brand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 195183300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1 Series",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_car_model_as_from_AnyModel_dropdown(String)"
});
formatter.result({
  "duration": 683083399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_AnyLocation_dropdown(String)"
});
formatter.result({
  "duration": 140766300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$1,000",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_price_max_as_from_Price_dropdown(String)"
});
formatter.result({
  "duration": 137981200,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 7339586000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 380999,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bmw 1 Series Under 1000 for Sale NSW | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 14616000,
  "status": "passed"
});
formatter.after({
  "duration": 1144886601,
  "status": "passed"
});
formatter.uri("UsedCarSearch.feature");
formatter.feature({
  "line": 2,
  "name": "Acceptance testing to validate Car Search Page",
  "description": "This is to validate the Cars Search feature of \r\nCarsGuide application",
  "id": "acceptance-testing-to-validate-car-search-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Used-Search-Cars"
    }
  ]
});
formatter.before({
  "duration": 9688946900,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Validate Search Cars page",
  "description": "",
  "id": "acceptance-testing-to-validate-car-search-page;validate-search-cars-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Used-Search-Cars-Positive"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of the CarsGuide website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I move to the menu",
  "rows": [
    {
      "cells": [
        "Menu"
      ],
      "line": 10
    },
    {
      "cells": [
        "buy+sell"
      ],
      "line": 11
    },
    {
      "cells": [
        "reviews"
      ],
      "line": 12
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I click on \"Used\" link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Select car brand as \"Audi\" from AnyMake dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Select car model",
  "rows": [
    {
      "cells": [
        "Model"
      ],
      "line": 16
    },
    {
      "cells": [
        "A1"
      ],
      "line": 17
    },
    {
      "cells": [
        "A2"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "Select location as \"ACT - All\" from AnyLocation dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "Select price_max as \"$2,000\" from Price dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I click on Find_My_Next_Car button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see list of searched cars",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "the page title should be \"Used Audi A1 Under 2000 for Sale ACT | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.carsguide.com.au",
      "offset": 23
    }
  ],
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_the_CarsGuide_website(String)"
});
formatter.result({
  "duration": 5408169000,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "duration": 157509201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used",
      "offset": 12
    }
  ],
  "location": "UsedCarsSteps.i_click_on_link(String)"
});
formatter.result({
  "duration": 7275866400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_car_brand_as_from_AnyMake_dropdown(String)"
});
formatter.result({
  "duration": 182099600,
  "status": "passed"
});
formatter.match({
  "location": "UsedCarsSteps.select_car_model(String\u003e)"
});
formatter.result({
  "duration": 538127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACT - All",
      "offset": 20
    }
  ],
  "location": "SearchCarsSteps.select_location_as_from_AnyLocation_dropdown(String)"
});
formatter.result({
  "duration": 131042400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,000",
      "offset": 21
    }
  ],
  "location": "SearchCarsSteps.select_price_max_as_from_Price_dropdown(String)"
});
formatter.result({
  "duration": 114457599,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_click_on_Find_My_Next_Car_button()"
});
formatter.result({
  "duration": 6827628500,
  "status": "passed"
});
formatter.match({
  "location": "SearchCarsSteps.i_should_see_list_of_searched_cars()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Used Audi A1 Under 2000 for Sale ACT | carsguide",
      "offset": 26
    }
  ],
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "duration": 6160800,
  "status": "passed"
});
formatter.after({
  "duration": 782684701,
  "status": "passed"
});
});