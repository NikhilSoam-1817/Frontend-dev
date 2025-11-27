let feedback =
    "Great product! Fast delivery and amazing sound quality!";

// Count words
let wordCount = feedback.split(" ").length;

// Check negativity
let hasNegative = feedback.toLowerCase().includes("bad") ||
                  feedback.toLowerCase().includes("poor");

if (!hasNegative) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}

console.log("Word Count:", wordCount);
