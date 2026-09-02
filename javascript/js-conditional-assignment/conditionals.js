// Task 1: Maximum of Three
// Goal: Use `if`, `else if`, and logical `&&` to compare three distinct numbers.
function findMax(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

// Task 2: Leap Year Checker
// Goal: Use the modulo operator (`%`) and logical operators to check standard leap year rules.
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Task 3: Even or Odd
// Goal: Use an `if/else` statement and the modulo operator to determine parity.
function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// Task 4: Character Type Identifier
// Goal: Compare string values using `>=` and `<=` or regular expressions to classify characters.
function checkCharType(char) {
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
        return "alphabet";
    } else if (char >= '0' && char <= '9') {
        return "digit";
    } else {
        return "special";
    }
}

// Task 5: Valid Triangle
// Goal: Ensure the sum of three angles equals exactly 180, and that all individual angles are greater than 0.
function isValidTriangle(angle1, angle2, angle3) {
    if (angle1 > 0 && angle2 > 0 && angle3 > 0 && (angle1 + angle2 + angle3 === 180)) {
        return true;
    } else {
        return false;
    }
}