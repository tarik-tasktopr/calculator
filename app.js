// Initialize variables
let displayValue = "0";
let currentOperation = null;
let firstOperand = null;
let secondOperand = null;

// Get DOM elements
const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".button");

// Update display function
function updateDisplay(value) {
  display.textContent = value;
}

// Handle button click function
function handleButtonClick(event) {
  const buttonValue = event.target.textContent;

  if (buttonValue === "C") {
    clearCalculator();
  } else if (isOperator(buttonValue)) {
    handleOperator(buttonValue);
  } else if (buttonValue === "=") {
    calculateResult();
  } else {
    handleNumber(buttonValue);
  }
}

// Clear calculator function
function clearCalculator() {
  displayValue = "0";
  currentOperation = null;
  firstOperand = null;
  secondOperand = null;
  updateDisplay(displayValue);
}

// Check if value is an operator
function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

// Handle operator function
function handleOperator(operator) {
  if (firstOperand === null) {
    firstOperand = parseFloat(displayValue);
  } else if (currentOperation) {
    secondOperand = parseFloat(displayValue);
    firstOperand = performOperation(currentOperation, firstOperand, secondOperand);
  }

  currentOperation = operator;
  displayValue = "0";
  updateDisplay(operator);
}

// Perform operation function
function performOperation(operator, a, b) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return a;
  }
}

// Calculate result function
function calculateResult() {
  if (currentOperation && firstOperand !== null) {
    secondOperand = parseFloat(displayValue);
    displayValue = performOperation(currentOperation, firstOperand, secondOperand).toString();
    updateDisplay(displayValue);
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
  }
}

// Handle number function
function handleNumber(number) {
  if (displayValue === "0" || displayValue === "+" || displayValue === "-" || displayValue === "*" || displayValue === "/") {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay(displayValue);
}

// Add event listeners to buttons
buttons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});