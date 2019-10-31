package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.UsedCarsSearchPageLocators;
import utils.SeleniumDriver;

public class UsedCarsSearchPageActions {
	
	UsedCarsSearchPageLocators usedCarsSearchPageLocators = null;
	
	public UsedCarsSearchPageActions()
	{
		this.usedCarsSearchPageLocators=new UsedCarsSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), usedCarsSearchPageLocators);
	}
	
	public void selectUsedCarModel(String carModel)
	{
		Select select = new Select(usedCarsSearchPageLocators.carModelDropdown);
		select.selectByVisibleText(carModel);
	}
	
	

}
