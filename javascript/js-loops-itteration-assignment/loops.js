function fizzBuzz(limit) {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}

function calculateGCD(num1, num2) {
    let gcd = 1;
    let min = num1 < num2 ? num1 : num2;
    for (let i = 1; i <= min; i++) {
        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function sumOfMultiples(limit) {
    let sum = 0;
    for (let i = 1; i < limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
}

function pattern1() {
    let result = "";
    for (let i = 5; i >= 1; i--) {
        let row = [];
        for (let j = 1; j <= i; j++) {
            row.push("*");
        }
        result += row.join(" ") + "\n";
    }
    return result;
}

function pattern2() {
    let result = "";
    let current = 1;
    for (let i = 1; i <= 5; i++) {
        let row = [];
        for (let j = 1; j <= i; j++) {
            row.push(current);
            current++;
        }
        result += row.join(" ") + "\n";
    }
    return result;
}

function pattern3() {
    let result = "";
    let count = 1;
    for (let i = 5; i >= 1; i--) {
        let row = [];
        for (let j = 1; j <= i; j++) {
            row.push(count);
            count++;
        }
        result += row.join(" ") + "\n";
    }
    return result;
}

function pattern5() {
    let result = "";
    let totalRows = 5;
    for (let i = 1; i <= totalRows; i++) {
        let onesCount = totalRows - i;
        let starsCount = 2 * i - 1;
        
        let onesStr = "1".repeat(onesCount);
        let starsStr = "*".repeat(starsCount);
        
        result += onesStr + starsStr + onesStr + "\n";
    }
    return result;
}

function pattern6() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        let spaces = " ".repeat(5 - i);
        let stars = "*".repeat(2 * i - 1);
        result += spaces + stars + "\n";
    }
    return result;
}

function advancedLoop(limit) {
    let result = [];
    for (let i = 1; i <= limit; i++) {
        let word = "";
        if (i % 2 === 0) word += "Foo";
        if (i % 3 === 0) word += "Fizz";
        if (i % 5 === 0) word += "Buzz";
        if (i % 7 === 0) word += "Bar";
        
        if (word === "") {
            result.push(i);
        } else {
            result.push(word);
        }
    }
    return result;
}

function task1() {
    return "Hello World\n".repeat(10);
}

function task2() {
    return [10, 20, 30, 40, 50];
}

function task3() {
    return "ReferenceError";
}

function task4() {
    // A var variable inside a standard loop iterating up to 5 finishes at value 5
    return 5;
}

function task5() {
    let result = "";
    for (let i = 1; i <= 10; i++) {
        result += `5 * ${i} = ${5 * i}\n`;
    }
    return result;
}

function task6() {
    return "*****\n";
}

function task7() {
    let result = "";
    for (let i = 1; i <= 4; i++) {
        result += "*".repeat(i) + "\n";
    }
    return result;
}

function task8() {
    let result = "";
    for (let i = 0; i < 4; i++) {
        result += "****\n";
    }
    return result;
}

function task9() {
    let result = "";
    let str = "";
    for (let i = 1; i <= 8; i++) {
        str += i;
        result += str + "\n";
    }
    return result;
}

function task10() {
    let result = "";
    let str = "";
    for (let i = 9; i >= 1; i--) {
        str += i;
        result += str + "\n";
    }
    return result;
}

function task11() {
    let result = "";
    let base = "12345";
    for (let i = 5; i >= 1; i--) {
        result += base.substring(0, i) + "\n";
    }
    return result;
}

function task12() {
    let result = "";
    for (let i = 1; i <= 5; i++) {
        let ones = "1".repeat(5 - i);
        let eights = "8".repeat(i);
        result += ones + eights + "\n";
    }
    return result;
}

function task13() {
    let result = "";
    let leftSide = ["0", "9", "98", "987", "9876", "98765", "987654", "9876543", "98765432"];
    let addedDigits = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    
    for (let i = 0; i < leftSide.length; i++) {
        let expression = `${leftSide[i]} * 9 + ${addedDigits[i]}`;
        let sum = String(8).repeat(i + 1);
        
        // Formats spacing according to exact output rule
        result += `${expression.padEnd(13)} = ${sum}\n`;
    }
    return result;
}

function task14() {
    let result = "";
    let multiplier = "";
    for (let i = 1; i <= 9; i++) {
        multiplier += i;
        let answer = "";
        let currentNum = 9;
        for (let j = 0; j < i; j++) {
            answer += currentNum;
            currentNum--;
        }
        result += `${multiplier} x 8 + ${i} = ${answer}\n`;
    }
    return result;
}

function task15() {
    let result = "";
    for (let i = 1; i <= 6; i++) {
        let col1 = i;
        let col2 = 11 - (2 * i);
        let col3 = 2 * (i - 1);
        result += `${col1} ${col2} ${col3}\n`;
    }
    return result;
}

