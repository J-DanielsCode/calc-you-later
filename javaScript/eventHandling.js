import { Calculator } from "./calcLogic.js";
import { appendNumberOrDecimalOrSqrRt, clearDisplay1, deleteLastChar, clearAllDisplays, appendSymbol } from "./displayLogic.js";

export class EventHandler {
    
    constructor () { 
        this.inputDisplay = document.getElementById("current-input"); //initiates input display
        this.prevDisplay = document.getElementById("prev-input");
        this.dmas = ['/', '+', '-', '*']; //dmas stands for divide, multiply, add, subtract taken from BIDMAS
        this.calc = new Calculator();
        this.lastChar;
        this.mrc = 0;
    }

    //handles click of number keys
    handleNumberClick = event => {
        appendNumberOrDecimalOrSqrRt(event.target.textContent.trim());
    }

    // handles click of decimal button
    handleDecimalClick = event => {
        if (this.inputDisplay.textContent.length < 16) {
            this.lastChar = this.inputDisplay.textContent[this.inputDisplay.textContent.length -1];
            if (this.lastChar !== '.' && this.lastChar !== '%') {
                //creates pattern to split display by the dmas
                const pattern = new RegExp(`[${this.dmas.map(char => `\\${char}`).join("")}]`, "g");
                //array of numbers in display
                const numbers = this.inputDisplay.textContent.split(pattern);

                console.log("Pattern array: " + pattern);
                console.log("Current number:" + numbers[numbers.length - 1] );

                //if the final character is not a '.' then run 
                if (!numbers[numbers.length - 1].includes('.')) {
                    appendNumberOrDecimalOrSqrRt('.')
                }
            }
        }
    }

    handleBackspaceClick = event => {
        deleteLastChar();
    }

    handleClearEntryClick = event => {
        clearDisplay1();
    }

    handleClearAllClick = event => {
        clearAllDisplays();
    }

    handleAdditionClick = event => {
        console.log('addition clicked');
        appendSymbol('+');
    }

    handleSubtractionClick = event => {
        console.log('Subtraction clicked');
        appendSymbol('-');
    }

    handleMultiplyClick = event => {
        console.log('Multiplication clicked.');
        appendSymbol('*');
    }

    handleDivideClick = event => {
        console.log('Division clicked.');
        appendSymbol('/');
    }

    handleEqualsClick = event => {

        console.log('Equals clicked.');
        const [displayString, ans] = this.calc.cleanEquation(this.inputDisplay.textContent)

        this.inputDisplay.textContent = ans;
        this.prevDisplay.textContent = displayString;
    }

    handlePercentClick = event => {
        console.log('Percent clicked.');
        console.log(this.inputDisplay.textContent[this.inputDisplay.textContent.length - 1])
        this.lastChar = this.inputDisplay.textContent[this.inputDisplay.textContent.length - 1];
        if (this.lastChar !== '%') {
            appendSymbol('%');
        }

    }

    handleSquareRootClick = event => {
        this.lastChar = this.inputDisplay.textContent[this.inputDisplay.textContent.length - 1];
        if (this.lastChar !== '√') {
            appendNumberOrDecimalOrSqrRt('√');
        }  
    };

    handleMemDisplayClick = event => {
        console.log("MRC clicked");
        this.inputDisplay.textContent = this.mrc.toString();
        console.log(typeof this.inputDisplay.textContent);
    }

    handleMemDisplayDblclick = event => {
        console.log("MRC double clicked");
        this.mrc = 0;
    }

    handleMemPlusClick = event => {
        console.log("M+ double clicked");
        let displayIsNumberString;

        for (let i = 0; i < this.inputDisplay.textContent.length; i++) {
            for (let j = 0; j < this.dmas.length; j++) {
                if(this.inputDisplay.textContent[i] !== '%' && this.inputDisplay.textContent[i] !== '√' && this.inputDisplay.textContent[i] !== this.dmas[j]) {
                    displayIsNumberString = true;
                }
            }
        }
    this.mrc = this.calc.cleanAns(this.mrc += Number(this.inputDisplay.textContent));        
    }

    handleMemSubtractClick = event => {
        console.log("M- double clicked");
        let displayIsNumberString;

        for (let i = 0; i < this.inputDisplay.textContent.length; i++) {
            for (let j = 0; j < this.dmas.length; j++) {
                if(this.inputDisplay.textContent[i] !== '%' && this.inputDisplay.textContent[i] !== '√' && this.inputDisplay.textContent[i] !== this.dmas[j]) {
                    displayIsNumberString = true;
                }
            }
        }
        this.mrc = this.calc.cleanAns(this.mrc -= Number(this.inputDisplay.textContent));
    }

}