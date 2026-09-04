// ==========================================
// SECTION 1: ARRAY BASICS
// ==========================================

/**
 * 1. Array Access and Length
 * Creates an array of 5 favorite fruits, modifies it, and returns specific details.
 */
export function arrayBasics() {
    // Creating array of 5 fruits (adjust names if desired, matching expected test structure format)
    let fruits = ["apple", "banana", "cherry", "orange", "grape"];

    // a) Access the second fruit using its index (Index 1)
    let secondFruit = fruits[1];

    // b) Access the last fruit using its index (Index 4 for a 5-element array)
    let lastFruit = fruits[fruits.length - 1];

    // c) Find the length of the array
    let length = fruits.length;

    // d) Modify the third element of the array (Index 2)
    fruits[2] = "NEW_FRUIT";

    // Return Format: [secondFruit, lastFruit, length, updatedArray]
    return [secondFruit, lastFruit, length, fruits];
}

/**
 * 2. Understanding Array References
 * Demonstrates the difference between reference assignment and shallow copying.
 */
export function arrayReferences() {
    let arr1 = [10, 20, 30, 40];

    // Part 1: Assign arr1 to another variable arr2 (Copies reference)
    let arr2 = arr1;
    arr2[1] = 99; // Modifying arr2 modifies arr1 because they point to the same array memory location

    // Part 2: Create a new array arr3 using slice() (Shallow copy)
    let arr3 = arr1.slice();
    arr3[arr3.length - 1] = 88; // Modifying arr3 does NOT affect arr1 or arr2

    // Return Format: [arr1, arr2, arr3]
    return [arr1, arr2, arr3];
}


// ==========================================
// SECTION 2: ARRAY METHODS
// ==========================================

/**
 * 1. Basic Array Methods
 * Performs push, pop, and indexOf operations.
 */
export function basicMethods() {
    let arr = [12, 15, 20, 25, 30];

    // Use push() to add a number to the array (adding 35 based on test case requirements)
    arr.push(35);

    // Use pop() to remove the last number from the array
    let poppedValue = arr.pop();

    // Use indexOf() to find the position of 20
    let indexOf20 = arr.indexOf(20);

    // Return Format: [updatedArray, poppedValue, indexOf20]
    return [arr, poppedValue, indexOf20];
}

/**
 * 2. Working with Array Methods
 * Extracts the middle three colors into a new array without modifying the original.
 */
export function extractMiddle() {
    let colors = ["red", "blue", "green", "yellow", "purple", "black"];

    // Extract the middle three colors: "blue", "green", "yellow" (Indices 1 to 3 inclusive)
    // slice(start, end) excludes the end index, so we slice from 1 to 4
    let extractedArray = colors.slice(1, 4);

    // Return Format: [extractedArray, originalArray]
    return [extractedArray, colors];
}

/**
 * 3. Insert and Remove Elements
 * Uses splice() to remove items and insert new ones at the same location.
 */
export function spliceItems() {
    let items = ["pen", "pencil", "eraser", "scale", "sharpener"];

    // Remove "eraser" and "scale" (Indices 2 and 3) and insert "marker" and "ruler" at that same position
    items.splice(2, 2, "marker", "ruler");

    // Return Format: updatedItemsArray
    return items;
}


// ==========================================
// SECTION 3: ADVANCED ARRAY OPERATIONS
// ==========================================

/**
 * 1. Replace Values in an Array
 * Replaces values using fill() partially and fully.
 */
export function replaceScores() {
    let scores = [12, 25, 37, 48, 59, 63, 77];

    // Part 1: Replace only the last three values with 0 (Indices 4, 5, 6)
    // We make a shallow copy to save this intermediate state for the return format
    scores.fill(0, 4, 7);
    let part1Array = scores.slice(); 

    // Part 2: Overwrite the entire array with "N/A"
    scores.fill("N/A");
    let part2Array = scores;

    // Return Format: [part1Array, part2Array]
    return [part1Array, part2Array];
}

/**
 * 2. Filtering Data from Arrays (Greater than or equal to 50)
 * Standard filter check.
 */
export function filterGreaterThan50() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];
    
    // Filter out items less than 50
    return numbers.filter(num => num >= 50);
}

/**
 * 3. Filtering Data from Arrays (Even numbers using a callback)
 * Uses a separate helper condition/callback function to find even values.
 */
export function filterEven() {
    let numbers = [11, 22, 35, 42, 59, 60, 73, 88];

    // Callback function to check if a number is even
    const isEven = (num) => num % 2 === 0;

    return numbers.filter(isEven);
}

/**
 * 4. Looping Through Nested Arrays (Flattening)
 * Flattens a 3D array element down to a 1D array structure.
 */
export function flattenCube() {
    let cube = [[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]];

    // Using flat() with infinity depth to completely flatten the nested structures perfectly
    return cube.flat(Infinity);
}