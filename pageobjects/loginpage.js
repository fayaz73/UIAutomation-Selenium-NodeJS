require('./fast-selenium.js'); // imports the fast-selenium script
const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const fs = require('fs');
const { allure } = require("allure-mocha/runtime");
var addContext = require("mochawesome/addContext")
// Now you can use fsp.writeFile, fsp.readFile, etc.


//const assert = require("assert")


//const chai = require('chai');
//const chaiAsPromised = require('chai-as-promised');

//chai.use(chaiAsPromised);
//const { assert, expect } = require('chai');
//const { expect } = chai;


const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const { assert, expect } = chai;
//const allure = require('@wdio/allure-reporter');



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
       await driver.manage().setTimeouts({ implicit: 100000 });
       await driver.findElement(By.name("username")).sendKeys(username);
       await driver.findElement(By.name("password")).sendKeys(password);
       await driver.findElement(By.css(".MuiButton-root")).click()
    }

    async log_out(driver){
        //await this.driver.manage().setTimeouts({ implicit: 10000 });
        await driver.findElement(By.xpath("(//div/img[@src='/app/assets/Lemnisk Logo.svg']/../..//button)[2]")).click();
        await driver.findElement(By.xpath("//div/ul/li[text()='Logout']")).click();
        //await driver.findElement(By.xpath("//div[contains(text(),'Logged out successfully')]/..")).click();
    }

    async TakeScreenShot() {
        await this.takeScreenshot();
    }

    async addContextAsync(context) {
        // Your class-specific logic here, if any
    
        // Call mochawesome/addContext asynchronously with the current test context
         addContext(this, context);
      }

    async validate(actualValue, expValue,driver){
        // Use Chai-as-promised to perform a soft assertion
         try {
            //const screenshot = await this.takeScreenshot();
            //allure.description("dsfsdfdsfsdfssfsdf")
            
            //allure.step();
            //allure.attachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
           // allure.attachment("Screenshot", Buffer.from(screenshot, 'base64'), "image/png");
           /* const screenshotBuffer = Buffer.from(screenshot, 'base64');
           allure.attachment("Screenshot",screenshotBuffer, "image/png"); */
            allure.attachment("image.png", fs.readFileSync("out.png"), "image/png");
            addContext(this,"out.png");

            //allure.createAttachment('Screenshot', () => new Buffer.from(screenshot, 'base64'), 'image/png')();
            //await expect(Promise.resolve(actualValue.toLowerCase())).to.eventually.equal(expValue.toLowerCase());
            const result = await expect(Promise.resolve(actualValue.toLowerCase())).to.eventually.equal(expValue.toLowerCase());
            assert.equal(result, expValue.toLowerCase(), `Verification failed: Actual: ${result}, Expected: ${expValue}`);
            console.log("end of the try block inside the login validate")
            
        } catch (error) {
            //const screenshot = await this.takeScreenshot();
            //allure.createAttachment('Error Screenshot', () => new Buffer.from(driver.takeScreenshot(), 'base64'), 'image/png')();
            //allure.attachment("image.png", fs.readFileSync("out.png"), "image/png");
            console.log("end of the catch block inside the login validate")
            console.error("Test failed:", error);
            assert.fail(`Error: ${error.message}`);
            throw error; // Rethrow the error to mark the test as failed in Mocha
        }
    }

}

module.exports = new LoginPage();