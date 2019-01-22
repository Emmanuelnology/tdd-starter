export class Calculator {
    value = 0;
    constructor (private input: string) {
        let char:string = this.getDelimiter();
        let values:number[] = this.getValues(char);
        this.value = values.reduce(this.sumReducer);
    }

    sumReducer = (total:number, value:number) => total + value;

    cleanValues (value:string):number {
        if (+value < 0) throw new TypeError("Negative number");
        if (+value <= 1000) return +value;
        return 0;
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

    getValues(replaceChar: string):number[] {
        let stringValues =  this.input;
        stringValues = stringValues.replace("//",'');
        stringValues = stringValues.replace("[",'');
        stringValues = stringValues.replace("]",'');
        stringValues = stringValues.replace("\n",replaceChar);
        let stringArray = stringValues.split(replaceChar);
        return stringArray.map(this.cleanValues);
    }



    getStringBetweenTwoCharacters(str:string, startChar:string, endChar:string):string {
        return str.substring(
            str.lastIndexOf(startChar) + 1, 
            str.lastIndexOf(endChar)
        );
    }

}