//var ReadGuru99ExcelFile = require('../gs_export/gsReadWrite');

const PropertiesReader = require('properties-reader');
const googleSheetReader = require('../gs_export/GoogleSheetReader');
const objt = require('../operations/ReadObjects');
const opertn = require('../operations/UIOperationsOld');




readGoogleSheet=async () => {

const dataArray = await googleSheetReader.getDataArray();
let prop = await objt.getObjectRepository();
console.log(dataArray.length);
//this.value = this.prop.get("username");
//console.log('Username:', prop.get("username"));

//console.log(prop);


/*
prop.each((key, value) => {
    console.log(key + ":" + value);
});
*/
for (let i=1; i<dataArray.length; i++)
{
    const rowValues = dataArray[i];
    //console.log(`Row ${i+1}`,rowValues.join(', '))
    for (let j=0; j<rowValues.length; j++)
    {
        if (j==0 && rowValues[j].length!==0)
        {
            //Print the new testcase name when it started
            console.log("new test case" + rowValues[j])
            //await new Promise(resolve => setTimeout(resolve, 15000));
            continue;
        }
        else
        {
            //Print testcase detail on console
            //console.log(rowValues.join('- '));
            console.log(rowValues[1]+'-'+rowValues[2]+'-'+rowValues[3]+'-'+rowValues[4]);
            //opertn.perform(await objt.getObjectRepository(),rowValues[1],rowValues[2],rowValues[3],rowValues[4]);
            await opertn.perform(await prop,rowValues[1],rowValues[2],rowValues[3],rowValues[4]);
            break;
        }
        
        //const cellValue = rowValues[j];
        
        //console.log(cellValue);
        

    }
}

}

describe ('Executing TCS',function() {

  this.timeout(300000)
  let driver
  let vars
  let actions
  beforeEach(async function() {
    //driver = await new Builder().forBrowser('chrome').build()
      // Navigate to the login page
    vars = {}
  })
  afterEach(async function() {
    //await driver.quit();
  })

  it('testing', async function() {
    await readGoogleSheet();
  })

})

//readGoogleSheet();

