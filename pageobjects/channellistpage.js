require('./fast-selenium.js'); // imports the fast-selenium script
const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
const EngageCreatePage = require('../pageobjects/genericEngageCreatePage');

let prop;


class ChannelList extends EngageCreatePage {
    

    constructor(driver){
        super(driver)
        this.driver = driver;
        this.prop = prop;
    }

    async clickONChannelTab() {

        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"WAIT", "", "", 7000);
        await opertn.perform(await prop,"CLICK","campaignMenuBtn","XPATH","");
        await opertn.perform(await prop,"CLICK","channelsMenuBtn","XPATH","");        
    }

    async clickOnSpecificChannelRCS(channelName){
        // prop = await objt.getObjectRepository();
         //await driver.manage().setTimeouts({ implicit: 1000000 });
         prop = await objt.getObjectRepository();
         //await driver.manage().setTimeouts({ implicit: 1000000 });
         await opertn.perform(await prop,"WAIT", "", "", 6000)
         await opertn.perform(await prop,"SELECTITEM", "channelList", "XPATH",channelName)
         await opertn.perform(await prop,"WAIT", "", "", 6000)
     }

    async clickOnSpecificChannel(channelName){
       // prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SELECTITEM", "channelList", "XPATH",channelName)
        await opertn.perform(await prop,"WAIT", "", "", 5000)
    }

    async clickOnAddEngBtn(){
        //this.timeout(1000000)
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await this.clickAddEngagement();
    }

    async selectSegment(segmentName) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        //await opertn.perform(await prop,"CLICK", "searchSegment_Channelflow", "XPATH","");
        await opertn.perform(await prop,"CLICK", "searchSegment_Channelflow", "XPATH","");
        await opertn.perform(await prop,"SETTEXT","searchSegment_Channelflow","XPATH",segmentName);
        await opertn.perform(await prop,"WAIT", "", "", 3000)
        await opertn.perform(await prop,"SELECTITEM", "segmentList_channelflow", "XPATH",segmentName);
        await opertn.perform(await prop,"WAIT", "", "", 4000)
        await opertn.perform(await prop,"CLICK", "proceedBtn_channelflow", "XPATH","");
    }

    async searchAndOpenEngagement2(EnagementID) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        //await opertn.perform(await prop,"CLICK","campaignMenuBtn","XPATH","");
        //await opertn.perform(await prop,"CLICK","channelsMenuBtn","XPATH","");

        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SETTEXT","engageSearch","XPATH",EnagementID);
        await opertn.perform(await prop,"CLICK","engName","XPATH","");
        //await opertn.perform(await prop,"WAIT", "", "", "5000")
    /*     const engid =  await opertn.perform(await prop,"GETTEXT","engID","XPATH","")
        if (engid==EnagementID)
        {
            await opertn.perform(await prop,"CLICK","engName","XPATH","")
        }
        else{
            console.log("segment not found")
        } */
    }

    async searchAndOpenEngagement(EnagementID) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","campaignMenuBtn","XPATH","");
        await opertn.perform(await prop,"CLICK","channelsMenuBtn","XPATH","");

        await opertn.perform(await prop,"SETTEXT","engageSearch","XPATH",EnagementID);
        await opertn.perform(await prop,"WAIT", "", "", "5000")
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
        await opertn.perform(await prop,"WAIT", "", "", "10000")
        const engid =  await opertn.perform(await prop,"GETTEXT","engID","XPATH","")
        if (engid==EnagementID)
        {
            await opertn.perform(await prop,"CLICK","engageCopyBtn","XPATH","")
        }
        else{
            console.log("segment not found")
        }
    }

    async getEngageId(EngName) {
        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SETTEXT","engageSearch","XPATH",EngName);
        console.log("reached here");
        await opertn.perform(await prop,"WAIT", "", "", 2000)
        const engageName = await opertn.perform(await prop,"GETTEXT","engName","XPATH", "");
        console.log("engagement name is : "+engageName);
        await opertn.perform(await prop,"WAIT", "", "", 2000)
        if (EngName==engageName) {
            const EngageID =  await opertn.perform(await prop,"GETTEXT","engID", "XPATH", "");
            console.log(EngageID);
            await opertn.perform(await prop,"WAIT", "", "", 3000)
            await opertn.perform(await prop,"CLICK","engageSearchCloseBtn","XPATH","");
            await opertn.perform(await prop,"WAIT", "", "", 3000)
            return EngageID;
        }
    }
    
}

module.exports = ChannelList;
