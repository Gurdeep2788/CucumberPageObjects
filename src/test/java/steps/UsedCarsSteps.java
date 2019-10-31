package steps;

import java.util.List;

import cucumber.api.java.en.When;
import pages.actions.CarsGuideHomePageActions;
import pages.actions.UsedCarsSearchPageActions;

public class UsedCarsSteps {
	
	
	CarsGuideHomePageActions carsGuideHomePageActions = new CarsGuideHomePageActions();
	UsedCarsSearchPageActions usedCarsSearchPageActions = new UsedCarsSearchPageActions();
	
	
	@When("^I click on \"([^\"]*)\" link$")
	public void i_click_on_link(String arg1) throws Throwable 
	{
		carsGuideHomePageActions.clickOnUsedCars();
	}
	
	@When("^Select car model$")
	public void select_car_model(List <String> list) throws Throwable 
	{
		String model = list.get(1);		
		System.out.println("Selected model is : "+ model);
		usedCarsSearchPageActions.selectUsedCarModel(model);
	    
	}

}
