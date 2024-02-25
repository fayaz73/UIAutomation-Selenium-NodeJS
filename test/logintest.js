
const { Builder, By, WebElementCondition,Capabilities, until, Actions } = require("selenium-webdriver")
const testdata = require('./../objects/testData')
const assert = require("assert")
const loginpage = require('../pageobjects/loginpage');
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');


function async login() {
    await driver.get("https://www.google.com")
    await driver.manage().window().setRect({ width: 1848, height: 1053 })

}

login();
