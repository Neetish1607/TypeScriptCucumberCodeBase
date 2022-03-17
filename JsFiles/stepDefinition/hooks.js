"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
// Before(function () {
//   // This hook will be executed before all scenarios
// });
(0, cucumber_1.Before)({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    protractor_1.browser.manage().window().maximize();
});
(0, cucumber_1.After)({ tags: "@calculatorTesting" }, function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is complete");
});
// Before({tags: "@foo and @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo and @bar
// });
// Before({tags: "@foo or @bar"}, function () {
//   // This hook will be executed before scenarios tagged with @foo or @bar
// });
// You can use the following shorthand when only specifying tags
(0, cucumber_1.Before)("@angularTesting", function () {
    // This hook will be executed before scenarios tagged with @foo
    console.log("I need to execute at the last");
});
(0, cucumber_1.After)(function (scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // This hook will be executed before scenarios tagged with @foo
        console.log("Test is complete");
        if (scenario.result.status === cucumber_1.Status.FAILED) {
            const screenShot = protractor_1.browser.takeScreenshot();
            this.attach(screenShot, "image/png");
        }
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbi9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUErQztBQUMvQywyQ0FBcUM7QUFFckMsdUJBQXVCO0FBQ3ZCLHVEQUF1RDtBQUN2RCxNQUFNO0FBRU4sSUFBQSxpQkFBTSxFQUFDLEVBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFDLEVBQUU7SUFDbkMsK0RBQStEO0lBQy9ELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7QUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFFSCxJQUFBLGdCQUFLLEVBQUMsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUMsRUFBRTtJQUNoQywrREFBK0Q7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsZ0RBQWdEO0FBQ2hELDZFQUE2RTtBQUM3RSxNQUFNO0FBRU4sK0NBQStDO0FBQy9DLDRFQUE0RTtBQUM1RSxNQUFNO0FBRU4sZ0VBQWdFO0FBQ2hFLElBQUEsaUJBQU0sRUFBQyxpQkFBaUIsRUFBRTtJQUN4QiwrREFBK0Q7SUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyxDQUFDO0FBRUgsSUFBQSxnQkFBSyxFQUFDLFVBQWdCLFFBQVE7O1FBQzVCLCtEQUErRDtRQUMvRCxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDaEMsSUFBRyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sS0FBSyxpQkFBTSxDQUFDLE1BQU0sRUFBQztZQUMxQyxNQUFNLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUFBLENBQUMsQ0FBQyJ9