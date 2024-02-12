const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const GenericEngageListPage = require('../pageobjects/genericEngageListPage')
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
let prop;

class GenericEngageCreatePage extends GenericEngageListPage {

    constructor(){
        super();
        this.driver = driver;
        this.prop = prop;
    }

    /* setEngagementName = async(engageName) => {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"SETTEXT", "engagementName", "XPATH",engageName)
    };

    setEngagementLabel = async(engageLabel) => {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK", "engagementLabel", "XPATH", engageLabel)
        await opertn.perform(await prop,"SELECTITEM", "engagementLabel", "XPATH", engageLabel)
    };
 */

    async setEngagementName(engageName) {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"SETTEXT", "engagementName", "XPATH",engageName)
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

    async setEngagementLabel(engageLabel) {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK", "engagementLabel", "XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "3000")
        await opertn.perform(await prop,"SELECTITEM", "engageLabellist", "XPATH", engageLabel)
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

    async expandGeneralTab() {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK", "generalTab", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

    async expandConfigureTemplate() {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","configureTempTab","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

    async expandScheduleSettingTab() {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","scheduleSettingTab","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

    async clickSaveEngageBtn(){
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","engSaveBtn","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

}


module.exports = GenericEngageCreatePage;