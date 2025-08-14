import { Calculator } from "./calcLogic.js";
import { appendNumberOrDecimalOrSqrRt, clearDisplay1, deleteLastChar, clearAllDisplays, appendSymbol } from "./displayLogic.js";

export class EventHandler {
    
    constructor () { 
        this.inputDisplay = document.querySelector("#current-input"); //initiates input display
        this.memoryDisplay = document.querySelector("#prev-input");
        this.dmas = ['/', '+', '-', '*']; //dmas stands for divide, multiply, add, subtract taken from BIDMAS
        this.calc = new Calculator();
        this.lastChar;
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

                //if current number in equation does not include a '.' then run 
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
        this.memoryDisplay.textContent = displayString;
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
}