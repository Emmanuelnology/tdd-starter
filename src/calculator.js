"use strict";
exports.__esModule = true;
var Calculator = (function () {
    function Calculator(input) {
        this.input = input;
        this.value = 0;
        this.sumReducer = function (total, value) { return total + value; };
        var char = this.getDelimiter();
        var values = this.getValues(char);
        this.value = values.reduce(this.sumReducer);
    }
    Calculator.prototype.cleanValues = function (value) {
        if (+value < 0)
            throw new TypeError("Negative number");
        if (+value <= 1000)
            return +value;
        return 0;
    };
    Calculator.prototype.getDelimiter = function () {
        if (this.input.substring(0, 2) == "//") {
            var nextChar = this.input.substring(2, 3);
            if (nextChar != '[')
                return nextChar;
            var delimiter = this.getStringBetweenTwoCharacters(this.input, '[', ']');
            return delimiter;
        }
        return ",";
    };
    Calculator.prototype.getValues = function (replaceChar) {
        var stringValues = this.input;
        stringValues = stringValues.replace("//", '');
        stringValues = stringValues.replace("[", '');
        stringValues = stringValues.replace("]", '');
        stringValues = stringValues.replace("\n", replaceChar);
        var stringArray = stringValues.split(replaceChar);
        return stringArray.map(this.cleanValues);
    };
    Calculator.prototype.getStringBetweenTwoCharacters = function (str, startChar, endChar) {
        return str.substring(str.lastIndexOf(startChar) + 1, str.lastIndexOf(endChar));
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map