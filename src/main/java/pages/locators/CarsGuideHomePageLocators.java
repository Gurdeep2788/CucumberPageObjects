package pages.locators;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class CarsGuideHomePageLocators {
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'buy + sell')]")
	public WebElement buyPlusSellLink;
	
	@FindBy(how=How.XPATH, using="//a[@class='uhf-top'][contains(text(),'reviews')]")
	public WebElement reviewsLink;
	
	@FindBy(how=How.XPATH, using="//a[@class='uhf-top'][contains(text(),'news')]")
	public WebElement newsLink;
	
	@FindBy(how=How.XPATH, using="//a[contains(text(),'Search Cars')]")
	public WebElement searchCarsLink;
	
	@FindBy(how=How.XPATH, using="//div[@class='uhf-child-content']//a[contains(text(),'Used')]")
	public WebElement usedCarsLink;

}
