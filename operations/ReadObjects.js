const fsPromises = require('fs').promises;
const path = require('path');
var PropertiesReader = require('properties-reader');
//var propertiesReader = require('properties-reader');
var value="";

class readobjects {

    //PropertiesReader  = new PropertiesReader();
    constructor() {
        // Create a PropertiesReader instance
        this.propertiesReader = new PropertiesReader();
        this.value = value;
    }
    
   /*  getObjectRepository = async (key)=>{

        try{
            //const rs  = fs.createReadStream(path.join(__dirname,'..','objects','objects.properties'),{encoding:'utf8'});
           //var properties = propertiesReader(path.join(__dirname,'..','objects','objects.properties'));
            // Read properties from the specified file
                 this.propertiesReader
                .append(path.join(__dirname, '..', 'objects', 'objects.properties'))
                .path();

               // Example: Get value associated with a key
               //const username = this.propertiesReader.get('username');
               console.log("the key is : "+key);
               this.value = this.propertiesReader.get(key);
               console.log('Username:', this.value);
               //return this.value;
               return this.propertiesReader;
    
        } catch(err){
            console.error(err);
        }
        //return this.propertiesReader;   
    } */

    getObjectRepository = async ()=>{

        try{
            //const rs  = fs.createReadStream(path.join(__dirname,'..','objects','objects.properties'),{encoding:'utf8'});
           //var properties = propertiesReader(path.join(__dirname,'..','objects','objects.properties'));
            // Read properties from the specified file
                 this.propertiesReader
                .append(path.join(__dirname, '..', 'objects', 'objects.properties'))
                .path();

               // Example: Get value associated with a key
               //const username = this.propertiesReader.get('username');
               /*
               console.log("the key is : "+key);
               this.value = this.propertiesReader.get(key);
               console.log('Username:', this.value);
               //return this.value;
               */
               return this.propertiesReader;
    
        } catch(err){
            console.error(err);
        }
        //return this.propertiesReader;   
    }

}

module.exports = new readobjects();

