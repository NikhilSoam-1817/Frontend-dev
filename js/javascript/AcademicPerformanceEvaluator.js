// Q4: Academic Performance Evaluator

let marks = [85, 78, 92, 88, 80]; // 5 subjects

// Check if any subject < 35
if (marks.some(m => m < 35)) {
    console.log("Detained (failed in one or more subjects)");
} else {
    let total = marks.reduce((sum, m) => sum + m, 0);
    let percentage = total / marks.length;

    if (percentage >= 85) {
        console.log("Promoted with Distinction");
    } else if (percentage >= 50) {
        console.log("Promoted");
    } else {
        console.log("Detained");
    }
}
