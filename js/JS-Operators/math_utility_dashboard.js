let x = 16.75;

let rounded = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`
----- Math Utility Dashboard -----
Original Number : ${x}
Rounded Value   : ${rounded}
Square Root     : ${squareRoot}
x³ Value        : ${powerValue}
Random (10-50)  : ${randomNum}
----------------------------------
`);
