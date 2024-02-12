const loginpage = require('../pageobjects/loginpage');


describe('This is the describe block',function(){
    this.timeout(100000);
    beforeEach(function(){
        //Enter the actions performed before test
        
    });

    this.afterEach(async function(){
        //Enter the actions performed after test
    });

    
    it('POM Test',async function(){
        //Enter the test steps
        /* var baseurl = "https://ttl.lemnisk.co/app/login/";
        var username = "ahamed6035";
        var password = "123$Urbanladder"
        await loginpage.enter_url(baseurl);
        await loginpage.log_in(username,password); */
        console.log(dataArray.length)
        console.log(dataArray);
        for (let i=1; i<dataArray.length; i++)
        {
            const rowValues = dataArray[i];
            //console.log(`Row ${i+1}`,rowValues.join(', '))
            for (let j=0; j<rowValues.length; j++)
            {
                if (j==0)
                {
                    const firstCell = rowValues[j];
                    if (firstCell.length==0)
                    {
                        //Print testcase detail on console
                        console.log(rowValues.join('- '));
                        /*
                        for (let k=0; k<rowValues.length; k++){
                        console.log(`step ${k+1}`,rowValues.join('- '));
                        break;
                        }
                        */
                        //Call perform function to perform operation on UI

                    }
                    else
                    {
                        //Print the new testcase name when it started
                        console.log("new test case" + firstCell)
                        continue;
                    }
        }
        
        //const cellValue = rowValues[j];
        
        //console.log(cellValue);
        
    }
}
    })
})