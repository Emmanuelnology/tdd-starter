"use strict";
exports.__esModule = true;
var Calculator = (function () {
    function Calculator(input) {
        this.value = 0;
        this.sumReducer = function (total, value) { return total + value; };
        var char = this.getDelimiter(input);
        this.value = this.cleanString(input, char)
            .replace('\n', char)
            .split(char)
            .map(this.cleanValue)
            .reduce(this.sumReducer);
    }
    Calculator.prototype.cleanValue = function (value) {
        if (+value < 0)
            throw new TypeError("Negative number");
        if (+value <= 1000)
            return +value;
        return 0;
    };
    Calculator.prototype.getDelimiter = function (string) {
        if (string.substring(0, 2) === "//") {
            var nextChar = string.substring(2, 3);
            return (nextChar != '[') ? nextChar : this.getStringBetweenTwoCharacters(string, '[', ']');
        }
        return ",";
    };
    Calculator.prototype.cleanString = function (dirtyString, delimiter) {
        var regex = new RegExp('[^0-9' + delimiter + '\n]+', 'gi');
        return dirtyString.replace(regex, '');
    };
    Calculator.prototype.getStringBetweenTwoCharacters = function (str, startChar, endChar) {
        return str.substring(str.lastIndexOf(startChar) + 1, str.lastIndexOf(endChar));
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map