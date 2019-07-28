package com.qa.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.qa.util.TestBase;

public class CRM_mainPage extends TestBase {
	
	@FindBy(xpath="(//div[contains(text(),'+1 415 200 2844')])[1]")
	WebElement mobile;
	
	@FindBy(xpath="(//a[@title='free crm home'])[1]")
	WebElement logo;
	
	@FindBy(xpath="//a[@class='btn btn-primary btn-xs-2 btn-shadow btn-rect btn-icon btn-icon-left']")
	WebElement loginbtn;
	
	
	//Initializing the Page Objects:
		public CRM_mainPage(){
			PageFactory.initElements(driver, this);
		}
		
		//Actions:
		
		public String validateCRMmainPageTitle(){
			return driver.getTitle();
		}
		
		public String validateHelpLineNumber() {
			return mobile.getText();
		}
		
		public boolean validateLogo() {
			return logo.isDisplayed();
		}
		
		public LoginPage loginOption() {
			loginbtn.click();
			return new LoginPage();
		}
		
		

}
