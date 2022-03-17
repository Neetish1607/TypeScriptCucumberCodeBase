import { Given, Then, When } from "cucumber";
import { browser } from "protractor";
import { angularHomePage } from "../JsFiles/pageObjects/angularHomePage";
import { calculator } from "../JsFiles/pageObjects/calculator";
import chai from "chai";

let calc = new calculator();
let ah = new angularHomePage();
var expect = chai.expect;

Given('I will navigate to the calc site', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("http://juliemr.github.io/protractor-demo/");
  });

  Given('I will navigate to {string} site', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    if(string == "calc"){
      await browser.get("http://juliemr.github.io/protractor-demo/");
    }
    else if(string == "AngularJs"){
      await browser.get("https://angularjs.org/");
    }
  });

  When('I add two number {string} and {string}', async (string, string2) =>{
    // Write code here that turns the phrase above into concrete actions
    
    await calc.firstEditBox.sendKeys(string);
        calc.secondEditBox.sendKeys(string2).then(function(){
            browser.sleep(5000)
        })
  });

  Then('the output displayed should be {string}', async (string) =>{
    // Write code here that turns the phrase above into concrete actions
    await calc.go.click();
    calc.result.getText().then(function(text){
        console.log(text)
        expect(text).to.equal(string);
    })
  });

  When('I clicked on Header Link', async () => {
    // Write code here that turns the phrase above into concrete actions
    
    await ah.angularLink.click();
  });

  When('you will navigate to angular Page', async () => {
    // Write code here that turns the phrase above into concrete actions
    console.log("navigated to Angular Page")
  });

  Then('you will enter {string} in search box', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await ah.search.sendKeys(string);
  });






