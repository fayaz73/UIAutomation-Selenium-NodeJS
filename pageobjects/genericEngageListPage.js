require('./fast-selenium.js'); // imports the fast-selenium script
const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
let prop;


class GenericEngageListPage  extends BasePage  {

    constructor(driver){
        super(driver);
        this.driver = driver;
        this.prop = prop;
    }

  /*   clickOnChannel = async (channelName, driver) => {
        //this.driver = driver;
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"SELECTITEM", "channelList", "XPATH",channelName)
        //await opertn.perform(await prop,"CLICK","selectExistingUserSeg","XPATH","");
    };

    clickAddEngagement = async () => {
        this.driver = driver;
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","addEngagement","XPATH","");
    }; */

    async clickOnChannel(channelName){
        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
       
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SELECTITEM", "channelList", "XPATH",channelName)
        await opertn.perform(await prop,"WAIT", "", "", 5000)
    }

    async clickAddEngagement(driver) {
        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
       
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"CLICK","addEngagement","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", 5000)
    }

    async searchAndOpenEngagement(EnagementID) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
       
        await opertn.perform(await prop,"SETTEXT","engageSearch","XPATH",EnagementID);
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        const engid =  await opertn.perform(await prop,"GETTEXT","engID","XPATH","")
        if (engid==EnagementID)
        {
            await opertn.perform(await prop,"CLICK","engName","XPATH","")
        }
        else{
            console.log("segment not found")
        }
    }

    async searchAndCopyEngagement(EnagementID) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
       
        await opertn.perform(await prop,"SETTEXT","engageSearch","XPATH",EnagementID);
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        const engid =  await opertn.perform(await prop,"GETTEXT","engID","XPATH","")
        if (engid==EnagementID)
        {
            await opertn.perform(await prop,"CLICK","engageCopyBtn","XPATH","")
        }
        else{
            console.log("segment not found")
        }
    }

}

module.exports =  GenericEngageListPage;