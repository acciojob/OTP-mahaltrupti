//your JS code here. If required.
 const codes = document.querySelectorAll('.code');

codes.forEach((code, index) => {
    // Event listener for typing a number
    code.addEventListener('input', (e) => {
        // If a value is entered and it's not the last input field
        if (e.target.value && index < codes.length - 1) {
            // Focus on the next input field
            codes[index + 1].focus();
        }
    });

    // Event listener for backspace
    code.addEventListener('keydown', (e) => {
        // Check if the pressed key is 'Backspace'
        if (e.key === 'Backspace') {
            // Check if it's the first input field
            if (index > 0) {
                // Check if the current input is empty
                if (codes[index].value === '') {
                    // If empty, move focus to the previous input field
                    codes[index - 1].focus();
                } else {
                    // If not empty, delete the value and move focus back
                    codes[index].value = '';
                    codes[index - 1].focus();
                }
            }
        }
    });
});