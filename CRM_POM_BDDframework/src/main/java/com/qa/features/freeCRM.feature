Feature: Free CRM Application Test

Scenario: Validate free CRM_mainPage Test

	Given user opens browser
	Then user is on mainpage
	Then validate the title of the page
	Then validate the help line phone number
	Then validate the logo
	Then click on login option
	Then validate the login page title
	Then enter the username,password and click on login button
	Then user is on homepage
	Then user clicks on contacts link
	Then close the browser