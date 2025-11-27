// Q2: Multi-Type Data Summary

let userName = "Pragati";        // string
let age = 20;                    // number
let isStudent = true;            // boolean
let skills = ["HTML", "CSS"];    // array
let profile = { city: "Delhi" }; // object
let emptyValue = null;           // null
let notAssigned;                 // undefined

console.table([
    { label: "userName", value: userName, type: typeof userName },
    { label: "age", value: age, type: typeof age },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "skills", value: skills, type: Array.isArray(skills) ? "array" : typeof skills },
    { label: "profile", value: profile, type: typeof profile },
    { label: "emptyValue", value: emptyValue, type: typeof emptyValue },
    { label: "notAssigned", value: notAssigned, type: typeof notAssigned }
]);
