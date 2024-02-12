const fs = require('fs');
const path = require('path')
const rs  = fs.createReadStream(path.join(__dirname,'..','objects','objects.properties'),{encoding:'utf8'});

const ws  = fs.createWriteStream(path.join(__dirname,'..','objects','objects2.properties'));

/* rs.on('data',(dataChunk)=> {
    ws.write(dataChunk);
}) */

rs.pipe(ws);



