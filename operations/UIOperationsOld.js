// Generated by Selenium IDE
const { Builder, By, WebElementCondition,Capabilities,Key,until, Actions } = require("selenium-webdriver")
const assert = require("assert")
//const { Server } = require('browsermob-proxy').Proxy;
//const Server = require('browsermob-proxy-client').Proxy;
const { Options: ChromeOptions } = require('selenium-webdriver/chrome');
var webdriver = require('selenium-webdriver');
var readObjects = require('./ReadObjects');
var  driver = new webdriver.Builder().forBrowser('chrome').build();
//var  driver;

/* var driver = new webdriver.Builder().
usingServer('http://localhost:4444/wd/hub').
withCapabilities(Capabilities.chrome()).
build(); */
/* var driver = new webdriver.Builder().
usingServer('http://127.0.0.1:8888/wd/hub').
withCapabilities(Capabilities.chrome()).
build(); */

//driver.manage().setTimeouts({implicit:(200000)});
//driver.manage().window().setRect({width:1848, height:1053});




class Operations  {
    
    
    constructor() {
    /*     this.proxy = new Server();
        this.proxyOptions = {
        proxy: {
            http: this.proxy,
            https: this.proxy,
        },
        };
        const chromeOptions = new ChromeOptions();
        chromeOptions.setProxy(this.proxyOptions);
        this.driver = new Builder().forBrowser('chrome').setChromeOptions(chromeOptions).build();
   */      global.driver =  driver;
    }  
    
    async perform(prop,operation,object,objecttype,value) {
        //console.log(prop.get(value));
        //console.log(operation);
        //console.log(object);
        //console.log(objecttype);
        //console.log(value);
        //await (await driver.manage().setTimeouts({implicit:(100000)}));
        //await driver.manage().setTimeouts({implicit:(100000)});


         await driver.manage().setTimeouts({implicit:(600000)});
         await driver.manage().window().setRect({ width: 1848, height: 1053 });

        switch (operation) {
            case "CLICK":
              //Perform click
              if (object==="saveSegmentBtn")
              {
                //await (await driver.findElement(await this.getObject(prop,object,objecttype))).sendKeys(Key.ENTER);
                const element = await driver.findElement(await this.getObject(prop,object,objecttype));
                await driver.executeScript("arguments[0].click()",element);
                break;
              }
              await (await driver.findElement(await this.getObject(prop,object,objecttype))).click();
              //await (await driver.findElement(await this.getObject(prop,object,objecttype))).sendKeys(Key.ENTER);
              break;
            case "SETTEXT":
              //Set text on control
              console.log("Inside switch case SETEXT:"+ await this.getObject(prop,object,objecttype));
              await (await driver.findElement(await this.getObject(prop,object,objecttype))).sendKeys(value);
              break;
            case "GOTOURL":
              //Get url of application
              console.log("inside switch case of gotourl" + await prop.get(value));
              //await driver.manage().window().setRect({ width: 1848, height: 1053 });
              //await driver.get("https://ttl.lemnisk.co/app");
              await driver.get(await prop.get(value));
              break;
            case "GETTEXT":
              //Get text of an element
              await (await driver.findElement(await this.getObject(prop,object,objecttype))).getText();
              break;
            case "SELECTITEM":
                //Select an item from the drop down
               let items = await driver.findElements(await this.getObject(prop, object, objecttype));
               /*
               items.forEach(async element => {
                    const  item  = await element.getText();
                    console.log(item);
                });
                */
               for (const element of items){
                    const item = await element.getText();
                    console.log(item);
                    if (item === value){
                        await element.click();
                        break;
                    }
               }
                break;
            case "WAIT":
                //wait for some minutes
                await new Promise(resolve => setTimeout(resolve, value));
                break;
            default:
                break;
          }
          
    }

    async getObject(prop,objectname,objecttype) {
        //Find by xpath
        const locator = await prop.get(objectname);

        if(objecttype=="XPATH"){
            return By.xpath(locator);
        }
        else if (objecttype=="CLASSNAME"){
            return By.className(locator);
        }
        else if (objecttype=="NAME"){
            return By.name(locator);
        }
        else if (objecttype=="CSS"){
            return By.css(locator);
        }
        else if (objecttype=="LINK"){
            return By.linkText(locator);
        }
        else if (objecttype=="PARTIALLINK"){
            return By.partialLinkText(locator);
        }
        else if (objecttype=="ID"){
            console.log(`Locator: ${objecttype} - ${locator}`);
            console.log("inside the by.id block :"+ locator);
            return By.id(prop.get(objectname));
        }
    }
}

module.exports = new Operations();