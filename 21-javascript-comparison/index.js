"use strict";
alert("Enter two numbers to see if the first is greater than the second");
let firstNum = prompt("Please enter the first number:", 0);
let secondNum = prompt("Please enter the second number ", 0);
let result;
if (firstNum > secondNum) {
  result = confirm("The first number is greater than the second number.");
} else if (firstNum < secondNum) {
  result = confirm("The first number is less than the second number.");
} else {
  result = confirm("The first number is equal to the second number.");
}
// alert(result);
