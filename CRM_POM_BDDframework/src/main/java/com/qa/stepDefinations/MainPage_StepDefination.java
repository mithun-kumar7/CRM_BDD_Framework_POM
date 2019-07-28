package com.qa.stepDefinations;



import org.openqa.selenium.By;

import com.qa.pages.CRM_mainPage;
import com.qa.pages.HomePage;
import com.qa.pages.LoginPage;
import com.qa.util.TestBase;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import junit.framework.Assert;

@SuppressWarnings("deprecation")
public class MainPage_StepDefination extends TestBase {
	
	CRM_mainPage mainpage;
	LoginPage loginpage;
	HomePage homepage;
	
	public MainPage_StepDefination(){
		super();
	}
	
	@Given("^user opens browser$")
	public void user_opens_browser() throws Throwable {
		initialization();
		mainpage= new CRM_mainPage();
	}

	@Then("^user is on mainpage$")
	public void user_is_on_mainpage() throws Throwable {
		CRMmainpage();
	}

	@Then("^validate the title of the page$")
	public void validate_the_title_of_the_page() throws Throwable {
		 
		String title=mainpage.validateCRMmainPageTitle();
		System.out.println("CRM main page title= "+title);
		Assert.assertEquals("#1 Free CRM software in the Cloud FreeCRM", title);
		
	}

	@Then("^validate the help line phone number$")
	public void validate_the_help_line_phone_number() throws Throwable {
		String number=mainpage.validateHelpLineNumber();
		System.out.println("Help line number= "+number);
		
	}

	@Then("^validate the logo$")
	public void validate_the_logo() throws Throwable {
		boolean flag=mainpage.validateLogo();
		Assert.assertTrue(flag);

	}

	@Then("^click on login option$")
	public void click_on_login_option() throws Throwable {
		loginpage=mainpage.loginOption();

	}

	@Then("^validate the login page title$")
	public void validate_the_login_page_title() throws Throwable {
		String title=loginpage.validateLoginPageTitle();
		System.out.println("Login page title is= "+title);
		Assert.assertEquals("CRM", title);

	}

	@Then("^enter the username,password and click on login button$")
	public void enter_the_username_password_and_click_on_login_button() throws Throwable {
		
	   homepage=loginpage.login(prop.getProperty("username"), prop.getProperty("password"));
	}
	
	@Then("^user is on homepage$")
	public void user_is_on_homepage() throws Throwable {
	    String title=homepage.HomePageTitle();
	    System.out.println("home page title is= "+ title);
	}
	
	@Then("^user clicks on contacts link$")
	public void user_clicks_on_contacts_link() throws Throwable {
		driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	   driver.quit();
	}

}
