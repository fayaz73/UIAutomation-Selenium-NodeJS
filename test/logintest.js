var webdriver = require('selenium-webdriver');
var  driver =  new webdriver.Builder().forBrowser('chrome').build();


function  login() {
    driver.get("https://ttl.lemnisk.co/app")
    console.log("executed first step")
    driver.manage().window().setRect({ width: 1848, height: 1053 })
    console.log("executed second step")
    driver.findElement(By.name("username")).sendkeys("ahamed6035");
    console.log("executed third step")
    driver.findElement(By.name("password")).sendKeys("123$Urbanladder");
    console.log("executed fourth step")
    driver.findElement(By.xpath("//button")).click();
    console.log("executed fifth step")
}

login();
