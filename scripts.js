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
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonValue;
        }
    });
});