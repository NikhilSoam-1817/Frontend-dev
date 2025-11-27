// Q3: Monthly Expense Tracker

let expenses = [5000, 1200, 8000, 1500, 2000]; // food, travel, rent, bills, leisure

let total = expenses.reduce((sum, value) => sum + value, 0);
let average = total / expenses.length;

// Add 10% tax
let finalAmount = total;
finalAmount += finalAmount * 0.10;

console.log("Total:", total.toFixed(2));
console.log("Average:", average.toFixed(2));
console.log("Final Amount After Tax:", finalAmount.toFixed(2));
