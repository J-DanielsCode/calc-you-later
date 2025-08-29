
export class Calculator {
    constructor() {
        this.dmas = ['/', '+', '-', '*'];
    }
    cleanDisplayString (displayString) {
        //trims trailing 0s in floats (e.g., 5.0700 -> 5.07)
        displayString = displayString.replace(/(\.\d+?)0+(?!\d)/g, "$1");
        //trims integer leadin 0s (e.g., 0005.07 -> 5.07)
        displayString = displayString.replace(/(^|[+\-*/(])0+(?=\d)/g, "$1");
        // drop ".0" endings entirely (e.g., 5.000 -> 5)
        displayString = displayString.replace(/\.0+\b/g, "");
        
        console.log("Cleaned display string: " + displayString)
        const lastChar = displayString[displayString.length - 1];

        //removes last char from display string if it is  one of +, -, *, /
        if (this.dmas.includes(lastChar)) {
            displayString = displayString.slice(0, -1);
            return displayString;
        } else {
            return displayString;
        }
    }

    cleanAns (ans) { //ensures answer is no longer than 16 chars
        const ansString = ans.toString();
        const containsDecimal = ansString.includes('.');
        const decimalIndex = ansString.indexOf('.');       

        if (ansString.length <= 16) {
            if (!containsDecimal) return ans;
            if (decimalIndex === 15) return Math.round(ans);
            return ans;
        }

        if (!containsDecimal) {
            return Number.parseFloat(ans).toExponential(3);
        }

        if (decimalIndex === 15 || decimalIndex === 16) {
            return Math.round(ans);
        }

        if (decimalIndex < 15) {
            let indexAndLengthDiff = 15 - decimalIndex;
            return Number.parseFloat(ans).toFixed(indexAndLengthDiff).replace(/0+$/, "");
        }

        if (decimalIndex > 16) {
            return Number.parseFloat(ans).toExponential(3);
        }
        //testing gpg
    }

    cleanEquation (displayString) {
        displayString = this.cleanDisplayString(displayString);
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
            for (let j = 0; j < this.dmas.length; j++) {
                if ( displayArr[i] === this.dmas[j]) {
                    containsDmas = true; //update with react states
                }
            }
        }

        // if equation contains dmas and %
        if (containsDmas && containsPercent) {
            // checks for numbers before the % until index0 or a dmas, then turns the value% to its equivalent decimal. 
            equation = displayString.replace(/(\d+(\.\d+)?)%/g, (_, num) => parseFloat(num) / 100);
            console.log(`Equation before handling '√': ${equation}`);
            //handling √ 
            if (containsSqRt) {
                // checks for numbers after the √, then turns the value to its equivalent number.
                equation = equation.replace(/√(\d+(\.\d+)?)/g, (_, num) => Math.sqrt(parseFloat(num)));
            }
            //
        } else {
            console.log(`Equation before handling '√': ${equation}`);
            //handling √
            if (containsSqRt) {
                equation = displayString.replace(/√(\d+(\.\d+)?)/g, (_, num) => Math.sqrt(parseFloat(num)));
            }
        }

        console.log(`Equation: ${equation}`)
        // console.log("Equation is a: " + typeof equation)
        let ans = eval(equation);
        let cleanAnswer = this.cleanAns(ans);
        console.log(`Clean answer is: ${cleanAnswer}`);
        return [displayString, cleanAnswer];
    }
}