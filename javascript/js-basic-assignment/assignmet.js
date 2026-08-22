// 1) Profile Builder
function profileBuilder(name, age, semester, hasLaptop, attendance) {
    let studentName = name;
    let studentAge = age;
    let currentSemester = semester;
    let ownsLaptop = hasLaptop;
    let attendancePercentage = attendance;

    let sentence = `${studentName} is ${studentAge} years old and currently in semester ${currentSemester}. Laptop: ${ownsLaptop}. Attendance: ${attendancePercentage}.`;
    console.log(sentence);
    return sentence;
}

// 2) Fix the Errors
function fixErrors() {
    let city = 'Delhi'; 
    let graduationYear = "2027"; 
    let isHosteller = true; 
    let cgpa = 8.5; 
    let student = { course: "BSc", collegeName: "Govt College" }; 

    return [city, graduationYear, isHosteller, cgpa, student];
}

// 3) Swap the Values
function swapValues(firstName, lastName) {
    let temp = firstName;
    firstName = lastName;
    lastName = temp;
    return [firstName, lastName];
}

// 4) Valid or Invalid?
function checkValidVariables() {
    let is123nameValid = false;
    let is$amountValid = true;
    let isVarValid = false;
    let isIsEligibleValid = false;
    let isHomeTownValid = true;
    return [is123nameValid, is$amountValid, isVarValid, isIsEligibleValid, isHomeTownValid];
}

// Section 2: Type Conversion
function predictOutput1() {
    return ["2053", "462", 18, "76"];
}

function predictOutput2() {
    return ["52true", 8, "5true", 15];
}

// ==========================================
// ADD THESE LINES AT THE BOTTOM TO MAKE IT RUN IN THE BROWSER:
// ==========================================
console.log("--- Executing Functions ---");
profileBuilder("Arshiq", 18, 6, true, 76);
console.log(fixErrors());
console.log(swapValues("Arjun", "Reddy"));
console.log(checkValidVariables());
console.log(predictOutput1());
console.log(predictOutput2());