// declare global variables and initialize
let num1 = 0;
let tempNum1 = [];
let num2 = 0;
let tempNum2 = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];


function add(num1, num2) {
    let addValue = (num1 + num2);
    let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
  
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

function subtract(num1, num2) {
    let subtractValue = (num1 - num2);
    let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);

    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

function multiply(num1, num2) {
    let multiplyValue = (num1 * num2);
    let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);

    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
}

function divide(num1, num2) {
    let divideValue = (num1 / num2);

    // error check for division by 0
    if (divideValue == "Infinity") {
        return "Error!";
    } else {
        let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
        rounded = rounded.toFixed(2);
     
        const calcDisplay = document.querySelector("#display");
        calcDisplay.textContent = rounded;
    }
}

// use operator variable to determine which function to call
function operate(operator, num1, num2) {
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
        default:
            alert("ERROR!  Didn't receive an operator, or type not as expected!");
    }
}



function runCalculator() {

    function getNumberClicked() {
        const operandButtons = document.querySelectorAll(".operand");
        operandButtons.forEach((button) => {
            button.addEventListener('click', () => {
                savedFirstValue = button.getAttribute("value");
                const calcDisplay = document.querySelector("#display");
                
                // append to num1 if multiple numbers are pressed and display out
                if (operator == "")  {
                    tempNum1.push(savedFirstValue);
                    num1 = tempNum1.join("");
                    calcDisplay.textContent = num1;
                } else {

                // append to num2 if multiple numbers are pressed and display out
                    tempNum2.push(savedFirstValue);
                    num2 = tempNum2.join("");
                    calcDisplay.textContent = num2;
                }
            })
        })
    }
            
    function getOperatorSelection() {        
        const operatorButtons = document.querySelectorAll(".operator");
        operatorButtons.forEach((button) => {
            button.addEventListener('click', () => {
                operator = button.getAttribute("value");
                console.log(operator);
                tempOperatorArray.push(operator);

                // enable the decimal button if disabled from previous click/use
                document.getElementById("decimal").disabled = false;

                // check to see if a multi-operand string exists and needs calculated on the fly
                if ((tempNum1 != "") && (tempNum2 != "")) {
                    const calcDisplay = document.querySelector("#display");
                    num1 = tempNum1.join("");
                    num2 = tempNum2.join("");
                    num1 = parseFloat(num1);
                    num2 = parseFloat(num2);
                    let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
                    operate(tempOperator, num1, num2);
                    let tempStringValue = calcDisplay.textContent;
                    tempNum1 = [];
                    tempNum2 = [];
                    num1 = 0;
                    num2 = 0;
                    tempNum1.push(tempStringValue);
                    num1 = tempNum1.join("");
                }
            })
        })
    }
    
    function runCalculation() {
        const equalsButton = document.querySelector(".equals");
            equalsButton.addEventListener('click', () => {
                console.log("time to run the math!", num1, num2, operator);
                const calcDisplay = document.querySelector("#display");
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                operate(operator, num1, num2);
            })
    }

    // DOM for "Clear" button
    const clearButton = document.querySelector(".clear");
        clearButton.addEventListener('click', () => { location.reload(); })

    // DOM for "+/-"" button
    const signButton = document.querySelector(".sign");    
        signButton.addEventListener('click', () => {
        
            // append "+/-" to numarray1 and display out
            if (operator == "") {
                const calcDisplay = document.querySelector("#display");
 
                tempNum1.splice(0, 1, (tempNum1[0] * -1).toString());
             
                num1 = tempNum1.join("");
                calcDisplay.textContent = num1;
            } else {

            // append "+/-" to numarray2 and display out
                const calcDisplay = document.querySelector("#display");
                
                tempNum2.splice(0, 1, (tempNum2[0] * -1).toString());
                
                num2 = tempNum2.join("");
                calcDisplay.textContent = num2;
            }
        })

    // DOM for "decimal" button
    const decimalButton = document.querySelector(".decimal");
        decimalButton.addEventListener('click', () => {
            console.log("decimal pressed");
            let decimalButton = ".";
            const calcDisplay = document.querySelector("#display");

            // append "decimal" to numarray1 and display out
            if (operator == "") {
                const calcDisplay = document.querySelector("#display");
                tempNum1.push(decimalButton);
                num1 = tempNum1.join("");
                calcDisplay.textContent = num1;
                document.getElementById("decimal").disabled = true;
            } else {
                
            // append "decimal" to numarray2 and display out
                const calcDisplay = document.querySelector("#display");
                tempNum2.push(decimalButton);
                num2 = tempNum2.join("");
                calcDisplay.textContent = num2;
                document.getElementById("decimal").disabled = true;
            }
        })

    // call/run the advanced sub-functions 
    getNumberClicked();
    getOperatorSelection();
    runCalculation(); 
}

// call/run the main function
runCalculator();