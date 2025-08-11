
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

const cleanEquation = () => {
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    const equationArr = displayString.split("");
    let containsDmas;
    let containsPercent;


    //checks if dmas and then % are in the quation - handles equation accordingly.
    for (let i = 0; i < equationArr.length; i++) {
        for (let j = 0; j < dmas.length; j++) {
            if ( equationArr[i] === dmas[j]) {
                containsDmas = true; //update with react states
                if (equationArr[i] === '%') {
                    containsPercent = true;
                    console.log("The equation contains a '%'!");

                }                   
            } else {
                if (equationArr[i] === '%') {
                    containsPercent = true;
                    console.log("The equation contains a '%'!");
                }
            }
        }
    }

    // handles the equation on display
    if(!containsDmas && !containsPercent) { //if the equations doesnt contain a '+,-,*,/' or a %
        inputDisplay.textContent += "";
        memoryDisplay.textContent = displayString;
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
    } else if (containsDmas && !containsPercent) { //if the equation contains a '+,-,*,/' but not a %
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
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
    } else if(!containsDmas && containsPercent) { //if the equation contains a % but not a '+,-,*,/'
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
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
    } else if (containsDmas && containsPercent) { //if the equations contains both a '+,-,*,/' and %
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
        if (dmas.includes(lastChar)) {
            displayString = displayString.slice(0, -1);
            // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
            displayString = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
            let ans = eval(displayString);
            memoryDisplay.textContent = displayString;
            inputDisplay.textContent = ans;
        } else {
            memoryDisplay.textContent = displayString;
            // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
            displayString = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
            let ans = eval(displayString);
            inputDisplay.textContent = ans;
        } 
    } else {
        console.log("Error occurred during handling of '=' please use the symbols or operators provided!");
    }

    //handling √
    displayString = displayString.replace(/√(\d+(\.\d+)?)/g, Math.sqrt((_, num) => parseFloat(num)));
}

const equals = document.querySelector("#equals");
const handleEqualsClick = event => {

    console.log('Equals clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    const equationArr = displayString.split("");
    let containsDmas;
    let containsPercent;

    // debugging
    // console.log('Contains Dmas: ' + containsDmas)
    // console.log('Contains %: ' + containsPercent)

    //checks if dmas and then % are in the quation - handles equation accordingly.
    for (let i = 0; i < equationArr.length; i++) {
        for (let j = 0; j < dmas.length; j++) {
            if ( equationArr[i] === dmas[j]) {
                containsDmas = true; //update with react states
                if (equationArr[i] === '%') {
                    containsPercent = true;
                    console.log("The equation contains a '%'!");

                }                   
            } else {
                if (equationArr[i] === '%') {
                    containsPercent = true;
                    console.log("The equation contains a '%'!");
                }
            }
        }
    }

    // handles the equation on display
    if(!containsDmas && !containsPercent) { //if the equations doesnt contain a '+,-,*,/' or a %
        inputDisplay.textContent += "";
        memoryDisplay.textContent = displayString;
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
    } else if (containsDmas && !containsPercent) { //if the equation contains a '+,-,*,/' but not a %
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
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
    } else if(!containsDmas && containsPercent) { //if the equation contains a % but not a '+,-,*,/'
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
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
    } else if (containsDmas && containsPercent) { //if the equations contains both a '+,-,*,/' and %
        console.log(`Equation contains: Dmas - ${containsDmas}  % - ${containsPercent}`);
        if (dmas.includes(lastChar)) {
            displayString = displayString.slice(0, -1);
            // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
            displayString = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
            let ans = eval(displayString);
            memoryDisplay.textContent = displayString;
            inputDisplay.textContent = ans;
        } else {
            memoryDisplay.textContent = displayString;
            // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
            displayString = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
            let ans = eval(displayString);
            inputDisplay.textContent = ans;
        } 
    } else {
        console.log("Error occurred during handling of '=' please use the symbols or operators provided!");
    }

    //handling √
    
    displayString = displayString.replace(/√(\d+(\.\d+)?)/g, Math.sqrt((_, num) => parseFloat(num)));
}

const percentKey = document.querySelector("#percent");
const handlePercentClick = event => {
    console.log('Percent clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);

    if(lastChar === '%') {
        inputDisplay.textContent += "";
    } else if (dmas.includes(lastChar)) {
        inputDisplay.textContent += "";
    } else {
        inputDisplay.textContent += '%';
    }

}

const squareRootKey = document.querySelector("#square-root");
const handleSquareRootClick = event => {
    inputDisplay.textContent += '√';
};

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
