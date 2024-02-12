const { google } = require('googleapis');
const path = require('path');
const keys = require(path.join(__dirname,'..','service_accnts','lemniskuiautomation-c5787c86f548.json'));

const client = new google.auth.JWT(
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
    }
});