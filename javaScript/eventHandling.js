import { Calculator } from "./calcLogic.js";
import { appendNumberOrDecimal, clearDisplay1, deleteLastChar, clearAllDisplays, appendSymbol } from "./displayLogic.js";

export class EventHandler {
    
    constructor () { 
        this.inputDisplay = document.querySelector("#current-input"); //initiates input display
        this.memoryDisplay = document.querySelector("#prev-input");
        this.calc = new Calculator();
    }

    //handles click of number keys
    handleNumberClick = event => {
        appendNumberOrDecimal(event.target.textContent.trim());
    }

    // handles click of decimal button
    handleDecimalClick = event => {
        // if a '.' is not already in the display when clicked, it will be added to display

        if (this.inputDisplay.textContent.length < 16) {
            if (this.inputDisplay.textContent[this.inputDisplay.textContent.length -1] !== '.') {
                // need to code a regex that checks if there is another '.' between here and the previous symbol.
                appendNumberOrDecimal('.')
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
        if (this.inputDisplay.textContent[this.inputDisplay.textContent - 1] !== '%') {
            appendSymbol('%');
        }

    }

    handleSquareRootClick = event => {
        if (this.inputDisplay.textContent[this.inputDisplay.textContent - 1] !== '%') {
            appendSymbol('√');
        }
        
    };
}