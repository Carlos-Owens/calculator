function add(num1, num2) {
    return num1 + num2
}

function divide(num1, num2) {
    return num1 / num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function operator (operator, num1, num2 ) {
    let results = 0;
    switch (operator) {
        case "+":
           results = add(num1, num2);
            break;
        case "-":
           results =  subtract(num1, num2);
            break;
        case "*":
           results =  multiply(num1, num2);
            break;
        case "/":
           results =  divide(num1, num2);
            break;
    }
    return results;
}