import { EventHandler } from "./eventHandling.js";

const eventHandler = new EventHandler();
const numberKeys = document.querySelectorAll(".keys.number");
const decimalKey = document.getElementById("decimal");
const backspace = document.getElementById("backspace");
const clearEntry = document.getElementById("clearEntry");
const clearAll = document.getElementById("clear-all");
const addition = document.getElementById("addition");
const subtraction = document.getElementById("subtraction");
const multiply = document.getElementById("multiply");
const division = document.getElementById("division");
const equals = document.getElementById("equals");
const percentKey = document.getElementById("percent");
const squareRootKey = document.getElementById("square-root");
const memDisplay = document.getElementById("mrc");
const memSubtract = document.getElementById("m-minus");
const memPlus = document.getElementById("m-plus");

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

    memDisplay.addEventListener("click", eventHandler.handleMemDisplayClick);

    memDisplay.addEventListener("dblclick", eventHandler.handleMemDisplayDblclick);

    memSubtract.addEventListener("click", eventHandler.handleMemSubtractClick);

    memPlus.addEventListener("click", eventHandler.handleMemPlusClick);
})
