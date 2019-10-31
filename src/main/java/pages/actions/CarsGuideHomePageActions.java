package pages.actions;

import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.PageFactory;

import pages.locators.CarsGuideHomePageLocators;
import utils.SeleniumDriver;

public class CarsGuideHomePageActions {
	
	CarsGuideHomePageLocators carsGuideHomePageLocators = null;
	
	public CarsGuideHomePageActions()
	{
		this.carsGuideHomePageLocators = new CarsGuideHomePageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsGuideHomePageLocators);
	}
	
	
	public void moveToBuyPlusSellMenu()
	{
		Actions actions = new Actions(SeleniumDriver.getDriver());
		actions.moveToElement(carsGuideHomePageLocators.buyPlusSellLink).perform();
		
	}
	
	public void clickOnSearchCars()
	{
		carsGuideHomePageLocators.searchCarsLink.click();
	}
	


	public void clickOnUsedCars() {
		carsGuideHomePageLocators.usedCarsLink.click();
		
	}

}
