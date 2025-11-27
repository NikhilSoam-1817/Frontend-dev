let product = " wireless headphones PRO ";

// Step 1: Trim and lowercase
let cleaned = product.trim().toLowerCase();

// Step 2: Capitalize each word
let formatted = cleaned
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Step 3: Replace "Pro" → "Pro Edition"
let finalTitle = formatted.replace("Pro", "Pro Edition");

// Output
console.log("Cleaned Title:", finalTitle);
console.log("Length:", finalTitle.length);
