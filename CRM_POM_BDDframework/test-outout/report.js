$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("E:\\Java_code\\CRM_POM_BDDframework\\src\\main\\java\\com\\qa\\features\\freeCRM.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Application Test",
  "description": "",
  "id": "free-crm-application-test",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Validate free CRM_mainPage Test",
  "description": "",
  "id": "free-crm-application-test;validate-free-crm-mainpage-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user opens browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user is on mainpage",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "validate the title of the page",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "validate the help line phone number",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "validate the logo",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "click on login option",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "validate the login page title",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "enter the username,password and click on login button",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user clicks on contacts link",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "MainPage_StepDefination.user_opens_browser()"
});
formatter.result({
  "duration": 34600620213,
  "status": "passed"
});
formatter.match({
  "location": "MainPage_StepDefination.user_is_on_mainpage()"
});
formatter.result({
  "duration": 21617010620,
  "status": "passed"
});
formatter.match({
  "location": "MainPage_StepDefination.validate_the_title_of_the_page()"
});
formatter.result({
  "duration": 460401480,
  "status": "passed"
});
formatter.match({
  "location": "MainPage_StepDefination.validate_the_help_line_phone_number()"
});
formatter.result({
  "duration": 525316952,
  "status": "passed"
});
formatter.match({
  "location": "MainPage_StepDefination.validate_the_logo()"
});
formatter.result({
  "duration": 36993158,
  "status": "passed"
});
formatter.match({
  "location": "MainPage_StepDefination.click_on_login_option()"
});
formatter.result({
  "duration": 40412316493,
  "error_message": "org.openqa.selenium.TimeoutException: timeout\n  (Session info: chrome\u003d74.0.3729.108)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027MITHUN-PC\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_202\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:50284}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}), userDataDir\u003dC:\\Users\\MITHUN\\AppData\\Local\\Temp\\scoped_dir5536_14730}, takesHeapSnapshot\u003dtrue, unhandledPromptBehavior\u003dignore, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d74.0.3729.108, browserConnectionEnabled\u003dfalse, proxy\u003dProxy(), nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: 0f8513f33c776529ec30390b7f6698df\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:215)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:167)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:82)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:275)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy12.click(Unknown Source)\r\n\tat com.qa.pages.CRM_mainPage.loginOption(CRM_mainPage.java:41)\r\n\tat com.qa.stepDefinations.MainPage_StepDefination.click_on_login_option(MainPage_StepDefination.java:63)\r\n\tat ✽.Then click on login option(E:\\Java_code\\CRM_POM_BDDframework\\src\\main\\java\\com\\qa\\features\\freeCRM.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "MainPage_StepDefination.validate_the_login_page_title()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainPage_StepDefination.enter_the_username_password_and_click_on_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainPage_StepDefination.user_is_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainPage_StepDefination.user_clicks_on_contacts_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "MainPage_StepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});