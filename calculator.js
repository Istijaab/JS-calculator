const num1 = parseFloat(prompt("Enter your first number: "));
const num2 = parseFloat(prompt("Enter your second number: "));
const operator = prompt("Enter operator choice: +, -, *, /, %");

let result;

if (operator == '+') {
    result = num1 + num2;

}else if (operator == '-') {
    result = num1 - num2;

}else if (operator == '/') {
    result = num1 / num2;

}else if (operator == '*') {
    result = num1 * num2;

}else {
    result = num1 % num2;
    
}

alert(result);