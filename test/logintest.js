var webdriver = require('selenium-webdriver');
var  driver =  new webdriver.Builder().forBrowser('chrome').build();


function  login() {
    driver.get("https://www.google.com")
    console.log("executed first step")
    driver.manage().window().setRect({ width: 1848, height: 1053 })
    console.log("executed second step")

}

login();
