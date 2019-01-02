"use strict";
exports.__esModule = true;
var calculator_1 = require("../src/calculator");
var chai_1 = require("chai");
describe('calculator', function () {
    it('should initialise with a calculated value:  0', function () {
        var calculator = new calculator_1.Calculator();
        chai_1.expect(calculator.value).to.equal(0);
    });
});
//# sourceMappingURL=calculator.spec.js.map