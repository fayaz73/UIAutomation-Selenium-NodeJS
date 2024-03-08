require('./fast-selenium.js'); // imports the fast-selenium script
var webdriver = require('selenium-webdriver');
//var driver = require('webdriver-manager/selenium');
const fs = require('fs');
//const WebDriverManager = require('./WebDriverManager.js');

const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--no-sandbox');
chromeOptions.addArguments('--disable-dev-shm-usage');
chromeOptions.addArguments('--headless');
chromeOptions.setChromeBinaryPath('./drivers/chromedriver');

//var  driver =  new webdriver.Builder().forBrowser('chrome').build();
var  driver =  new webdriver.Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
//driver.manage().setTimeouts({implicit:(100000)});

 
//const  driver =  new webdriver.Builder().forBrowser('chrome').build();
//var driver;
//const webDriverManager = new WebDriverManager(driver);
//await webDriverManager.configureWebDriver(); 

//driver.manage().setTimeouts({implicit:(100000)});
//driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(30));

class BasePage{
    constructor() {
        global.driver = driver;
    }

    async go_to_url(theURL){
       await driver.manage().window().setRect({ width: 1848, height: 1053 })
       await driver.get(theURL);
    }

    async closeBrowser(){
       await driver.quit();
    }

    async takeScreenshot(){
        return driver.takeScreenshot().then(function(data){
            var base64Data = data.replace(/^data:image\/png;base64,/,"")
            fs.writeFile("out.png", base64Data, 'base64', function(err) {
                 if(err) console.log(err);
            });
         });
    }
    
}

module.exports = BasePage;
