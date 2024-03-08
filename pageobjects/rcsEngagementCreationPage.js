require('./fast-selenium.js'); // imports the fast-selenium script
const {Browser, Builder, By, Key, until} = require('selenium-webdriver');
var BasePage = require('../pageobjects/basepage');
var webdriver = require('selenium-webdriver');
const assert = require("assert")
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperations');
const loginpage = require('./loginpage');
const ChannelList = require('./channellistpage.js');
const EngageCreatePage = require('../pageobjects/genericEngageCreatePage');
const testdata = require('./../objects/testData')
const rcsTestdata = require('./../objects/rcsTestData')
const path = require("path");
let prop;
let smsEngage;
let engId;

/* class rcsEngageCreation extends EngageCreatePage{

} */

class rcsEngageCreation extends ChannelList {
    
    constructor(driver){
        super(driver);
        this.driver = driver;
        this.prop = prop;
        //smsEngage = new EngageCreatePage(this.driver);
    }

    async createRCSEngagementOfGoalTypeTrack(EngagementName){
       await this.expandTab("generalTab");
       await this.setEngagementName(EngagementName);
       await this.selectSearchOption("apiInput","apiList","RCS eng config")
       await this.setEngagementLabel("Personal Loan");
       await this.expandTab("generalTab");

       await this.expandTab("addAGoalTab");
       await this.selectOption("goalTypeDropDown","dropDownList","Track")
       await this.selectSearchOption("goalInput","goalList","Application Backgrounded")
       await this.expandTab("addAGoalTab");

       await this.expandTab("configureParamTab")
       await this.setTemplateId("templateId123456789")
       await this.setMandatoryParameters("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
       await this.setContentTags("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
       await this.clickAttributeBtn();
       await this.setContentAttribute("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
       await this.expandTab("configureParamTab")

       await this.expandScheduleSettingTab();
       await this.expandScheduleSettingTab();
       await this.clickSaveEngageBtn();

    }


    async updateRCSEngagementOfGoalTypeTrack(goalTypeTrackEvent){
        await this.expandTab("generalTab");
        //await this.setEngagementName("engagementTest003");
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Track")
        await this.selectSearchOption("goalInput","goalList",goalTypeTrackEvent)
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.setContentTags("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        //await this.clickAttributeBtn();
        await this.setContentAttribute("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
 
     }

     async copyRCSEngagementOfGoalTypeTrack(goalTypeTrackEvent,EngageName){
        await this.expandTab("generalTab");
        await this.setEngagementName(EngageName);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Track")
        await this.selectSearchOption("goalInput","goalList",goalTypeTrackEvent)
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.setContentTags("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
       // await this.clickAttributeBtn();
        await this.setContentAttribute("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
     }



    async createRCSEngagementOfGoalTypePage(goalTypePageURL,EngageName){
        await this.expandTab("generalTab");
        await this.setEngagementName(EngageName);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL(goalTypePageURL);
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.setContentTags("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456Mandatory-_=+!@#$%^&*123456MandatoryParameter");
        await this.expandTab("configureParamTab")
        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
 
     }

     async updateRCSEngagementOfGoalTypePage(goalTypePageURL){
        await this.expandTab("generalTab");
        //await this.setEngagementName("engagementTest003");
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL(goalTypePageURL);
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456MandatoryParameter123456MandatoryParameter");
        await this.setContentTags("123456MandatoryParameter123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456MandatoryParameter123456MandatoryParameter");
        await this.expandTab("configureParamTab")
        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
     }

     async copyRCSEngagementOfGoalTypePage(goalTypePageURL,EngageName){
        await this.expandTab("generalTab");
        await this.setEngagementName(EngageName);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL(goalTypePageURL);
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456MandatoryParameter123456MandatoryParameter");
        await this.setContentTags("123456MandatoryParameter123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456MandatoryParameter123456MandatoryParameter");
        await this.expandTab("configureParamTab")
        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
     }



     async createRCSEngagementOfGoalTypeNone(EngageName){
        await this.expandTab("generalTab");
        await this.setEngagementName(EngageName);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","None")
        //await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456MandatoryParameter123456MandatoryParameter");
        await this.setContentTags("123456MandatoryParameter123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456MandatoryParameter123456MandatoryParameter");
        await this.expandTab("configureParamTab")
        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
 
     }

     async updateRCSEngagementOfGoalTypeNone(){
        //await this.expandTab("generalTab");//div/p[contains(text(),'API')]/..//input
        //await this.setEngagementName("engagementTest003");
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","None")
        //await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
 
     }

     async copyRCSEngagementOfGoalTypeNone(EngageName){
        await this.expandTab("generalTab");
        await this.setEngagementName(EngageName);
        await this.selectOption("apiInput","apiList","RCS eng config")
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");
        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","None")
        //await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");
        await this.expandTab("configureParamTab")
        await this.setTemplateId("templateId123456789")
        await this.setMandatoryParameters("123456MandatoryParameter123456MandatoryParameter");
        await this.setContentTags("123456MandatoryParameter123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456MandatoryParameter123456MandatoryParameter");
        await this.expandTab("configureParamTab")
        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
 
     }



    
     async createRCSEngagementWithOnlyMandatoryParam(tempp,engNames){

        //await driver.manage().setTimeouts({ implicit: 100000 });
        
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        //await this.expandTab("generalTab");

       // await this.expandConfigureTemplate();
        await this.expandTab("ConfigureParamExpandArrowBtn");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters(tempp);
        await this.setContentTags("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
        await this.expandTab("ConfigureParamExpandArrowBtn");
        //await this.expandConfigureTemplate();

        //await this.expandTab("addAGoalTab");
        //await this.selectOption("goalTypeDropDown","dropDownList","Track")
        //await this.selectOption("goalInput","goalList","Application Backgrounded")
        //await this.selectSearchOption("goalInput","goalList","Application Backgrounded")
        //await this.expandTab("addAGoalTab");

        

        //await this.expandScheduleSettingTab();
        //await this.expandScheduleSettingTab();
        await this.clickSaveEngageBtn();
       /*  setTimeout(async () => {
         await this.clickSaveEngageBtn();
        }, 7000); */
     }

     async updateRCSEngagementWithOnlyMandatoryParam(tempp){
        await this.expandTab("generalTab");
        //await this.setEngagementName("engagementTest003");
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Track")
        await this.selectSearchOption("goalInput","goalList","Application Backgrounded")
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab")
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters(tempp);
        await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
 
     }

     async copyRCSEngagementWithOnlyMandatoryParam(tempp,engNames){
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames+"cpy");
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Track")
        await this.selectSearchOption("goalInput","goalList","Application Backgrounded")
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters(tempp);
        await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab");

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
 
     }



     async createRCSEngagementWithOnlyContentTags(tempp,engNames){
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","None")
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags(tempp);
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
 
     }

     async updateRCSEngagementWithOnlyContentTags(tempp){
        await this.expandTab("generalTab");
        //await this.setEngagementName("engagementTest003");
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","None")
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags(tempp);
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
 
     }

     async copyRCSEngagementWithOnlyContentTags(tempp,engNames){
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames+"cpy");
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags(tempp);
        await this.clickAttributeBtn();
        await this.setContentAttribute("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
 
     }

     
      async createRCSEngagementContentTagsWithImage(tempp,engNames){
         await this.expandTab("generalTab");
         await this.setEngagementName(engNames);
         await this.selectSearchOption("apiInput","apiList","RCS eng config")
         await this.setEngagementLabel("Personal Loan");
         await this.expandTab("generalTab");

         await this.expandTab("addAGoalTab");
         await this.selectOption("goalTypeDropDown","dropDownList","None")
         await this.expandTab("addAGoalTab");

         await this.expandTab("configureParamTab");
         await this.setTemplateId("123456contentTags-_=+!@#$%^&*123456contentTagsparameter")
         await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.setContentTagWithMedia(tempp);
         await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
         await this.uploadAnImagefromLocal("ContentTagUploadBtn","./resources/selenium-snapshot.jpeg","ContentTagUploadedLabel",
            "selenium-snapshot.jpeg" );
         await this.clickAttributeBtn();
         await this.setContentAttribute("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.expandTab("configureParamTab")

         await this.expandScheduleSettingTab();
         await this.expandScheduleSettingTab();

         await this.clickSaveEngageBtn();

      }

      async updateRCSEngagementContentTagsWithImage(tempp){
         await this.expandTab("generalTab");
         //await this.setEngagementName("engagementTest003");
         //await this.selectSearchOption("apiInput","apiList","RCS eng config")
         await this.setEngagementLabel("Personal Loan");
         await this.expandTab("generalTab");

         await this.expandTab("addAGoalTab");
         await this.selectOption("goalTypeDropDown","dropDownList","None")
         await this.expandTab("addAGoalTab");

         await this.expandTab("configureParamTab");
         await this.setTemplateId("123456contentTags-_=+!@#$%^&*123456contentTagsparameter")
         await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.setContentTagWithMedia(tempp);
         await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
         await this.uploadAnImagefromLocal("ContentTagUploadBtn","./resources/selenium-snapshot.jpeg","ContentTagUploadedLabel",
            "selenium-snapshot.jpeg" );
         await this.clickAttributeBtn();
         await this.setContentAttribute("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.expandTab("configureParamTab")

         await this.expandScheduleSettingTab();
         await this.expandScheduleSettingTab();

         await this.clickSaveEngageBtn();

      }

      async copyRCSEngagementContentTagsWithImage(tempp,engNames){
         await this.expandTab("generalTab");
         await this.setEngagementName(engNames+"cpy");
         await this.selectSearchOption("apiInput","apiList","RCS eng config")
         await this.setEngagementLabel("Personal Loan");
         await this.expandTab("generalTab");

         await this.expandTab("addAGoalTab");
         await this.selectOption("goalTypeDropDown","dropDownList","Page")
         await this.setPageURL("https://www.hdfcbank.com");
         await this.expandTab("addAGoalTab");

         await this.expandTab("configureParamTab");
         await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
         await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.setContentTagWithMedia(tempp);
         await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
         await this.uploadAnImagefromLocal("ContentTagUploadBtn","./resources/selenium-snapshot.jpeg","ContentTagUploadedLabel",
            "selenium-snapshot.jpeg" );
         await this.clickAttributeBtn();
         await this.setContentAttribute("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
         await this.expandTab("configureParamTab")

         await this.expandScheduleSettingTab();
         await this.expandScheduleSettingTab();

         await this.clickSaveEngageBtn();

      }



     async createRCSEngagementWithOnlyContentAttributes(tempp,engNames){
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames);
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");
        
        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
        await this.setContentTags("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute(tempp);
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
     }

     async updateRCSEngagementWithOnlyContentAttributes(tempp){
        await this.expandTab("generalTab");
        //await this.setEngagementName("engagementTest003");
        //await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute(tempp);
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
     }

     async copyRCSEngagementWithOnlyContentAttributes(tempp,engNames){
        await this.expandTab("generalTab");
        await this.setEngagementName(engNames+"cpy");
        await this.selectSearchOption("apiInput","apiList","RCS eng config")
        await this.setEngagementLabel("Personal Loan");
        await this.expandTab("generalTab");

        await this.expandTab("addAGoalTab");
        await this.selectOption("goalTypeDropDown","dropDownList","Page")
        await this.setPageURL("https://www.hdfcbank.com");
        await this.expandTab("addAGoalTab");

        await this.expandTab("configureParamTab");
        await this.setTemplateId("123456!@#$%%^&*-_123456MandatoryParameter")
        await this.setMandatoryParameters("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
        await this.clickAttributeBtn();
        await this.setContentAttribute(tempp);
        await this.expandTab("configureParamTab")

        await this.expandScheduleSettingTab();
        await this.expandScheduleSettingTab();

        await this.clickSaveEngageBtn();
     }

     async createRCSEngagementWithContentAttributesImage(tempp,engNames){
      await this.expandTab("generalTab");
      await this.setEngagementName(engNames);
      await this.selectSearchOption("apiInput","apiList","RCS eng config")
      await this.setEngagementLabel("Personal Loan");
      await this.expandTab("generalTab");

      await this.expandTab("addAGoalTab");
      await this.selectOption("goalTypeDropDown","dropDownList","Page")
      await this.setPageURL("https://www.hdfcbank.com");
      await this.expandTab("addAGoalTab");
      
      await this.expandTab("configureParamTab");
      await this.setTemplateId("123456contentTags-_=+!@#$%^&*123456contentTagsparameter")
      await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
      await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
      await this.clickAttributeBtn();
      await this.setContentAttributeWithMedia(tempp);
      await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
      await this.uploadAnImagefromLocal("ContentAttributeUploadBtn","./resources/selenium-snapshot.jpeg","ContentAttributeUploadedLabel",
            "selenium-snapshot.jpeg" );
      await this.expandTab("configureParamTab")

      await this.expandScheduleSettingTab();
      await this.expandScheduleSettingTab();

      await this.clickSaveEngageBtn();
   }

   async updateRCSEngagementWithOnlyContentAttributesImage(tempp){
      await this.expandTab("generalTab");
      //await this.setEngagementName("engagementTest003");
      //await this.selectSearchOption("apiInput","apiList","RCS eng config")
      await this.setEngagementLabel("Personal Loan");
      await this.expandTab("generalTab");

      await this.expandTab("addAGoalTab");
      await this.selectOption("goalTypeDropDown","dropDownList","Page")
      await this.setPageURL("https://www.hdfcbank.com");
      await this.expandTab("addAGoalTab");

      await this.expandTab("configureParamTab");
      await this.setTemplateId("123456contentTags-_=+!@#$%^&*123456contentTagsparameter")
      await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
      await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
      await this.clickAttributeBtn();
      await this.setContentAttributeWithMedia(tempp);
      await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
      await this.uploadAnImagefromLocal("ContentAttributeUploadBtn","./resources/selenium-snapshot.jpeg","ContentAttributeUploadedLabel",
            "selenium-snapshot.jpeg" );
      await this.expandTab("configureParamTab")
      

      await this.expandScheduleSettingTab();
      await this.expandScheduleSettingTab();

      await this.clickSaveEngageBtn();
   }

   async copyRCSEngagementWithOnlyContentAttributesImage(tempp,engNames){
      await this.expandTab("generalTab");
      await this.setEngagementName(engNames+"cpy");
      await this.selectSearchOption("apiInput","apiList","RCS eng config")
      await this.setEngagementLabel("Personal Loan");
      await this.expandTab("generalTab");

      await this.expandTab("addAGoalTab");
      await this.selectOption("goalTypeDropDown","dropDownList","Page")
      await this.setPageURL("https://www.hdfcbank.com");
      await this.expandTab("addAGoalTab");

      await this.expandTab("configureParamTab");
      await this.setTemplateId("123456contentTags-_=+!@#$%^&*123456contentTagsparameter")
      await this.setMandatoryParameters("123456contentTags-_=+!@#$%^&*123456contentTagsparameter");
      await this.setContentTags("123456!@#$%%^&*-_123456MandatoryParameter");
      await this.clickAttributeBtn();
      await this.setContentAttributeWithMedia(tempp);
      await this.selectOption("contentTagsMediaDropDown","MediaList","Media");
      await this.uploadAnImagefromLocal("ContentAttributeUploadBtn","./resources/selenium-snapshot.jpeg","ContentAttributeUploadedLabel",
            "selenium-snapshot.jpeg" );
      await this.expandTab("configureParamTab")

      await this.expandScheduleSettingTab();
      await this.expandScheduleSettingTab();

      await this.clickSaveEngageBtn();
   }


    

     async createDictionarySync(keysArray, valuesArray) 
     {
      const dictionary = {};
  
      keysArray.forEach((key, index) => {
          dictionary[key] = valuesArray[index];
      });
  
      return dictionary;
      }
      
     async validating2(tabObjs,objName,expResult,engName) 
     {
      //const channellstpge= new ChannelList(await driver);
      //driver.manage().setTimeouts({ implicit: 100000 });
      
         prop = await objt.getObjectRepository();
         const egid = await this.getEngageId(engName);
         await this.searchAndOpenEngagement2(egid);
         //--------------start of new code--------------------------
         if (Array.isArray(tabObjs))
         {
            for (const tabObj of tabObjs)
            {
               await opertn.perform(await prop,"WAIT","","",4000);
               await opertn.perform(await prop,"CLICK",tabObj,"XPATH","");
               await loginpage.TakeScreenShot();
            }
         }
         //await opertn.perform(await prop,"WAIT","","",4000);
         //await loginpage.TakeScreenShot();
         const objsAndResultsDictionary = await this.createDictionarySync(objName, expResult);
         console.log(objsAndResultsDictionary);

         for (const obj in objsAndResultsDictionary )
         {
            //await opertn.perform(await prop,"WAIT","","",2000);
            //await loginpage.TakeScreenShot();
            await opertn.perform(await prop,"WAIT","","",3000);
            const actualOutput = await opertn.perform(await prop,"GETVALUE",obj,"XPATH","");
            
            console.log("the actual ouput is :"+actualOutput);
            const expResult = objsAndResultsDictionary[obj];
            console.log("the expected output is "+expResult);
            await loginpage.validate(actualOutput,expResult);
         }
         await this.clickONChannelTab();
         await this.clickOnSpecificChannelRCS('RCS');
//--------------end of new code--------------------------
     /*  await opertn.perform(await prop,"CLICK",tabObj,"XPATH","");
      await opertn.perform(await prop,"WAIT","","",4000);
      await loginpage.TakeScreenShot();
      if(Array.isArray(objName))
      {
         for (const [index, obj] of objName.entries()){
            await opertn.perform(await prop,"WAIT","","",3000);
            const actualOutput = await opertn.perform(await prop,"GETVALUE",obj,"XPATH","");
            if (index!=objName.length-1)
            {
               console.log("the actual ouput is :"+actualOutput);
               console.log("the expected output is "+expResult);
               await loginpage.validate(actualOutput,expResult);
            }
            else
            {
               console.log("the actual ouput is :"+actualOutput);
               console.log("the expected output is "+expResult);
               await this.clickONChannelTab();
               await this.clickOnSpecificChannelRCS('RCS');
               await loginpage.validate(actualOutput,expResult);
               
               //await loginpage.log_out(driver);
            }
            
         }
      }
      else 
      {
         await opertn.perform(await prop,"WAIT","","",3000);
         const actualOutput = await opertn.perform(await prop,"GETVALUE",objName,"XPATH","");
         console.log("the actual ouput is :"+actualOutput);
         //const  expResult = testdata.username.expectedOutput.output.succMsg;
         console.log("the expected output is "+expResult);
      // await this.clickONChannelTab();
      // await this.clickOnSpecificChannelRCS('RCS');
         await this.clickONChannelTab();
         await this.clickOnSpecificChannelRCS('RCS');
         //await loginpage.log_out(driver);
         await loginpage.validate(actualOutput,expResult);

      }    */
   }

 

   async validating(validtionJsonObj,engName,ImgContext) 
   {
    //const channellstpge= new ChannelList(await driver);
    //driver.manage().setTimeouts({ implicit: 100000 });
    
       prop = await objt.getObjectRepository();
       const egid = await this.getEngageId(engName);
       await this.searchAndOpenEngagement2(egid);
       //=====================================================================

       for (const tabObj in validtionJsonObj)
       {
             await opertn.perform(await prop,"WAIT","","",4000);
             await opertn.perform(await prop,"CLICK",tabObj,"XPATH","");
             await loginpage.TakeScreenShot();
             // Assuming addContextAsync is called within the LoginPage class
             await loginpage.addContextAsync(ImgContext);

             if (typeof validtionJsonObj[tabObj] === "object")
             {
               // Access the nested object using bracket notation
               const configureParamsObj = validtionJsonObj[tabObj]
               // Loop through the nested object's keys
               for (const obj in configureParamsObj) {
                  // Access the nested value and create a key-value pair
                  const Value = configureParamsObj[obj];
                  await opertn.perform(await prop,"WAIT","","",3000);
                  const actualOutput = await opertn.perform(await prop,"GETVALUE",obj,"XPATH","");
                  
                  console.log("the actual ouput is :"+actualOutput);
                  const expResult = Value;
                  console.log("the expected output is "+expResult);
                  await loginpage.validate(actualOutput,expResult);
                  //keyValuePairs.push({ key: `${key}.${nestedKey}`, value: nestedValue });
                }

             }
       }
       await this.clickONChannelTab();
       await this.clickOnSpecificChannelRCS('RCS');
       //===============================================================================
   }

   async clearInputBox(templateIdvalue){
      prop = await objt.getObjectRepository();
      await opertn.perform(await prop,"WAIT", "", "", 8000)
      await opertn.perform(await prop,"CLEAR","rcsTemplateId","XPATH","");
   }

   async setTemplateId(templateIdvalue) {
      prop = await objt.getObjectRepository();
      await opertn.perform(await prop,"WAIT", "", "", 8000)
      const temp = await opertn.perform(await prop,"GETVALUE","rcsTemplateId","NAME","");
      //console.log("the getValue is :"+temp)
        if (await temp!=""){
         console.log("The temp is not empty in tempalteId")
         console.log("the getValue is :"+await temp)
         await opertn.perform(await prop,"CLICK","rcsTemplateId","NAME","");
         await opertn.perform(await prop,"CLEAR","rcsTemplateId","NAME","");
        }
      //await opertn.perform(await prop,"CLICK","rcsTemplateId","XPATH","")
      await opertn.perform(await prop,"SETTEXT","rcsTemplateId","NAME",templateIdvalue)
   }

    async setPageURL(enterURL) {
      //driver.manage().setTimeouts({ implicit: 1000000 });
      
        prop = await objt.getObjectRepository();
        const temp = await opertn.perform(await prop,"GETVALUE","pageUrlInput","XPATH","");
        console.log("the getText is :"+temp)
        if (temp!=""){
         console.log("The temp is not empty in pageurl")
         await opertn.perform(await prop,"CLICK","pageUrlInput","XPATH","");
         await opertn.perform(await prop,"CLEAR","pageUrlInput","XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT","pageUrlInput","XPATH",enterURL);
    }

    async clickAttributeBtn() {
        prop = await objt.getObjectRepository();
        await opertn.perform(await prop,"CLICK","attributeBtn","XPATH","");
    }
    async setMandatoryParameters(value1) {
        //driver.manage().setTimeouts({ implicit: 10000 });
        
        prop = await objt.getObjectRepository();
        const temp = await opertn.perform(await prop,"GETVALUE","mandatoryParamInput2","XPATH","");
        console.log("the temp" + temp)
        if (temp!=""){
         console.log("temp is not empty in mandatory")
         await opertn.perform(await prop,"CLICK","mandatoryParamInput2","XPATH","");
         await opertn.perform(await prop,"CLEAR","mandatoryParamInput2","XPATH","");
        }
        //
        await opertn.perform("","WAIT", "", "", 5000);
        await opertn.perform(await prop,"SETTEXT","mandatoryParamInput2","XPATH",value1);
        
       // await opertn.perform(await prop,"GETWEBELEMENTS","mandatoryParamInput","XPATH",""); 
       /*  const elements = await opertn.perform(await prop,"GETWEBELEMENTS","mandatoryParamInput","XPATH","");
        console.log("length of webelements "+ await elements.length)

        for (let i=0; i< elements.length; i++){
            const item1 = await elements[i].getAttribute("value");               
            console.log(item1);
            if (item1 === parameter){
                await elements[++i].sendKeys(value1)
                break;
            }
       }  */

    }

    async setContentTagWithMedia(value1) {
         prop = await objt.getObjectRepository();
         const temp1 = await opertn.perform(await prop,"GETVALUE","contentTagsInput1","XPATH","");
         console.log("temp1 :" +temp1)
         if (temp1!=""){
         console.log("temp1 is not empty")
         await opertn.perform(await prop,"CLICK","contentTagsInput1","XPATH","");
         await opertn.perform(await prop,"CLEAR","contentTagsInput1","XPATH","");
         }
         await opertn.perform(await prop,"SETTEXT","contentTagsInput1","XPATH",value1);

         await opertn.perform(await prop,"WAIT", "", "", 5000)
    }

    async setContentAttributeWithMedia(value1) {
      prop = await objt.getObjectRepository();
      const temp1 = await opertn.perform(await prop,"GETVALUE","contentAttributeInput1","XPATH","");
      console.log("temp1 :" +temp1)
      if (temp1!=""){
      console.log("temp1 is not empty")
      await opertn.perform(await prop,"CLICK","contentAttributeInput1","XPATH","");
      await opertn.perform(await prop,"CLEAR","contentAttributeInput1","XPATH","");
      }
      await opertn.perform(await prop,"SETTEXT","contentAttributeInput1","XPATH",value1);

      await opertn.perform(await prop,"WAIT", "", "", 5000)
 }

    async setContentTags(value1) {

     // driver.manage().setTimeouts({ implicit: 100000 });
     
        prop = await objt.getObjectRepository();
        const temp1 = await opertn.perform(await prop,"GETVALUE","contentTagsInput1","XPATH","");
        console.log("temp1 :" +temp1)
        if (temp1!=""){
         console.log("temp1 is not empty")
         await opertn.perform(await prop,"CLICK","contentTagsInput1","XPATH","");
         await opertn.perform(await prop,"CLEAR","contentTagsInput1","XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT","contentTagsInput1","XPATH",value1);

        await opertn.perform(await prop,"WAIT", "", "", 5000)

        const temp2 = await opertn.perform(await prop,"GETVALUE","contentTagsInput3","XPATH","");
        console.log("temp2 :" +temp2)
        if (temp2!=""){
         console.log("temp2 is not empty")
         await opertn.perform(await prop,"CLICK","contentTagsInput3","XPATH","");
         await opertn.perform(await prop,"CLEAR","contentTagsInput3","XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT","contentTagsInput3","XPATH",value1);

        /* const elements = await opertn.perform(await prop,"GETWEBELEMENTS","contentTagsInput","XPATH","");
        console.log("length of webelements "+ await elements.length)
        for (let i=0; i<await elements.length; i++){
            const item1 = await elements[i].getAttribute("value");               
            console.log(item1);
            if (item1 === parameter){
                await elements[++i].sendKeys(value1)
                break;
            } 

            await elements[i].sendKeys(value1)
       } */

    }



    
    async setContentAttribute(value2){
     // driver.manage().setTimeouts({ implicit: 100000 });
     
        prop = await objt.getObjectRepository();
        const temp1 = await opertn.perform(await prop,"GETVALUE","contentAttributeInput1","XPATH","");
        console.log("temp1 :" +temp1)
        if (temp1!=""){
         console.log("temp1 is not empty")
         await opertn.perform(await prop,"CLICK","contentAttributeInput1","XPATH","");
         await opertn.perform(await prop,"CLEAR","contentAttributeInput1","XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT","contentAttributeInput1","XPATH",value2);

        await opertn.perform(await prop,"WAIT", "", "", 5000)

        const temp2 = await opertn.perform(await prop,"GETVALUE","contentAttributeInput3","XPATH","");
        console.log("temp1 :" +temp2)
        if (temp2!=""){
         console.log("temp2 is not empty")
         await opertn.perform(await prop,"CLICK","contentAttributeInput3","XPATH","");
         await opertn.perform(await prop,"CLEAR","contentAttributeInput3","XPATH","");
        }
        await opertn.perform(await prop,"SETTEXT","contentAttributeInput3","XPATH",value2);
    }

}

module.exports = rcsEngageCreation;


