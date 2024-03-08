require('./fast-selenium.js'); // imports the fast-selenium script
const {Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const GenericEngageListPage = require('../pageobjects/genericEngageListPage')
const loginpage = require('./loginpage');
const testdata = require('./../objects/testData')
const { allure } = require("allure-mocha/runtime");
const path = require('path');
let prop;
//let driver;


class GenericEngageCreatePage extends GenericEngageListPage {

    constructor(driver){
        super(driver);
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
    async uploadAnImagefromLocal(objName,imagePath,imgNameObj,imageName) {
        try {
            const image = path.resolve(imagePath);
            //await driver.manage().setTimeouts({implicit: 5000});
            await opertn.perform(await prop,"WAIT", "", "", 4000)
            await opertn.perform(await prop,"UPLOAD", objName, "XPATH", image);
            
            // Locate the file input field and send the path of the image file
            //const fileInput = await driver.findElement(By.xpath("//input[@type='file']"));
            //await fileInput.sendKeys(image);

            const uploadedFileName = await opertn.perform(await prop,"GETTEXT", imgNameObj, "XPATH","");
            if (uploadedFileName == imageName)
            {
                allure.logStep("successfully uploaded");
            }
            else 
            {
                console.error("Uploaded file name does not match the expected name");
            // Handle the mismatch case, throw an error, or log accordingly
            }
        } catch (error) {
            console.error("Error during image upload:", error.message);
        // Handle the error, throw an error, or log accordingly
        }

       }

    async setEngagementName(engageName) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        await opertn.perform(await prop,"WAIT", "", "", 4000)
        await opertn.perform(await prop,"CLICK", "engagementName", "XPATH","");
        const temp = await opertn.perform(await prop,"GETVALUE", "engagementName", "XPATH","");
        console.log("the engagement engagement is : "+ temp);
        if (temp!=""){
           await opertn.perform(await prop,"CLEAR", "engagementName", "XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT", "engagementName", "XPATH",engageName)
        await opertn.perform(await prop,"WAIT", "", "", 2000)
    }

    async clearConfig(webObject){
        await opertn.perform(await prop,"CLEAR", webObject, "XPATH","");
    }

    async setEngagementLabel(engageLabel) {
        prop = await objt.getObjectRepository();
        await driver.manage().setTimeouts({ implicit: 10000 });
        await opertn.perform(await prop,"CLICK", "engagementLabel", "XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", 3000);
        await opertn.perform(await prop,"SETTEXT", "engagementLabel", "XPATH",engageLabel);
        await opertn.perform(await prop,"WAIT", "", "", 3000);
        await opertn.perform(await prop,"SELECTITEM", "engageLabellist", "XPATH", engageLabel);
        //await opertn.perform(await prop,"WAIT", "", "", "5000");
    }

    async searchOption(objName,OptionName){
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        
        await opertn.perform(await prop,"CLICK",objName,"XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SETTEXT",objName,"XPATH",OptionName);
    }

    async pickOption(objsList,OptionName) {
        prop = await objt.getObjectRepository();
       // await this.driver.manage().setTimeouts({ implicit: 1000000 });
        
        await opertn.perform(await prop,"WAIT", "", "", 5000)
        await opertn.perform(await prop,"SELECTITEM",objsList, "XPATH",OptionName);
        await opertn.perform(await prop,"WAIT", "", "", 2000)
    }

    async clickOnInputBox(objName) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        
        await opertn.perform(await prop,"WAIT","","",5000)
        await opertn.perform(await prop,"CLICK",objName, "XPATH","")
    }
    

    async clickOnOption(objsList,OptionName) {
        prop = await objt.getObjectRepository();
        //await this.driver.manage().setTimeouts({ implicit: 1000000 });
        
        await opertn.perform(await prop,"WAIT","","",5000);
        await opertn.perform(await prop,"SELECTITEM",objsList, "XPATH", OptionName)
        await opertn.perform(await prop,"WAIT", "", "",2000);
    }

    async selectOption(objName,objsList,OptionName){
        await driver.manage().setTimeouts({ implicit: 10000 });
        
        prop = await objt.getObjectRepository();
        await opertn.perform(await prop,"WAIT","","",3000)
        await opertn.perform(await prop,"CLICK",objName, "XPATH","")
        //await opertn.perform(await prop,"CLICK",objName,"XPATH","");
        await opertn.perform(await prop,"WAIT","","",2000)
        await opertn.perform(await prop,"SELECTITEM",objsList, "XPATH", OptionName)
    }

    async selectSearchOption(objName,objsList,OptionName){
        await driver.manage().setTimeouts({ implicit: 10000 });
        
        prop = await objt.getObjectRepository();
        await opertn.perform(await prop,"WAIT", "", "", 3000);
        await opertn.perform(await prop,"CLICK",objName,"XPATH","");
        await opertn.perform(await prop,"CLICK",objName,"XPATH","");
        await opertn.perform(await prop,"WAIT", "", "", 3000);
        await opertn.perform(await prop,"SETTEXT",objName,"XPATH",OptionName);
        await opertn.perform(await prop,"WAIT", "", "", 2000);
        await opertn.perform(await prop,"SELECTITEM",objsList, "XPATH",OptionName);

        //await this.searchOption(objName,OptionName);
        //await opertn.perform(await prop,"SELECTBYKEY",objName, "XPATH", OptionName)
        //await this.searchOption(objName,OptionName);
        //await this.pickOption(objsList,OptionName);
    }

    async expandTab(tabName) {
        prop = await objt.getObjectRepository();
        
        //await driver.manage().setTimeouts({ implicit: 10000 });
        //await opertn.perform(await prop,"WAIT", "", "", "10000")
        await opertn.perform(await prop,"WAIT","", "", 3000);
        await opertn.perform(await prop,"CLICK",tabName, "XPATH", "")
        //const element = this.driver.findElement(By.xpath(tabName));
        //await this.driver.executeScript("arguments[0].click()",element);
       // await opertn.perform(await prop,"WAIT", "", "", "3000")
    }

     async expandConfigureTemplate() {
        prop = await objt.getObjectRepository();
        //await driver.manage().setTimeouts({ implicit: 10000 });
        await opertn.perform(await prop,"WAIT", "", "", 3000)
        await opertn.perform(await prop,"CLICK","configureTempTab","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", 3000)
    } 

    async expandScheduleSettingTab() {
        prop = await objt.getObjectRepository();
       // await driver.manage().setTimeouts({ implicit: 10000 });
       await opertn.perform(await prop,"WAIT", "", "", 3000)
        await opertn.perform(await prop,"CLICK","scheduleSettingTab","XPATH","")
        await opertn.perform(await prop,"WAIT", "", "", 3000)
    }

    async clickSaveEngageBtn(){
        prop = await objt.getObjectRepository();
        

        //await driver.manage().setTimeouts({implicit: 100000 });
        
        await opertn.perform(await prop,"WAIT", "", "", 5000);
        await opertn.perform(await prop, "CLICK", "engSaveBtn", "XPATH", "");

        
        //await opertn.perform(await prop, "CLICK", "engSaveBtn", "XPATH", "");

        //await opertn.perform(await prop,"WAIT", "", "", "3000")
        /*  setTimeout(async () => {
            await opertn.perform(await prop, "CLICK", "engSaveBtn", "XPATH", "");
        }, 4000);  */
        
        //await opertn.perform(await prop,"CLICK","engSaveBtn","XPATH","")
        //await opertn.perform(await prop,"WAIT", "", "", "5000")
    }

}


module.exports = GenericEngageCreatePage;