function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const display = document.querySelector('.display input');
const keypadButtons = document.querySelectorAll('.keypad button');

keypadButtons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === 'C') {
            display.value = '';
        } else if (buttonValue === '=') {
            try {
                const expression = display.value.replace(/(\d+\.?\d*)([\+\-\*/])(\d+\.?\d*)/g, (match, p1, p2, p3) => {
                    const num1 = parseFloat(p1);
                    const num2 = parseFloat(p3);
                    switch (p2) {
                        case '+':
                            return add(num1, num2);
                        case '-':
                            return subtract(num1, num2);
                        case '*':
                            return multiply(num1, num2);
                        case '/':
                            return divide(num1, num2);
                    }
                });
                display.value = expression;
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonValue;
        }
    });
});