// Adds numbers to the display
document.addEventListener("DOMContentLoaded", () => {

    const numberKeys = document.querySelectorAll(".keys.number");
    const display = document.querySelector("#display-info");

    // for each key clicked the text within the key is added to the display
    numberKeys.forEach((key) => {
        key.addEventListener("click", () => {
            const number = key.textContent.trim();
            display.textContent += number;
            console.log(number);
        })
    })
})

// adds decimals to the display
document.addEventListener("DOMContentLoaded", () => {

    const decimalKey = document.querySelector("#decimal");
    const display = document.querySelector("#display-info");

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
})

document.addEventListener("DOMContentLoaded", () => {

    const clearEntry = document.querySelector("#clearEntry");
    const display = document.querySelector("#display-info");

    clearEntry.addEventListener("click", () => {
        display.textContent = "";
        console.log('Entry Cleared!')
    })



})