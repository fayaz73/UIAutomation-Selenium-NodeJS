var webdriver = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const chromeOptions = new chrome.Options();
chromeOptions.addArguments('--no-sandbox');
chromeOptions.addArguments('--disable-dev-shm-usage');
chromeOptions.addArguments('--headless');
chromeOptions.setChromeBinaryPath('./drivers/chromedriver');

var  driver =  new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit:(100000)});


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
}

module.exports = BasePage;
