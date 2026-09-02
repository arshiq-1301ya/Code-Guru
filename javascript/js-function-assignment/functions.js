// =========================================================================
// JS-Unit-5 / functions.js
// =========================================================================

// Question 1: Rectangle Area
// Takes length and breadth as parameters and returns the area of a rectangle.
export function calculateArea(length, breadth) {
    return length * breadth;
}

// Question 2: Business Profit Check
// Takes revenue and expenses as parameters and returns true if profitable, or false if not.
export function isProfitable(revenue, expenses) {
    return revenue > expenses;
}

// Question 3: Character Checker
// Takes one character and returns whether it is "Capital letter", "Small letter", or "Not a letter".
export function checkCharacter(char) {
    if (char >= 'A' && char <= 'Z') {
        return "Capital letter";
    } else if (char >= 'a' && char <= 'z') {
        return "Small letter";
    } else {
        return "Not a letter";
    }
}

// Question 4: Number or String
// Takes one value and returns "number" if it's a number, or "string" if it's a string.
export function checkType(value) {
    return typeof value;
}

// Question 5: Prime Number
// Accepts a positive number and returns true if it is a prime number, or false otherwise.
export function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Question 6: Type Finder
// Takes any value and returns the exact JavaScript type of that value using the typeof operator.
export function getType(value) {
    return typeof value;
}

// Question 7: Triangle Area
// Calculates and returns the area of a triangle given its base and height.
export function triangleArea(base, height) {
    return 0.5 * base * height;
}

// Question 8: Greater Number
// Takes two numbers and returns the greater number.
export function findGreater(a, b) {
    return a > b ? a : b;
}

// Question 9: Function Name
// Returns its own function name as a string.
export function printFunctionName() {
    return "printFunctionName";
}

// Question 10: Arrow Function (greetUser)
// Takes a name as a parameter, uses a default name "Guest" if none is passed, and returns "Hello, <name>!".
export const greetUser = (name = "Guest") => {
    return `Hello, ${name}!`;
};

// Question 11: Convert to Arrow Function (isEven)
// Converted version of the given normal function syntax into an arrow function.
export const isEven = (num) => {
    return num % 2 === 0;
};

// Question 12: Callback Function (performOperation)
// Accepts two numbers and a callback function, calls operation(a, b) inside it, and returns the result.
export function performOperation(a, b, operation) {
    return operation(a, b);
}

// Question 12: Callback helpers (add, subtract, multiply)
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}