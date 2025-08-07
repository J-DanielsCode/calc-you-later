
document.addEventListener("DOMContentLoaded", () => {

    const display = document.querySelector("#display-info"); //initiates display
    let number1; //initiates calculation to be run
    let number2;

    // Adds numbers to the display
    const numberKeys = document.querySelectorAll(".keys.number");
    // for each key clicked the text within the key is added to the display
    numberKeys.forEach((key) => {
        key.addEventListener("click", () => {
            const number = key.textContent.trim();
            display.textContent += number;
            console.log(number);
        })
    })

    // adds decimals to the display
    const decimalKey = document.querySelector("#decimal");
    // if a '.' is not already in the display when clicked, it will be added to display
    decimalKey.addEventListener("click", () => {
        if (!display.textContent.includes(decimalKey.textContent.trim())) {
            display.textContent += decimalKey.textContent.trim();
            console.log(display.textContent); //debugging
        } else {
            display.textContent += "";
            console.log(display.textContent); //debugging
        }
    })

    //clears entry
    const clearEntry = document.querySelector("#clearEntry");
    clearEntry.addEventListener("click", () => {
        display.textContent = "";
        console.log('Entry Cleared!');
    })

    //removes last digit entered
    const backspace = document.querySelector("#backspace");
    backspace.addEventListener('click', () => {
        display.textContent = display.textContent.slice(0,-1);
    })

    //removes all numbers from calculation
    const clearAll = document.querySelector("#clear-all");
    clearAll.addEventListener("click", () => {
        display.textContent = "";
        number1 = "";
        number2 = "";
    })

    //runs when + clicked
    const addition = document.querySelector("#addition");
    addition.addEventListener("click", () => {
        console.log('addition clicked');
        if (!number1) {
            number1 = display.textContent; //adds number to running calc
            console.log(`Calculation: ${number1}`);
            display.textContent = ""; //clears display
        } else {
            number2 = display.textContent;
            console.log(`Number2: ${number2}`)
            let ans = Number(number1) + Number(number2);
            display.textContent = ans;
            console.log(`Answer: ${ans}`);
            calculation = "";
        }     
    })

    //handles subtraction
    const subtraction = document.querySelector("#subtraction");
    subtraction.addEventListener("click", () => {
        console.log('Subtraction clicked.');
        if (!number1) {
            number1 = display.textContent; //adds number to running calc
            console.log(`Calculation: ${number1}`);
            display.textContent = ""; //clears display        
        } else {
            number2 = display.textContent;
            console.log(`Number2: ${number2}`)
            let ans = Number(number1) - Number(number2);
            display.textContent = ans;
            console.log(`Answer: ${ans}`);
            calculation = "";
        }
    })

})
