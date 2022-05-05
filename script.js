let num1 = 0;
let num2 = 0;
let tempNum1 = [];
let tempNum2 = [];
let firstValue = 0;
let tempOperator = [];
let operator = ""
//let operator = "";

function add(num1, num2) {
    let results = (num1 + num2);
    let rounded = Math.round((results + Number.EPSILON) * 100) / 100;
    rounded =  rounded.toFixed(2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

function divide(num1, num2) {
    let results = (num1 / num2);
    if (results === "infinity") {
        return "Error!";
    } else {
    let rounded = Math.round((results + Number.EPSILON) * 100) / 100;
    rounded =  rounded.toFixed(2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
    } 
}

function subtract(num1, num2) {
    let results = (num1 - num2);
    let rounded = Math.round((results + Number.EPSILON) * 100) / 100;
    rounded =  rounded.toFixed(2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;}

function multiply(num1, num2) {
    let results = (num1 * num2);
    let rounded = Math.round((results + Number.EPSILON) * 100) / 100;
    rounded =  rounded.toFixed(2);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

function operate (operator, num1, num2 ) {
    
    switch (operator) {
        case "+":
           add(num1, num2);
            break;
        case "-":
            subtract(num1, num2);
            break;
        case "*":
           multiply(num1, num2);
            break;
        case "/":
           divide(num1, num2);
            break;
    }

function runCalc() {
    
    function numClicked() {

        const operandButtons = document.querySelectorAll(".operand");
        operandButtons.forEach((button) => {
            button.addEventListener("click",  () => {
                firstValue = button.getAttribute("value");
                const calcDisplay = document.querySelector("#display");

                // appends the first number to the display
                if (operator === "") {
                    tempNum1.push(firstValue);
                    num1 = tempNum1.join("");
                    calcDisplay.textContent = num1;
                } 
                // appends the second number to the display
                else {
                    tempNum2.push(firstValue);
                    num2 = tempNum2.join("");
                    calcDisplay.textContent = num2;
                }
            });
        });
    } 

    // function operatorClicked() {

    //     const operatorButton = document.querySelectorAll(".operator");
    //     operatorButton.forEach((button) => {
    //         button.addEventListener("click", () => {
    //             operator = button.getAttribute(".value");
    //             tempOperator.push(operator);

    //             if((tempNum1 !== "") && (tempNum2 !== "")) {
    //                 const calcDisplay = document.querySelector("#display");
    //                 num1 = tempNum1.join("");
    //                 num2 = tempNum2.join("");

    //             }
    //         })
    //     })
    // }
}

}