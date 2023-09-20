let operator;
let firstNumber;
let secondNumber;
let displayValue = "";

buttons = document.querySelectorAll('button');
display = document.querySelector('#display');

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
        case 'x':
            evaluation = multiply(firstNumber, secondNumber);
            break;
        case '/':
            evaluation = divide(firstNumber, secondNumber);
            break;
    }

    return evaluation;
};

function updateDisplayValue(e) {
    btnValue = e.target.getAttribute('data-value');
    if (['1','2','3','4','5','6','7','8','9','0'].includes(btnValue)) {
        displayValue += btnValue;
        display.textContent = displayValue;
    }
    else if (['+','-','x','/'].includes(btnValue)) {
        firstNumber = displayValue * 1;
        operator = btnValue;
        displayValue = '';
    }
    else if (btnValue === '=') {
        secondNumber = displayValue * 1;
        displayValue = operate(operator, firstNumber, secondNumber);
        display.textContent = displayValue;
    }
    else if (btnValue === 'c') {
        firstNumber = null;
        secondNumber = null;
        operator = null;
        displayValue = "";
        display.textContent = displayValue;
    };
};

buttons.forEach(btn => btn.addEventListener('click', updateDisplayValue));