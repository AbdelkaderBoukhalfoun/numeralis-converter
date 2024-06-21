// Function to convert Decimal number to Roman numeral
const convertToRoman = num => {
    if (num <= 0 || num >= 4000) {
        return "Please enter a number between 1 and 3999";
    }

    const romanNumerals = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].numeral;
            num -= romanNumerals[i].value;
        }
    }
    return result;
};

// Function to handle conversion and update output
const handleConversion = () => {
    const inputElement = document.getElementById('number');
    const outputElement = document.getElementById('output');
    const inputValue = inputElement.value.trim();

    if (!inputValue || isNaN(inputValue)) {
        outputElement.textContent = 'Please enter a valid number';
    } else {
        const intValue = parseInt(inputValue, 10);
        if (intValue < 1) {
            outputElement.textContent = 'Please enter a number greater than or equal to 1';
        } else if (intValue > 3999) {
            outputElement.textContent = 'Please enter a number less than or equal to 3999';
        } else {
            const romanNumeral = convertToRoman(intValue);
            outputElement.textContent = romanNumeral;
        }
    }
};

// Event listener for the convert button
document.getElementById('convert-btn').addEventListener('click', handleConversion);
