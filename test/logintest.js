var webdriver = require('selenium-webdriver');
const { Builder, By, WebElementCondition,Capabilities, until, Actions } = require("selenium-webdriver")
var  driver =  new webdriver.Builder().forBrowser('chrome').build();


describe('Testing login functionality', function() {
    this.timeout(100000)
    it('login_test', async function() {
      
    await driver.get("https://ttl.lemnisk.co/app")
    console.log("executed first step")
    await driver.manage().window().setRect({ width: 1848, height: 1053 })
    console.log("executed second step")
    await driver.findElement(By.name("username")).sendKeys("ahamed6035");
    console.log("executed third step")
    await driver.findElement(By.name("password")).sendKeys("123$Urbanladder");
    console.log("executed fourth step")
    await driver.findElement(By.xpath("//button")).click();
    console.log("executed fifth step")
  })
     })
     

/*
function login() {
    driver.get("https://cdp.lemnisk.co/app/")
    console.log("executed first step")
    driver.manage().window().setRect({ width: 1848, height: 1053 })
    console.log("executed second step")
}

login();
*/

