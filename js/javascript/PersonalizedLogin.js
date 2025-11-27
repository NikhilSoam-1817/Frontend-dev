// Q1: Personalized Login Greeting

// Declare variables
let userName = "Pragati";
let currentHour = new Date().getHours(); // returns 0–23

// Logic for greeting
let greeting = "";

if (currentHour < 12) {
    greeting = `Good Morning ${userName}!`;
} else if (currentHour >= 12 && currentHour < 17) {
    greeting = `Good Afternoon ${userName}!`;
} else {
    greeting = `Good Evening ${userName}!`;
}

console.log(greeting);
