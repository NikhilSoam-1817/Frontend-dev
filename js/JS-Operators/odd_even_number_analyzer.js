let numbers = [];
let result = [];

// Insert numbers 1–30
for (let i = 1; i <= 30; i++) {
    numbers.push(i);

    if (i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz");
    } else if (i % 2 === 0) {
        result.push("Even");
    } else {
        result.push("Odd");
    }
}

console.log(result);
