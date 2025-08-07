
const display = document.querySelector("#display-info"); //initiates display
let entry1; //initiates calculation to be run
let entry2;
let action;

const numberKeys = document.querySelectorAll(".keys.number");
//handles click of number keys
const handleNumberClick = event => {
    const number = event.target.textContent.trim();
    display.textContent += number;
}

const decimalKey = document.querySelector("#decimal");
// handles click of decimal button
const handleDecimalClick = event => {
    // if a '.' is not already in the display when clicked, it will be added to display
    if (!display.textContent.includes(decimalKey.textContent.trim())) {
        display.textContent += decimalKey.textContent.trim();
        console.log(display.textContent); //debugging
    } else {
        display.textContent += "";
        console.log(display.textContent); //debugging
    }
}

const backspace = document.querySelector("#backspace");
const handleBackspaceClick = event => {
    display.textContent = display.textContent.slice(0,-1);
}

const clearEntry = document.querySelector("#clearEntry");
const handleClearEntryClick = event => {
    display.textContent = "";
    console.log('Entry Cleared!');
}

const clearAll = document.querySelector("#clear-all");
const handleClearAllClick = event => {
    display.textContent = "";
    entry1 = "";
    entry2 = "";
}

const addition = document.querySelector("#addition");
const handleAdditionClick = event => {
    console.log('addition clicked');
    if (!entry1) {
        entry1 = display.textContent; //adds number to running calc
        console.log(`Entry 1: ${entry1}`);
        display.textContent = ""; //clears display
        action = 'add';
    } else {
        entry2 = display.textContent;
        console.log(`Entry 2: ${entry2}`)
        let ans = Number(entry1) + Number(entry2);
        display.textContent = ans;
        console.log(`Answer: ${ans}`);
        entry1 = "";
    } 
}

const subtraction = document.querySelector("#subtraction");
const handleSubtractionClick = event => {
    console.log('Subtraction clicked.');
    if (!entry1) {
        entry1 = display.textContent; //adds number to running calc
        console.log(`Entry 1: ${entry1}`);
        display.textContent = ""; //clears display  
        action = "subtract";      
    } else {
        entry2 = display.textContent;
        console.log(`Entry 2: ${entry2}`)
        let ans = Number(entry1) - Number(entry2);
        display.textContent = ans;
        console.log(`Answer: ${ans}`);
        entry1 = "";
    }
}
const equals = document.querySelector("#equals");
const handleEqualsClick = event => {
    if (!display.textContent) {
        display.textContent += "";
    } else {
        if (entry1 && action === 'add') {
            entry2 = display.textContent;
            let ans = Number(entry1) + Number(entry2);
            display.textContent = ans;
        } else if (entry1 && action === "subtract") {
            entry2 = display.textContent;
            let ans = Number(entry1) - Number(entry2);
            display.textContent = ans;
        }
    }
}

const multiply = document.querySelector("#multiply");
const handleMultiplyClick = event => {
    console.log('Multiplication clicked.');
    if (!entry1) {
        entry1 = display.textContent; //adds number to running calc
        console.log(`Entry 1: ${entry1}`);
        display.textContent = ""; //clears display  
        action = "multiply";      
    } else {
        entry2 = display.textContent;
        console.log(`Entry 2: ${entry2}`)
        let ans = Number(entry1) * Number(entry2);
        display.textContent = ans;
        console.log(`Answer: ${ans}`);
        entry1 = "";
    }
}

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

})
