const { google } = require('googleapis');
const path = require('path');

class GoogleSheetReader {
    constructor() {
        this.keys = require(path.join(__dirname, '..', 'service_accnts', 'lemniskuiautomation-c5787c86f548.json'));
        this.client = new google.auth.JWT(
            this.keys.client_email,
            null,
            this.keys.private_key,
            ['https://www.googleapis.com/auth/spreadsheets']
        );
    }

    async authorize() {
        return new Promise((resolve, reject) => {
            this.client.authorize((err, token) => {
                if (err) {
                    console.error(err);
                    reject(err);
                } else {
                    console.log('Connected!');
                    resolve();
                }
            });
        });
    }

    async getDataArray() {
        try {
            await this.authorize();
            const gsapi = google.sheets({ version: 'v4', auth: this.client });
            const opt = {
                spreadsheetId: '1Aie7ET3L5SL-_maCn8YqJkUG4VOuhBPop41zqpjQEvA',
                range: 'Sheet1!A1:E97'
            };
            let data = await gsapi.spreadsheets.values.get(opt);
            return data.data.values;
        } catch (err) {
            console.error('Error:', err.message);
            throw err;
        }
    }
}

// Export an instance of the GoogleSheetReader class
module.exports = new GoogleSheetReader();
