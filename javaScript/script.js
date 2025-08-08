
const inputDisplay = document.querySelector("#current-input"); //initiates input display
const memoryDisplay = document.querySelector("#prev-input");
const dmas = [
    '/',
    '+',
    '-',
    '*'
];

let displayString;
let lastChar;

const numberKeys = document.querySelectorAll(".keys.number");
//handles click of number keys
const handleNumberClick = event => {
    const number = event.target.textContent.trim();
    inputDisplay.textContent += number;
}

const decimalKey = document.querySelector("#decimal");
// handles click of decimal button
const handleDecimalClick = event => {
    // if a '.' is not already in the display when clicked, it will be added to display
    if (!inputDisplay.textContent.includes(decimalKey.textContent.trim())) {
        inputDisplay.textContent += decimalKey.textContent.trim();
        console.log(inputDisplay.textContent); //debugging
    } else {
        inputDisplay.textContent += "";
        console.log(inputDisplay.textContent); //debugging
    }
}

const backspace = document.querySelector("#backspace");
const handleBackspaceClick = event => {
    inputDisplay.textContent = inputDisplay.textContent.slice(0,-1);
}

const clearEntry = document.querySelector("#clearEntry");
const handleClearEntryClick = event => {
    inputDisplay.textContent = "";
    console.log('Entry Cleared!');
}

const clearAll = document.querySelector("#clear-all");
const handleClearAllClick = event => {
    inputDisplay.textContent = "";
    memoryDisplay.textContent = "";
}

const addition = document.querySelector("#addition");
const handleAdditionClick = event => {
    console.log('addition clicked');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);

    if (dmas.includes(lastChar)) {
        inputDisplay.textContent += "";
    } else {
        // calculation += inputDisplay.textContent;
        // calculation += '+';
        inputDisplay.textContent += '+';
        // console.log(calculation);
    }
}

const subtraction = document.querySelector("#subtraction");
const handleSubtractionClick = event => {
    console.log('Subtraction clicked');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);

    if (dmas.includes(lastChar)) {
        inputDisplay.textContent += "";
    } else {
        inputDisplay.textContent += '-';
    }
}


const multiply = document.querySelector("#multiply");
const handleMultiplyClick = event => {
    console.log('Multiplication clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);

    if (dmas.includes(lastChar)) {
        inputDisplay.textContent += "";
    } else {
        inputDisplay.textContent += '*';
    }
}

const division = document.querySelector("#division");
const handleDivideClick = event => {
    console.log('Division clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);

    if (dmas.includes(lastChar)) {
        inputDisplay.textContent += "";
    } else {
        inputDisplay.textContent += '/';
    }
}

const equals = document.querySelector("#equals");
const handleEqualsClick = event => {

    console.log('Equals clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    

    
    if (dmas.includes(lastChar)) {
        displayString = displayString.slice(0, -1);
        let ans = eval(displayString);
        memoryDisplay.textContent = displayString;
        inputDisplay.textContent = ans;
    } else {
        memoryDisplay.textContent = displayString;
        let ans = eval(displayString);
        inputDisplay.textContent = ans;
    }

    const equation = Number(displayString);
    console.log(equation);



    // if (!inputDisplay.textContent) {
    //     inputDisplay.textContent += "";
    // } else {
    //     if (entry1 && action === 'add') {
    //         entry2 = inputDisplay.textContent;
    //         let ans = Number(entry1) + Number(entry2);
    //         inputDisplay.textContent = ans;
    //     } else if (entry1 && action === "subtract") {
    //         entry2 = inputDisplay.textContent;
    //         let ans = Number(entry1) - Number(entry2);
    //         inputDisplay.textContent = ans;
    //     } else if (entry1 && action === "multiply") {
    //         entry2 = inputDisplay.textContent;
    //         let ans = Number(entry1) * Number(entry2);
    //         inputDisplay.textContent = ans;
    //     } else if (entry1 && action === "divide") {
    //         entry2 = inputDisplay.textContent;
    //         let ans = Number(entry1) / Number(entry2);
    //         inputDisplay.textContent = ans;
    //     }
    // }
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

    division.addEventListener("click", handleDivideClick);


})
