
const inputDisplay = document.querySelector("#current-input");
const prevDisplay = document.querySelector("#prev-input");
const dmas = [
    '/',
    '+',
    '-',
    '*'
];

export const appendNumberOrDecimalOrSqrRt = value => {
    if (inputDisplay.textContent.length < 16) {
        inputDisplay.textContent += value;
    }
}

export const clearDisplay1 = () => {
    inputDisplay.textContent = "";
}

export const clearAllDisplays = () => {
    inputDisplay.textContent = "";
    prevDisplay.textContent = "";
}

export const deleteLastChar = () => {
    inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
}

export const appendSymbol = symbol => {
    let lastChar = inputDisplay.textContent[inputDisplay.textContent.length - 1]
    if (inputDisplay.textContent.length < 16) {
        //if last charcter is not a dmas, run
        if (!dmas.includes(lastChar)) {
            inputDisplay.textContent += symbol;
        }
    }
}