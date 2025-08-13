import { handleAdditionClick, 
    handleSubtractionClick, 
    handleBackspaceClick, 
    handleClearAllClick, 
    handleClearEntryClick, 
    handleDecimalClick, 
    handleDivideClick, 
    handleEqualsClick, 
    handleMultiplyClick,
    handleNumberClick,
    handlePercentClick,
    handleSquareRootClick
} from "./eventHandling.js";

const numberKeys = document.querySelectorAll(".keys.number");
const decimalKey = document.querySelector("#decimal");
const backspace = document.querySelector("#backspace");
const clearEntry = document.querySelector("#clearEntry");
const clearAll = document.querySelector("#clear-all");
const addition = document.querySelector("#addition");
const subtraction = document.querySelector("#subtraction");
const multiply = document.querySelector("#multiply");
const division = document.querySelector("#division");
const equals = document.querySelector("#equals");
const percentKey = document.querySelector("#percent");
const squareRootKey = document.querySelector("#square-root");

document.addEventListener("DOMContentLoaded", () => {

    // Adds numbers to the display
    numberKeys.forEach((key) => { // for each key clicked the text within the key is added to the display
        key.addEventListener("click", handleNumberClick);
    });

    // adds decimal to the display
    decimalKey.addEventListener("click", handleDecimalClick);

    //clears entry
    clearEntry.addEventListener("click", handleClearEntryClick);

    //removes last digit entered
    backspace.addEventListener('click', handleBackspaceClick);

    //removes all numbers from calculation
    clearAll.addEventListener("click", handleClearAllClick);

    //runs when + clicked
    addition.addEventListener("click", handleAdditionClick);

    //handles subtraction
    subtraction.addEventListener("click", handleSubtractionClick);

    //handles equals
    equals.addEventListener("click", handleEqualsClick);

    multiply.addEventListener("click", handleMultiplyClick);

    division.addEventListener("click", handleDivideClick);

    percentKey.addEventListener("click", handlePercentClick);

    squareRootKey.addEventListener("click", handleSquareRootClick);
})
