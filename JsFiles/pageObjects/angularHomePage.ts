import { ElementFinder, element, by } from "protractor";

export class angularHomePage{

    angularLink:ElementFinder;
    search:ElementFinder;

    constructor(){
        this.angularLink = element(by.css("a[href='https://angular.io']"));
        this.search = element(by.css("input[type='search']"));
    }
}