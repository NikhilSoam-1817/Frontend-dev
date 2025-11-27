// Q9: Random Math Quiz Generator

let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let op = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;

switch (op) {
    case '+':
        correctAnswer = num1 + num2;
        break;
    case '-':
        correctAnswer = num1 - num2;
        break;
    case '*':
        correctAnswer = num1 * num2;
        break;
    case '/':
        correctAnswer = (num1 / num2).toFixed(2);
        break;
}

console.log(`Question: ${num1} ${op} ${num2}`);
console.log(`Correct Answer: ${correctAnswer}`);
