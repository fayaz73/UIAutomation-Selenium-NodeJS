var webdriver = require('selenium-webdriver');
var  driver =  new webdriver.Builder().forBrowser('chrome').build();


function  login() {
    driver.get("https://www.google.com")
    driver.manage().window().setRect({ width: 1848, height: 1053 })

}

login();
