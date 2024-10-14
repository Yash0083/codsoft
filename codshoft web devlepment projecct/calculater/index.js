const inputField = document.getElementById('user-input');
let expression = '';

// Function to update the display
function updateDisplay(value) {
    if (value === '') {
        inputField.textContent = '0';
    } else {
        inputField.textContent = value;
    }
}

// Function to append a number or operator to the expression
function appendToExpression(value) {
    expression += value;
    updateDisplay(expression);
}

// Function to clear the display and reset the expression
function clearDisplay() {
    expression = '';
    updateDisplay('');
}

// Function to delete the last character in the expression
function deleteLastCharacter() {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
}

// Function to evaluate the expression
function calculate() {
    try {
        expression = eval(expression).toString(); // Evaluate the expression
        updateDisplay(expression);
    } catch (error) {
        updateDisplay('Error');
    }
}

// Event listener for all buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'AC') {
            clearDisplay();
        } else if (value === 'DEL') {
            deleteLastCharacter();
        } else if (value === '=') {
            calculate();
        } else {
            appendToExpression(value);
        }
    });
});
