// 1 profile Builder
function profileBuilder(name, age, semester,  haslaptop, attendance) {
    let studentName = name;
    let studentAge = age;
    let currentSemester = semester;
    let ownsLaptop = haslaptop;
    let attendancePercentage = attendance;
    
    let sentence = `${studentName} is ${studentAge} is years old and currently in ${currentSemester} semester.  Laptop: ${ownsLaptop}. Attendance: ${attendancePercentage}.`;
    console.log(sentence);
    return sentence;
}