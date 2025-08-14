import { EventHandler } from "./eventHandling.js";

const eventHandler = new EventHandler();
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
        key.addEventListener("click", eventHandler.handleNumberClick);
    });

    // adds decimal to the display
    decimalKey.addEventListener("click", eventHandler.handleDecimalClick);

    //clears entry
    clearEntry.addEventListener("click", eventHandler.handleClearEntryClick);

    //removes last digit entered
    backspace.addEventListener('click', eventHandler.handleBackspaceClick);

    //removes all numbers from calculation
    clearAll.addEventListener("click", eventHandler.handleClearAllClick);

    //runs when + clicked
    addition.addEventListener("click", eventHandler.handleAdditionClick);

    //handles subtraction
    subtraction.addEventListener("click", eventHandler.handleSubtractionClick);

    //handles equals
    equals.addEventListener("click", eventHandler.handleEqualsClick);

    multiply.addEventListener("click", eventHandler.handleMultiplyClick);

    division.addEventListener("click", eventHandler.handleDivideClick);

    percentKey.addEventListener("click", eventHandler.handlePercentClick);

    squareRootKey.addEventListener("click", eventHandler.handleSquareRootClick);
})
