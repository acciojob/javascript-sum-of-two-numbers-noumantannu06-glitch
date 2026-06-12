// Get first number from user
const firstNumber = prompt("First number:");

// Get second number from user
const secondNumber = prompt("Second number:");

// Check if inputs are valid numbers
// Conditions:
// 1. firstNumber must not be empty and must be a valid number
// 2. secondNumber must not be empty and must be a valid number
if (
  firstNumber === "" || 
  secondNumber === "" ||
  isNaN(Number(firstNumber)) || 
  isNaN(Number(secondNumber))
) {
  console.log("Invalid input. Please enter a valid number.");
} else {
  // Convert strings to numbers and calculate sum
  const sum = Number(firstNumber) + Number(secondNumber);
  
  // Display the result
  console.log(`The sum of ${firstNumber} and ${secondNumber} is ${sum}.`);
}