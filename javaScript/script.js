
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
    displayString = inputDisplay.textContent;
    const number = event.target.textContent.trim();
    if (displayString.length < 16){
        inputDisplay.textContent += number;
    } else {
        inputDisplay.textContent += "";
    }
}

const decimalKey = document.querySelector("#decimal");
// handles click of decimal button
const handleDecimalClick = event => {
    // if a '.' is not already in the display when clicked, it will be added to display
    if (displayString.length < 16) {
        if (!inputDisplay.textContent.includes(decimalKey.textContent.trim())) {
            inputDisplay.textContent += decimalKey.textContent.trim();
        } else {
            inputDisplay.textContent += "";
        }
    } else {
        inputDisplay.textContent += "";
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

    if (displayString.length < 16) {
        if (dmas.includes(lastChar)) {
            inputDisplay.textContent += "";
        } else {
            inputDisplay.textContent += '+';
        }
    } else {
        inputDisplay.textContent += '';
    }
}

const subtraction = document.querySelector("#subtraction");
const handleSubtractionClick = event => {
    console.log('Subtraction clicked');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];

    if (displayString.length < 16) {
        if (dmas.includes(lastChar)) {
            inputDisplay.textContent += "";
        } else {
            inputDisplay.textContent += '-';
        }
    } else {
        inputDisplay.textContent += '';
    }
}


const multiply = document.querySelector("#multiply");
const handleMultiplyClick = event => {
    console.log('Multiplication clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];

    if (displayString.length < 16) {
        if (dmas.includes(lastChar)) {
            inputDisplay.textContent += "";
        } else {
            inputDisplay.textContent += '*';
        }
    } else {
        inputDisplay.textContent += '';
    }
}

const division = document.querySelector("#division");
const handleDivideClick = event => {
    console.log('Division clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];

    if (displayString.length < 16) {
        if (dmas.includes(lastChar)) {
            inputDisplay.textContent += "";
        } else {
            inputDisplay.textContent += '/';
        }
    } else {
        inputDisplay.textContent += '';
    }
}

const cleanDisplayString = () => {
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];

    if (dmas.includes(lastChar)) {
        displayString = displayString.slice(0, -1);
        return displayString;
    } else {
        return displayString;
    }

}

const cleanAns = ans => {
    const ansString = ans.toString();
    const containsDecimal = ansString.includes('.');

    const decimalIndex = ansString.indexOf('.');
    
    if (ansString.length <= 16 && containsDecimal && decimalIndex < 15) {
        console.log("Ans is <= 16, contains a decimal and decimal index < 15")
        return ans
    } else if (ansString.length <= 16 && containsDecimal && decimalIndex === 15) {
        console.log("Ans is <= 16, contains a decimal and decimal index = 15")
        return Math.round(ans);
    } else if (ansString.length <= 16 && !containsDecimal) {
        console.log("Ans is <= 16, does not contains a decimal")
        return ans;
    } else if (ansString.length > 16) {
        if (containsDecimal) {
            if (decimalIndex === 15 || decimalIndex === 16) {
                console.log("Ans is > 16, contains a decimal, decimal index = 15 OR 16")
                return Math.round(ans)
            } else if (decimalIndex < 15) {
                console.log("Ans is > 16, contains a decimal, decimal index < 15")
                let indexAndLengthDiff = 15 - decimalIndex;
                return Number.parseFloat(ans).toFixed(indexAndLengthDiff);
            } else if (decimalIndex > 16) {
                console.log("Ans is > 16, contains a decimal, decimal index > 17")
                let expo = Number.parseFloat(ans).toExponential(3);
                return expo
            }
        } else {
            console.log("Ans is > 16, contains no decimal")
            let expo = Number.parseFloat(ans).toExponential(3);
            return expo;
        }
    }
}

const cleanEquation = () => {
    displayString = cleanDisplayString();
    const displayArr = displayString.split("");
    let equation = displayString;
    let containsDmas;
    let containsPercent;
    let containsSqRt;


    //checks if dmas and then % are in the quation - handles equation accordingly.
    for (let i = 0; i < displayArr.length; i++) {
        if (displayArr[i] === '%') {
            containsPercent = true;
        }   
        if (displayArr[i] === '√') {
            containsSqRt = true;
        }
        for (let j = 0; j < dmas.length; j++) {
            if ( displayArr[i] === dmas[j]) {
                containsDmas = true; //update with react states
            }
        }
    }

    console.log(`Equation before handling '%': ${equation}`);

    if (containsDmas && containsPercent) {
        // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
        equation = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
        console.log(`Equation before handling '√': ${equation}`);

        if (containsSqRt) {
            //handling √
            equation = equation.replace(/√(\d+(\.\d+)?)/g, (_, num) => Math.sqrt(parseFloat(num)));
        }
    } else {
        console.log(`Equation before handling '√': ${equation}`);

        if (containsSqRt) {
            //handling √
            equation = displayString.replace(/√(\d+(\.\d+)?)/g, (_, num) => Math.sqrt(parseFloat(num)));
        }
    }

    console.log(`Equation: ${equation}`)
    console.log("Equation is a: " + typeof equation)
    let ans = eval(equation);
    let cleanAnswer = cleanAns(ans);
    console.log(`Clean answer is: ${cleanAnswer}`);
    return [displayString, ans];
}

const equals = document.querySelector("#equals");
const handleEqualsClick = event => {

    console.log('Equals clicked.');
    displayString = cleanEquation()[0];
    let ans = cleanAns(cleanEquation()[1]);

    console.log(displayString);
    console.log(ans);

    inputDisplay.textContent = ans;
    memoryDisplay.textContent = displayString;
}

const percentKey = document.querySelector("#percent");
const handlePercentClick = event => {
    console.log('Percent clicked.');
    displayString = inputDisplay.textContent;
    lastChar = displayString[displayString.length - 1];
    console.log(`Display String: ${displayString}`);
    console.log(`Last Character: ${lastChar}`);


    if (displayString.length < 16) {
        if (lastChar === '%') {
            inputDisplay.textContent += "";
        } else if (dmas.includes(lastChar)) {
            inputDisplay.textContent += "";
        } else {
            inputDisplay.textContent += '%';
        }
    } else {
        inputDisplay.textContent += '';
    }

}

const squareRootKey = document.querySelector("#square-root");
const handleSquareRootClick = event => {
    if (displayString.length < 16) {
        inputDisplay.textContent += '√';    
    } else {
        inputDisplay.textContent += '';
    }
    
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
