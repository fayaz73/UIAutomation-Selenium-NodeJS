var webdriver = require('selenium-webdriver');
var  driver =  new webdriver.Builder().forBrowser('chrome').build();


function  login() {
    driver.get("https://ttl.lemnisk.co/app")
    console.log("executed first step")
    driver.manage().window().setRect({ width: 1848, height: 1053 })
    console.log("executed second step"5
    driver.findElement(By.name("username")).sendkeys("ahamed6035");
    driver.findElement(By.name("password")).sendKeys("123$Urbanladder"));
    driver.findElement(By.xpath("//button")).click();
}

login();
