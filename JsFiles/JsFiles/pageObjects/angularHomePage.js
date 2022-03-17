"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.angularHomePage = void 0;
const protractor_1 = require("protractor");
class angularHomePage {
    constructor() {
        this.angularLink = (0, protractor_1.element)(protractor_1.by.css("a[href='https://angular.io']"));
        this.search = (0, protractor_1.element)(protractor_1.by.css("input[type='search']"));
    }
}
exports.angularHomePage = angularHomePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhckhvbWVQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvYW5ndWxhckhvbWVQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLGVBQWU7SUFLeEI7UUFDSSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUMxRCxDQUFDO0NBQ0o7QUFURCwwQ0FTQyJ9