let operator;
let firstNumber;
let secondNumber;

function add(a,b) {return a + b};
function subtract(a,b) {return a - b};
function multiply(a,b) {return a * b};
function divide(a,b) {return a / b};

function operate(operator, firstNumber, secondNumber) {
    let evaluation;
    
    switch (operator) {
        case '+':
            evaluation = add(firstNumber, secondNumber);
            break;
        case '-':
            evaluation = subtract(firstNumber, secondNumber);
            break;
        case '*':
            evaluation = multiply(firstNumber, secondNumber);
            break;
        case '/':
            evaluation = divide(firstNumber, secondNumber);
            break;
    }

    return evaluation;
}