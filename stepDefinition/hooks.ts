import {After, Before, Status} from "cucumber";
import { browser } from "protractor";

// Before(function () {
//   // This hook will be executed before all scenarios
// });

Before({tags: "@calculatorTesting"}, function () {
  // This hook will be executed before scenarios tagged with @foo
  browser.manage().window().maximize();
});

After({tags: "@calculatorTesting"}, function () {
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
Before("@angularTesting", function () {
  // This hook will be executed before scenarios tagged with @foo
  console.log("I need to execute at the last");
});

After(async function (scenario) {
  // This hook will be executed before scenarios tagged with @foo
  console.log("Test is complete");
  if(scenario.result.status === Status.FAILED){
    const screenShot = browser.takeScreenshot();
    this.attach(screenShot, "image/png");
  }
});