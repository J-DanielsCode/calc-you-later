import { Calculator } from "./calcLogic.js";
import { appendNumberOrDecimal, clearDisplay1, deleteLastChar, clearAllDisplays, appendSymbol } from "./displayLogic.js";

const inputDisplay = document.querySelector("#current-input"); //initiates input display
const memoryDisplay = document.querySelector("#prev-input");
const calc = new Calculator();


//handles click of number keys
export const handleNumberClick = event => {
    appendNumberOrDecimal(event.target.textContent.trim());
}

// handles click of decimal button
export const handleDecimalClick = event => {
    // if a '.' is not already in the display when clicked, it will be added to display

    if (inputDisplay.textContent.length < 16) {
        if (inputDisplay.textContent[inputDisplay.textContent.length -1] !== '.') {
            // need to code a regex that checks if there is another '.' between here and the previous symbol.
            appendNumberOrDecimal('.')
        }
    }
}

export const handleBackspaceClick = event => {
    deleteLastChar();
}

export const handleClearEntryClick = event => {
    clearDisplay();
}

export const handleClearAllClick = event => {
    clearAllDisplays();
}

export const handleAdditionClick = event => {
    console.log('addition clicked');
    appendSymbol('+');
}

export const handleSubtractionClick = event => {
    console.log('Subtraction clicked');
    appendSymbol('-');
}

export const handleMultiplyClick = event => {
    console.log('Multiplication clicked.');
    appendSymbol('*');
}

export const handleDivideClick = event => {
    console.log('Division clicked.');
    appendSymbol('/');
}

export const handleEqualsClick = event => {

    console.log('Equals clicked.');
    const [displayString, ans] = calc.cleanEquation(inputDisplay.textContent)

    inputDisplay.textContent = ans;
    memoryDisplay.textContent = displayString;
}

export const handlePercentClick = event => {
    console.log('Percent clicked.');
    if (inputDisplay.textContent[inputDisplay.textContent - 1] !== '%') {
        appendSymbol('%');
    }

}

export const handleSquareRootClick = event => {
    if (inputDisplay.textContent[inputDisplay.textContent - 1] !== '%') {
        appendSymbol('√');
    }
    
};