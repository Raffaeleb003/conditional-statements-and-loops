const num1 = parseInt(prompt("Enter the first number: "));
const num2 = parseInt(prompt("Enter the second number: "));

if (num1 > num2) {
  alert(num1 + " is larger.");
} else if (num2 > num1) {
  alert(num2 + " is larger.");
} else {
  alert("The numbers are equal.");
}




let num = parseInt(prompt("Enter an integer: "));

while (isNaN(num)) {
  num = parseInt(prompt("Invalid input! Please enter an integer: "));
}

if (num % 2 === 0) {
  alert(num + " is even.");
} else {
  alert(num + " is odd.");
}