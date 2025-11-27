/*
Q2 – Task Scheduler: Micro vs Macro Challenge
Demonstrates order of execution: microtasks (Promises) before macrotasks (setTimeout)
*/

console.log('Start');

setTimeout(() => {
  console.log('Macrotask: setTimeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Microtask: Promise.then callback');
});

// Synchronous log
console.log('Synchronous log');

console.log('End');

/*
Expected order (explained in comments):
1. 'Start' (synchronous)
2. 'Synchronous log' (synchronous)
3. 'End' (synchronous)
4. 'Microtask: Promise.then callback' (microtasks run after current call stack but before macrotasks)
5. 'Macrotask: setTimeout callback' (macrotask runs later)
*/
