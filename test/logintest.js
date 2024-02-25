
const { Builder, By, WebElementCondition,Capabilities, until, Actions } = require("selenium-webdriver")
const testdata = require('./../objects/testData')
const assert = require("assert")
const loginpage = require('../pageobjects/loginpage');
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');


function login() {
    let driver = await loginpage.driver;
    await driver.get("https://www.google.com")

}

login();
