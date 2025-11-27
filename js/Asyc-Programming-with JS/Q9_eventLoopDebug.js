/*
Q9 – Debugging the Event Loop
Predict and then run the snippet that demonstrates microtask vs macrotask order.
*/

// Predicted order (write in comments):
// 1. Script start
// 2. Script end
// 3. Promise callback (microtask)
// 4. Timeout callback (macrotask)

console.log('Script start');
setTimeout(() => console.log('Timeout callback'), 0);
Promise.resolve().then(() => console.log('Promise callback'));
console.log('Script end');

/*
Explanation:
- The synchronous code runs first (Script start -> Script end).
- After the current call stack completes, microtasks (Promise callbacks) are processed.
- Only afterward macrotasks like setTimeout are executed, even with 0ms delay.
*/
