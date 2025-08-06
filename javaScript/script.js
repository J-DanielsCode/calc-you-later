
document.addEventListener("DOMContentLoaded", () => {

    const display = document.querySelector("#display-info");

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

    // clears entry
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

})
