const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async() => {
    try{
        const data = await fsPromises.readFile(path.join(__dirname,'..','objects','objects.properties'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname,'..','objects','objects.properties'));
        await fsPromises.writeFile(path.join(__dirname,'..','objects','promiseWrite.txt'),data);
        await fsPromises.appendFile(path.join(__dirname,'..','objects','promiseWrite.txt'),'\n nice to meet you.');
        await fsPromises.rename(path.join(__dirname,'..','objects','promiseWrite.txt'),path.join(__dirname,'..','objects','promiseComplete.txt'));
        const newData = fsPromises.readFile(path.join(__dirname,'..','objects','promiseComplete.txt'),'utf8');
        console.log(newData);

    } catch(err){
        console.error(err);
    }
}   

fileOps();

/*
const fs = require('fs');
const path = require('path')

fs.readFile(path.join(__dirname,'..','objects','objects.properties'),'utf-8', (err,data)=> {
    if(err) throw err;
    console.log(data);
})  


console.log('Hellow!!!');

fs.writeFile(path.join(__dirname,'..','objects','reply.txt'),'nice meeting to you',(err,data)=> {
    if (err) throw err;
    console.log('write complete')

    fs.appendFile(path.join(__dirname,'..','objects','reply.txt'),'\ntesting text',(err,data)=> {
        if (err) throw err;
        console.log('append complete')

        fs.rename(path.join(__dirname,'..','objects','reply.txt'),path.join(__dirname,'..','objects','Newreply.txt'),(err)=> {
            if (err) throw err;
            console.log('rename complete')
        })
    })

})


fs.appendFile(path.join(__dirname,'..','objects','test.txt'),'testing text',(err,data)=> {
    if (err) throw err;
    console.log('write complete')
})


process.on('uncaughtException', err=>{
    console.error(`There was an uncaught error: ${err}`)
    process.exit(1);
}) */

