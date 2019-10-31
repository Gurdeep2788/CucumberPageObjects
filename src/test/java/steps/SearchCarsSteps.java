package steps;

import java.util.List;

import org.testng.Assert;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.CarsGuideSearchPageActions;
import utils.SeleniumDriver;

public class SearchCarsSteps {

	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	CarsGuideSearchPageActions carsGuideSearchPageActions = new CarsGuideSearchPageActions();

	@Given("^I am on the Home Page \"([^\"]*)\" of the CarsGuide website$")
	public void i_am_on_the_Home_Page_of_the_CarsGuide_website(String websiteURL) throws Throwable {
		SeleniumDriver.openPage(websiteURL);
	}

	@When("^I move to the menu$")
	public void i_move_to_the_menu(List<String> list) throws Throwable {
		String menu = list.get(1);
		System.out.println("The value of menu is : " + menu);

		carsGuideHomePageActions.moveToBuyPlusSellMenu();
	}

	@And("^click on \"([^\"]*)\" link$")
	public void click_on_link(String arg1) throws Throwable {
		carsGuideHomePageActions.clickOnSearchCars();
	}

	@And("^Select car brand as \"([^\"]*)\" from AnyMake dropdown$")
	public void select_car_brand_as_from_AnyMake_dropdown(String carBrand) throws Throwable {

		carsGuideSearchPageActions.selectCarMake(carBrand);

	}

	@And("^Select car model as \"([^\"]*)\" from AnyModel dropdown$")
	public void select_car_model_as_from_AnyModel_dropdown(String carModel) throws Throwable {
		carsGuideSearchPageActions.selectModel(carModel);
	}

	@And("^Select location as \"([^\"]*)\" from AnyLocation dropdown$")
	public void select_location_as_from_AnyLocation_dropdown(String location) throws Throwable {
		carsGuideSearchPageActions.selectLocation(location);
	}

	@And("^Select price_max as \"([^\"]*)\" from Price dropdown$")
	public void select_price_max_as_from_Price_dropdown(String price) throws Throwable {
		carsGuideSearchPageActions.selectPrice(price);
	}

	@And("^I click on Find_My_Next_Car button$")
	public void i_click_on_Find_My_Next_Car_button() throws Throwable {
		carsGuideSearchPageActions.clickShowMeCars();
	}

	@Then("^I should see list of searched cars$")
	public void i_should_see_list_of_searched_cars() throws Throwable {
		System.out.println("Searched cars show");
	}

	@And("^the page title should be \"([^\"]*)\"$")
	public void the_page_title_should_be(String Expected_Title) throws Throwable {
		
	String Actual_Title =SeleniumDriver.getDriver().getTitle();
	Assert.assertEquals(Actual_Title, Expected_Title);

	}

}
