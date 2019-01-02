
/*
    String Calculator
*/

// An empty string returns zero
// A single number returns the value
// Two numbers, comma delimited, returns the sum
// Two numbers, newline delimited, returns the sum
// Three numbers, delimited either way, returns the sum
// Negative numbers throw an exception
// Numbers greater than 1000 are ignored
// A single char delimiter can be defined on the first line (e.g. //# for a ‘#’ as the delimiter)
// A multi char delimiter can be defined on the first line (e.g. //[###] for ‘###’ as the delimiter)
// Many single or multi-char delimiters can be defined (each wrapped in square brackets)


import { Calculator } from '../src/calculator';
import { expect } from 'chai';
 
describe('calculator', () => {
    it('should return 0 with an empty string', () => {
        let calculator = new Calculator('');
        expect(calculator.value).to.equal(0);
    })

    it('should return the number if given a single number', () => {
        let calculator = new Calculator('1');
        expect(calculator.value).to.equal(1);

        calculator = new Calculator('0');
        expect(calculator.value).to.equal(0);
    })

    it('should return sum of two comma delimited numbers', () => {
       let calculator = new Calculator('0,1');
        expect(calculator.value).to.equal(1);
        calculator = new Calculator('1,5');
        expect(calculator.value).to.equal(6);
    })

    it('should return sum of two new-line delimited numbers', () => {
        let calculator = new Calculator("0\n1");
        expect(calculator.value).to.equal(1);
        calculator = new Calculator("6\n7");
        expect(calculator.value).to.equal(13);
    })

    it('should return sum of three new-line or comma delimited numbers', () => {
        let calculator = new Calculator("0\n1,2");
        expect(calculator.value).to.equal(3);
    })

    it('should throw an exception on negative numbers', () => {
        let calculator = new Calculator('');
        expect(() => calculator.sumArray(['1', '2', '-2'], ",")).to.throw(TypeError, "Negative number");
    })

    it('should ignore numbers > 1000', () => {
        let calculator = new Calculator('1,42,2000,12');
        expect(calculator.value).to.equal(55);
    })

    it('should be able to speciify a single character delimiter on the first line', () => {
        let calculator = new Calculator('//#1#42');
        expect(calculator.value).to.equal(43);
    })

    it('should be able to speciify a multiple character delimiters on the first line', () => {
        let calculator = new Calculator('//[##]1##42');
        expect(calculator.value).to.equal(43);
    })
});

describe('getValues', () => {
    it('should return single character between square brackets', () => {
        let calculator = new Calculator('');
        expect(calculator.getStringBetweenTwoCharacters('[,]','[',']')).to.equal(',');
        expect(calculator.getStringBetweenTwoCharacters('fdasfsda[,]fdafda','[',']')).to.equal(',');
    })
    it('should return multiple characters between square brackets', () => {
        let calculator = new Calculator('');
        expect(calculator.getStringBetweenTwoCharacters('[#,]','[',']')).to.equal('#,');
        expect(calculator.getStringBetweenTwoCharacters('erfw2r[#,]r2re2','[',']')).to.equal('#,');

    })
});