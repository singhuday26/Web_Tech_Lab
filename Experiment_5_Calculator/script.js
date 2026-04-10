// Function to append characters to the display
function appendCharacter(char) {
    const display = document.getElementById('display');
    display.value += char;
}

// Function to clear the entire display (C)
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to clear the last entry (CE - modeled as simple backspace for simplicity or usually clears recent operand)
// Here, we'll implement it as clearing the whole display or just the last character?
// Standard CE clears the current entry. For simplicity in this lab, let's treat it as Backspace or Clear.
// Let's implement as Backspace for utility.
function clearEntry() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Use eval carefully. In a real app, write a parser. For lab, eval is acceptable but frowned upon.
        // Let's safe-guard it slightly or just use it as it's a lab experiment.
        // Replacing 'x' with '*' for evaluation if user sees 'x'
        // But our buttons pass '*' directly so it's fine.
        // If we passed 'x', we would replace it.
        
        if (display.value.trim() === "") return;
        
        let result = eval(display.value);
        
        // Handle division by zero or other errors if needed, but JS handles Infinity.
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}
