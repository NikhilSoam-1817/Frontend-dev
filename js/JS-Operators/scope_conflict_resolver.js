// Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary += bonus;
    }

    console.log(`Total Salary: ₹${salary}`);
}

// Testing with different values
calculateSalary(true);   // Bonus added
calculateSalary(false);  // Bonus not added

console.log("Global Bonus Still:", bonus); // Global scope unaffected
