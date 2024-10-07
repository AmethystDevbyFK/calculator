const display = document.querySelector('.current-operand');
const previousOperand = document.querySelector('.previous-operand');
const buttons = document.querySelectorAll('button');

let currentOperand = '';
let previousOperandText = '';
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('number')) {
            handleNumber(button.dataset.number);
        } else if (button.classList.contains('operator')) {
            handleOperator(button.dataset.operation);
        } else if (button.classList.contains('clear')) {
            clearDisplay();
        } else if (button.classList.contains('equals')) {
            calculate();
        }
    });
});

function handleNumber(number) {
    currentOperand += number;
    updateDisplay();
}

function handleOperator(op) {
    if (operator !== null) {
        calculate();
    }
    previousOperandText = currentOperand;
    operator = op;
    currentOperand = '';
    updateDisplay();
}

function calculate() {
    let result;
    const prev = parseFloat(previousOperandText);
    const curr = parseFloat(currentOperand);

    if (operator === '+') {
        result = prev + curr;
    } else if (operator === '-') {
        result = prev - curr;
    } else if (operator === '*') {
        result = prev * curr;
    } else if (operator === '/') {
        result = prev / curr;
    } 

    currentOperand = result.toString();
    operator = `Enter a number!`;
    previousOperandText = '';
    updateDisplay();
}

function clearDisplay() {
    currentOperand = '';
    previousOperandText = '';
    operator = null;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = currentOperand;
    previousOperand.textContent = `${previousOperandText} ${operator}`;
}