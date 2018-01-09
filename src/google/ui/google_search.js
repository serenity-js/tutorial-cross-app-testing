"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var screenplay_protractor_1 = require("serenity-js/lib/screenplay-protractor");
var GoogleSearch = /** @class */ (function () {
    function GoogleSearch() {
    }
    GoogleSearch.Query = screenplay_protractor_1.Target.the('Query').located(protractor_1.by.name('q'));
    GoogleSearch.Result = screenplay_protractor_1.Target.the('Link to "{0}"').located(protractor_1.by.linkText('{0}'));
    return GoogleSearch;
}());
exports.GoogleSearch = GoogleSearch;
//# sourceMappingURL=google_search.js.map