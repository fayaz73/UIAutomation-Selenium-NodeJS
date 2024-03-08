const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
let prop;



class SegmentCreation extends BasePage {
    
    
    constructor(){
        super()
        this.driver = driver;
        this.prop = prop;
    }




    async createSegment(username,password,driver){
        //this.timeout(1000000)
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 100000 });
        await this.driver.manage().setTimeouts({ implicit: 100000 });
        await opertn.perform(await prop,"CLICK","selectExistingUserSeg","XPATH","");
        await opertn.perform(await prop,"CLICK","creatSegmentBtn","XPATH","");
        await opertn.perform(await prop,"SETTEXT", "segmentNameTxtBox", "XPATH", "cdpTestSegTest888")
        await opertn.perform(await prop,"SETTEXT", "segmentDescriptionTxtArea", "XPATH", "Test Segment description goes here")
        await opertn.perform(await prop,"CLICK","segmentPriorityDropDown","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtPriorityItem", "XPATH", "Highest")
        await opertn.perform(await prop,"CLICK", "segmentDimensionDropDown", "XPATH", "")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtDimesion", "XPATH", "Age")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "segmentOperator", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtMenuOperator", "XPATH", "Lesser Than")
        await opertn.perform(await prop,"SETTEXT", "segmentRule1InpCondition", "XPATH", "35")
        await opertn.perform(await prop,"CLICK", "applyRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "addRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"CLICK", "segmentDimensionDropDown", "XPATH", "")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtDimesion", "XPATH", "Age")
        await opertn.perform(await prop,"CLICK", "segmentOperator", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtMenuOperator", "XPATH", "Lesser Than")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "segmentRule1InpCondition", "XPATH", "")
        await opertn.perform(await prop,"SETTEXT", "segmentRule1InpCondition", "XPATH", "45")
        await opertn.perform(await prop,"CLICK", "applyRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"CLICK", "saveSegmentBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "viewThisBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        const actualOutput = await opertn.perform(await prop, "GETTEXT","labelCreatedSegment","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        console.log("the actual ouput is :"+actualOutput);
        const  expResult = testdata.segmentCreatePage.expectedOutput.output.succMsg;
        console.log("the expected output is "+expResult);
        //await clickSegBreadCrum(username,password,driver);
        await loginpage.validate(actualOutput,expResult);
        console.log("done with the creatSegment test method");
        
    }

    async createSegmentWithSameName(username,password,driver){
        //this.timeout(1000000)
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","selectExistingUserSeg","XPATH","");
        await opertn.perform(await prop,"CLICK","creatSegmentBtn","XPATH","");
        await opertn.perform(await prop,"SETTEXT", "segmentNameTxtBox", "XPATH", "cdpTestSegmentAutoTest")
        await opertn.perform(await prop,"SETTEXT", "segmentDescriptionTxtArea", "XPATH", "Test Segment description goes here")
        await opertn.perform(await prop,"CLICK","segmentPriorityDropDown","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtPriorityItem", "XPATH", "Highest")
        await opertn.perform(await prop,"CLICK", "segmentDimensionDropDown", "XPATH", "")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtDimesion", "XPATH", "Age")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "segmentOperator", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtMenuOperator", "XPATH", "Lesser Than")
        await opertn.perform(await prop,"SETTEXT", "segmentRule1InpCondition", "XPATH", "400")
        await opertn.perform(await prop,"CLICK", "applyRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "addRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"CLICK", "segmentDimensionDropDown", "XPATH", "")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtDimesion", "XPATH", "Age")
        await opertn.perform(await prop,"CLICK", "segmentOperator", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtMenuOperator", "XPATH", "Lesser Than")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "segmentRule1InpCondition", "XPATH", "")
        await opertn.perform(await prop,"SETTEXT", "segmentRule1InpCondition", "XPATH", "50")
        await opertn.perform(await prop,"CLICK", "applyRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"CLICK", "saveSegmentBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        /* await opertn.perform(await prop,"CLICK", "viewThisBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000") */
        const actualOutput = await opertn.perform(await prop, "GETTEXT","sameNameErrorMsg","XPATH","");
        console.log("the actual ouput is :"+actualOutput);
        const  expResult = testdata.segmentCreatePage.expectedOutput.output.errMsg.sameNameErrMsg;
        console.log("the expected output is "+expResult);
        await loginpage.validate(actualOutput,expResult);
    }

    async testDeleteAllRulesInSeg(username,password,driver){
        //this.timeout(1000000)
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","selectExistingUserSeg","XPATH","");
        await opertn.perform(await prop,"CLICK","creatSegmentBtn","XPATH","");
        await opertn.perform(await prop,"SETTEXT", "segmentNameTxtBox", "XPATH", "Ins_demo_upsell")
        await opertn.perform(await prop,"SETTEXT", "segmentDescriptionTxtArea", "XPATH", "Test Segment description goes here")
        await opertn.perform(await prop,"CLICK","segmentPriorityDropDown","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtPriorityItem", "XPATH", "Highest")
        await opertn.perform(await prop,"CLICK", "segmentDimensionDropDown", "XPATH", "")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtDimesion", "XPATH", "Age")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK", "segmentOperator", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtMenuOperator", "XPATH", "Lesser Than")
        await opertn.perform(await prop,"SETTEXT", "segmentRule1InpCondition", "XPATH", "40")
        await opertn.perform(await prop,"CLICK", "applyRuleBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"CLICK","deleteRuleBnt","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "3000")
        const actualOutput = await opertn.perform(await prop, "GETTEXT","atleastOneRuleErrorMsg","XPATH","");
        console.log("the actual ouput is :"+actualOutput);
        const  expResult = testdata.segmentCreatePage.expectedOutput.output.errMsg.atleastOneRuleError;
        console.log("the expected output is "+expResult);
        await loginpage.validate(actualOutput,expResult);
    }

    async testSegCreationWithOutRule(username,password,driver){

        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"CLICK","selectExistingUserSeg","XPATH","");
        await opertn.perform(await prop,"CLICK","creatSegmentBtn","XPATH","");
        await opertn.perform(await prop,"SETTEXT", "segmentNameTxtBox", "XPATH", "e_touch_camp_Testing")
        await opertn.perform(await prop,"SETTEXT", "segmentDescriptionTxtArea", "XPATH", "Test Segment description goes here")
        await opertn.perform(await prop,"CLICK","segmentPriorityDropDown","XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        await opertn.perform(await prop,"SELECTITEM", "selectSgmtPriorityItem", "XPATH", "Highest")

        await opertn.perform(await prop,"CLICK", "saveSegmentBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
        /* await opertn.perform(await prop,"CLICK", "viewThisBtn", "XPATH", "")
        await opertn.perform(await prop,"WAIT", "", "", "5000") */
        const actualOutput = await opertn.perform(await prop, "GETTEXT","addAtleastOneRuleErrorMsg","XPATH","");
        console.log("the actual ouput is :"+actualOutput);
        const  expResult = testdata.segmentCreatePage.expectedOutput.output.errMsg.addAtleastOneRule;
        console.log("the expected output is "+expResult);
        await loginpage.validate(actualOutput,expResult);
        

    }

    async clickSegBreadCrum(username,password,driver) {
        prop = await objt.getObjectRepository();
        await this.driver.manage().setTimeouts({ implicit: 1000000 });
        console.log("Inside the clickSegBreadCrum")
        await opertn.perform(await prop,"CLICK","segmentBreadCrum","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", "5000")
    }


}

module.exports = new SegmentCreation();





