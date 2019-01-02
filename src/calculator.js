"use strict";
exports.__esModule = true;
var Calculator = (function () {
    function Calculator(input) {
        this.input = input;
        this.value = 0;
        var char = this.getDelimiter();
        var values = this.getValues(char);
        this.value = this.sumArray(values, char);
    }
    Calculator.prototype.sumArray = function (values, char) {
        var output = 0;
        for (var index in values) {
            var value = +values[index];
            if (value < 0)
                throw new TypeError("Negative number");
            if (value < 1000)
                output += value;
        }
        return output;
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
        return stringValues.split(replaceChar);
    };
    Calculator.prototype.getStringBetweenTwoCharacters = function (str, startChar, endChar) {
        return str.substring(str.lastIndexOf(startChar) + 1, str.lastIndexOf(endChar));
    };
    return Calculator;
}());
exports.Calculator = Calculator;
//# sourceMappingURL=calculator.js.map