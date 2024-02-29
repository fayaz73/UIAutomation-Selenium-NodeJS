const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
//const assert = require("assert")
const fs = require('fs');
const { allure } = require("allure-mocha/runtime");

//const chai = require('chai');
//const chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
//const { assert, expect } = require('chai');
//const { expect } = chai;


const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const { assert, expect } = chai;



class LoginPage extends BasePage{

    constructor() {
        super();
        this.driver = driver;
    }
    async enter_url(theURL){  

        await this.go_to_url(theURL);
    }

    async log_in(username,password,driver){
        //console.log(username);
        //console.log(password);
       //await driver.findElement(By.id("mui-1")).clear();
       //await driver.findElement(By.id("mui-2")).cleconst assert = require("assert")ar();
       //await driver.manage().setTimeouts({ implicit: 100000 });
       await driver.findElement(By.name("username")).sendKeys(username);
       await driver.findElement(By.name("password")).sendKeys(password);
       await driver.findElement(By.css(".MuiButton-root")).click()
    }

    async log_out(driver){
        await driver.findElement(By.css(".css-11fo197")).click();
        await driver.findElement(By.css(".css-16qbq77")).click();
        await driver.findElement(By.xpath("//div[contains(text(),'Logged out successfully')]/..")).click();
    }

    async validate(actualValue, expValue){
        //assert.equal(actualValue,expValue,`test case failed : Actual: ${actualValue}  Expected: ${expValue}`)

        // Use Chai-as-promised to perform a soft assertion
         try {
            //await expect(Promise.resolve(actualValue.toLowerCase())).to.eventually.equal(expValue.toLowerCase());
            const result = await expect(Promise.resolve(actualValue.toLowerCase())).to.eventually.equal(expValue.toLowerCase());
            assert.equal(result, expValue.toLowerCase(), `Verification failed: Actual: ${result}, Expected: ${expValue}`);
        } catch (error) {
            //console.error(`Verification failed: Actual: ${actualValue}, Expected: ${expValue}`);
            // Handle the error using Chai's assert
            //assert.fail(`Error: ${error.message}`);
            // Report fail status to Allure
            allure.step(`Verification failed: Actual: ${actualValue}, Expected: ${expValue}`, () => {});
            throw error; // Rethrow the error to mark the test as failed in Mocha
        }
    }

}

module.exports = new LoginPage();
