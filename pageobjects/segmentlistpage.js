const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
let prop;


class SegmentList extends BasePage {
    

    constructor(){
        super()
        this.driver = driver;
        this.prop = prop;
    }


    async clickONAddSementBtn(username,password,driver){
        //this.timeout(1000000)
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        //await loginpage.log_in(username,password,driver);
        await opertn.perform(await prop,"CLICK","campaignMenuBtn","XPATH","");
        await opertn.perform(await prop,"CLICK","segmentsMenuBtn","XPATH","");
        //await opertn.perform(await prop,"WAIT", "", "", "20000")
        await opertn.perform(await prop,"CLICK","addSegmentBtn","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        const actualOutput = await opertn.perform(await prop, "GETTEXT","labelCreateNewSegment","XPATH","");
        console.log("the actual ouput is :"+actualOutput);
        const  expResult = testdata.segmentListPage.expectedOutput.output.succMsg;
        console.log("the expected output is "+expResult);
        await loginpage.validate(actualOutput,expResult);
    }

    async selectAndOpenSegment(SegmentID,driver) {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","campaignMenuBtn","XPATH","");
        await opertn.perform(await prop,"CLICK","segmentsMenuBtn","XPATH","");
        await opertn.perform(await prop,"SETTEXT","segmentSearchBox","XPATH",SegmentID);
        await opertn.perform(await prop,"WAIT", "", "", "10000")
        const segid =  await opertn.perform(await prop,"GETTEXT","segID","XPATH","")
        if (segid==SegmentID)
        {
            await opertn.perform(await prop,"CLICK","segName","XPATH","")
        }
        else{
            console.log("segment not found")
        }

    }
}

module.exports = new SegmentList();
