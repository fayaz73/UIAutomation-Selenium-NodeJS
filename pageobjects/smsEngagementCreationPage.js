const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const EngageCreatePage = require('../pageobjects/genericEngageCreatePage');
const testdata = require('./../objects/testData')
let prop;
let smsEngage;


class smsEngageCreation extends EngageCreatePage {
    
    constructor(){
        super();
        this.driver = driver;
        this.prop = prop;
        //smsEngage = new EngageCreatePage(this.driver);
    }

    async createSMSEngagement(username,password,driver){
       /* await smsEngage.clickOnChannel("SMS");
       await smsEngage.clickAddEngagement();
       await smsEngage.expandGeneralTab();
       await smsEngage.setEngagementName("engagement0002");
       await smsEngage.setEngagementLabel("Auto Loan"); */

       await this.clickOnChannel("SMS");
       await this.clickAddEngagement();
       await this.expandGeneralTab();
       await this.setEngagementName("engagementTest002");
       await this.setEngagementLabel("lead nurture");
       await this.expandConfigureTemplate();
       await this.setSMSMessageTemplate("sms message goes here");
       await this.clickSaveEngageBtn();

    }

    async setSMSMessageTemplate(msges) {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","addSMSMsgText","XPATH","");
        await opertn.perform(await prop,"SETTEXT","addSMSMsgText","XPATH",msges);
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

}

module.exports = new smsEngageCreation();