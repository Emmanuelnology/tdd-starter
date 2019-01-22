"use strict";
exports.__esModule = true;
var calculator_1 = require("../src/calculator");
var chai_1 = require("chai");
describe('calculator', function () {
    it('should return 0 with an empty string', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(calculator.value).to.equal(0);
    });
    it('should return 0 with no numbers', function () {
        var calculator = new calculator_1.Calculator('A');
        chai_1.expect(calculator.value).to.equal(0);
    });
    it('should return the number if given a single number', function () {
        var calculator = new calculator_1.Calculator('1');
        chai_1.expect(calculator.value).to.equal(1);
        calculator = new calculator_1.Calculator('0');
        chai_1.expect(calculator.value).to.equal(0);
    });
    it('should return sum of two comma delimited numbers', function () {
        var calculator = new calculator_1.Calculator('0,1');
        chai_1.expect(calculator.value).to.equal(1);
        calculator = new calculator_1.Calculator('1,5');
        chai_1.expect(calculator.value).to.equal(6);
        calculator = new calculator_1.Calculator('2,A');
        chai_1.expect(calculator.value).to.equal(2);
        calculator = new calculator_1.Calculator('2,,A');
        chai_1.expect(calculator.value).to.equal(2);
    });
    it('should return sum of two new-line delimited numbers', function () {
        var calculator = new calculator_1.Calculator("0\n1");
        chai_1.expect(calculator.value).to.equal(1);
        calculator = new calculator_1.Calculator("6\n7");
        chai_1.expect(calculator.value).to.equal(13);
    });
    it('should return sum of three new-line or comma delimited numbers', function () {
        var calculator = new calculator_1.Calculator("0\n1,2");
        chai_1.expect(calculator.value).to.equal(3);
    });
    it('should ignore numbers > 1000', function () {
        var calculator = new calculator_1.Calculator('1,2,1001');
        chai_1.expect(calculator.value).to.equal(3);
    });
    it('should be able to speciify a single character delimiter on the first line', function () {
        var calculator = new calculator_1.Calculator('//#1#42');
        chai_1.expect(calculator.value).to.equal(43);
    });
    it('should be able to speciify a multiple character delimiters on the first line', function () {
        var calculator = new calculator_1.Calculator('//[##]1##42');
        chai_1.expect(calculator.value).to.equal(43);
    });
});
describe('getValues', function () {
    it('should return single character between square brackets', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(calculator.getStringBetweenTwoCharacters('[,]', '[', ']')).to.equal(',');
        chai_1.expect(calculator.getStringBetweenTwoCharacters('fdasfsda[,]fdafda', '[', ']')).to.equal(',');
    });
    it('should return multiple characters between square brackets', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(calculator.getStringBetweenTwoCharacters('[#,]', '[', ']')).to.equal('#,');
        chai_1.expect(calculator.getStringBetweenTwoCharacters('erfw2r[#,]r2re2', '[', ']')).to.equal('#,');
    });
});
describe('arrayReducer', function () {
    it('should sum items in an array', function () {
        var calculator = new calculator_1.Calculator('');
        var array = [1, 2, 3];
        chai_1.expect(array.reduce(calculator.sumReducer)).to.equal(6);
    });
});
describe('cleanValues', function () {
    it('should convert strings to numbers', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(calculator.cleanValues('0')).to.equal(0);
        chai_1.expect(calculator.cleanValues('1')).to.equal(1);
    });
    it('should throw an exception on negative numbers', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(function () { return calculator.cleanValues('-1'); }).to["throw"](TypeError, "Negative number");
        chai_1.expect(function () { return calculator.cleanValues('-20'); }).to["throw"](TypeError, "Negative number");
        chai_1.expect(function () { return calculator.cleanValues('-200'); }).to["throw"](TypeError, "Negative number");
    });
    it('should ignore numbers > 1000', function () {
        var calculator = new calculator_1.Calculator('');
        chai_1.expect(calculator.cleanValues('999')).to.equal(999);
        chai_1.expect(calculator.cleanValues('1000')).to.equal(1000);
        chai_1.expect(calculator.cleanValues('1001')).to.equal(0);
    });
});
//# sourceMappingURL=calculator.spec.js.map