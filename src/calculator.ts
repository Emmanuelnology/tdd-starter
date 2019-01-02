export class Calculator {
    value = 0;
    constructor (private input: string) {
        let char:string = this.getDelimiter();
        let values:string[] = this.getValues(char);
        this.value = this.sumArray(values, char);
    }

    sumArray(values:string[], char:string) {
        let output: number = 0;
        for (let index in values) {
            let value = +values[index];
            if (value < 0) throw new TypeError("Negative number");
            if (value < 1000) output += value;
        }
        return output;
    }

    getDelimiter():string {
        if(this.input.substring(0, 2) == "//"){
            let nextChar = this.input.substring(2, 3);
            if(nextChar != '[') return nextChar;
            let delimiter = this.getStringBetweenTwoCharacters(this.input,'[',']');
            return delimiter;
        }
        return ",";
    }

    getValues(replaceChar: string):string[] {
        let stringValues =  this.input;
        stringValues = stringValues.replace("//",'');
        stringValues = stringValues.replace("[",'');
        stringValues = stringValues.replace("]",'');
        stringValues = stringValues.replace("\n",replaceChar);
        return stringValues.split(replaceChar);
    }

    getStringBetweenTwoCharacters(str:string, startChar:string, endChar:string):string {
        return str.substring(
            str.lastIndexOf(startChar) + 1, 
            str.lastIndexOf(endChar)
        );
    }

}