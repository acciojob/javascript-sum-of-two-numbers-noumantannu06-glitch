// script.js
let num1 = prompt("First number:");
let num2 = prompt("Second number:");

if (
  num1 === null || 
  num2 === null || 
  num1.trim() === "" || 
  num2.trim() === "" || 
  isNaN(num1) || 
  isNaN(num2)
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  let sum = parseFloat(num1) + parseFloat(num2);
  alert(`The sum of ${num1} and ${num2} is ${sum}.`);
}