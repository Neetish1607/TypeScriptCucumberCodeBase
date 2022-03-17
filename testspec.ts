
import {browser, element, by } from "protractor"
import { angularHomePage } from "./JsFiles/pageObjects/angularHomePage";
import { calculator } from "./JsFiles/pageObjects/calculator";
describe('chain locators',()=>{
    it('',async()=>{

        let calc = new calculator();
       await browser.get("http://juliemr.github.io/protractor-demo/");
        // repeater, chain locators, css for identical tags

        await calc.firstEditBox.sendKeys("3");
        calc.secondEditBox.sendKeys("3").then(function(){
            browser.sleep(5000)
        })
        await calc.go.click();
        await calc.result.getText().
        then(function(text){
            console.log(text)
        })

    })

    it('Open Agular Js Website',async()=>{

        let ah = new angularHomePage();
        
        await browser.get("https://angularjs.org/");
        await ah.angularLink.click();
        await browser.getAllWindowHandles().then(function(handles){
            browser.switchTo().window(handles[1]);
        })
        await ah.search.sendKeys("hello");



    })
})