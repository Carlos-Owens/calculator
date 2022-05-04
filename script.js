let num1 = 0;
let num2 = 0;
let tempNum1 = [];
let tempNum2 = [];
let firstValue = 0;
let tempOperator = [];
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

function operator (operator, num1, num2 ) {
    
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
}