// WebDriverManager.js
class WebDriverManager {
    constructor(driver) {
      this.driver = driver;
    }
  
    async configureWebDriver() {
      await this.driver.manage().setTimeouts({ implicit: 10000 });
      // Additional WebDriver configuration if needed
    }
  }
  
  module.exports = WebDriverManager;
  