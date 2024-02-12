const { google } = require('googleapis');
const path = require('path');
//const keys = require(path.join(__dirname,'..','service_accnts','lemniskuiautomation-c5787c86f548.json'));
const keys = require(path.join(__dirname,'..','service_accnts','lemniskuiautomation-c5787c86f548.json'));
//https://nodejs.org/
//https://code.visualstudio.com/
//https://developers.google.com/sheets/api/quickstart/nodejs
//console.developers.google.com


var client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err,token){
    if (err){
        console.log(err);
        return;
    }else{
        console.log('connected!');
        let dataArray = gsrun(client);
    }
});


gsrun=async (cl)=>{
    const gsapi = google.sheets({version:'v4',auth:cl});
    const opt = {
        spreadsheetId: '1Aie7ET3L5SL-_maCn8YqJkUG4VOuhBPop41zqpjQEvA',
        range : 'Sheet1!A1:E15'
    };
    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray=data.data.values;
  

    /*
    let newdataArray = dataArray.map(function(r){
        r.push(r[0]+'-'+r[1]);
        return r;
    });
    console.log(newdataArray);
    */
    /*
    const updateOpt = {
        spreadsheetId: '1Aie7ET3L5SL-_maCn8YqJkUG4VOuhBPop41zqpjQEvA',
        range : 'Sheet1!H1',
        valueInputOption: 'USER_ENTERED',
        resource: {values:dataArray}
    };

    let res = await gsapi.spreadsheets.values.update(updateOpt);
    console.log(res)
    */
   //return dataArray;
}



class ReadGuru99ExcelFile{

    constructor() {
        global.path = path;
        global.keys = keys;
        //global.client = client;
    }
     
    getData=()=>{

        var client = new google.auth.JWT(
            keys.client_email,
            null,
            keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );
        
        //let dataArray;
        client.authorize(function(err,token){
            if (err){
                console.log(err);
                return;
            }else{
                console.log('connected!');
                let dataArray = gsrun(client);
            }
        });
        return dataArray;
    }
    
   
    
    gsrun=async (cl)=>{
        const gsapi = google.sheets({version:'v4',auth:cl});
        const opt = {
            spreadsheetId: '1Aie7ET3L5SL-_maCn8YqJkUG4VOuhBPop41zqpjQEvA',
            range : 'Sheet1!A1:E15'
        };
        let data = await gsapi.spreadsheets.values.get(opt);
        let dataArray=data.data.values;
      
    
        /*
        let newdataArray = dataArray.map(function(r){
            r.push(r[0]+'-'+r[1]);
            return r;
        });
        console.log(newdataArray);
        */
        /*
        const updateOpt = {
            spreadsheetId: '1Aie7ET3L5SL-_maCn8YqJkUG4VOuhBPop41zqpjQEvA',
            range : 'Sheet1!H1',
            valueInputOption: 'USER_ENTERED',
            resource: {values:dataArray}
        };
    
        let res = await gsapi.spreadsheets.values.update(updateOpt);
        console.log(res)
        */
       return dataArray;
    }


}

module.exports =  new ReadGuru99ExcelFile();