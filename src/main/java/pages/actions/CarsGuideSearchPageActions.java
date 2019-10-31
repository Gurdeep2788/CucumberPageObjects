package pages.actions;

import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import pages.locators.CarsSearchPageLocators;
import utils.SeleniumDriver;

public class CarsGuideSearchPageActions {
	
	public CarsSearchPageLocators carsSearchPageLocators=null;
	
	public CarsGuideSearchPageActions()
	{
		this.carsSearchPageLocators=new CarsSearchPageLocators();
		PageFactory.initElements(SeleniumDriver.getDriver(), carsSearchPageLocators);
	}
	
	public void selectCarMake(String carBrand)
	{
		Select select = new Select(carsSearchPageLocators.carMakeDropdown);
		select.selectByVisibleText(carBrand);
		
	}
	
	public void selectModel(String carModel)
	{
		Select select = new Select(carsSearchPageLocators.carModelDropdown);
		select.selectByVisibleText(carModel);
		
	}
	
	public void selectLocation(String location)
	{
		Select select = new Select(carsSearchPageLocators.locationDropdown);
		select.selectByVisibleText(location);
		
	}
	
	public void selectPrice(String price)
	{
		Select select = new Select(carsSearchPageLocators.priceDropdown);
		select.selectByVisibleText(price);
		
	}
	
	
	//Show me 235 cars
	public void clickShowMeCars()
	{
		carsSearchPageLocators.findMyNextCarButton.click();		
	}
}
