export class Calculator {
    value = 0;
    constructor (input: string) {
        let char = this.getDelimiter(input);
        this.value = this.cleanString(input, char)
            .replace('\n',char)
            .split(char)   
            .map(this.cleanValue)
            .reduce(this.sumReducer);
    }

    sumReducer = (total:number, value:number):number => total + value;

    cleanValue (value:string):number {
        if (+value < 0) throw new TypeError("Negative number");
        if (+value <= 1000) return +value;
        return 0;
    }

    getDelimiter(string:string):string {
        if(string.substring(0, 2) === "//") {
            let nextChar = string.substring(2, 3);
            return (nextChar != '[') ? nextChar : this.getStringBetweenTwoCharacters(string,'[',']');
        }
        return ",";
    }

    cleanString(dirtyString:string, delimiter: string):string {
       const regex = new RegExp('[^0-9'+ delimiter + '\n]+', 'gi');
       return dirtyString.replace(regex,'');
    }

    getStringBetweenTwoCharacters(str:string, startChar:string, endChar:string):string {
        return str.substring(
            str.lastIndexOf(startChar) + 1, 
            str.lastIndexOf(endChar)
        );
    }

}