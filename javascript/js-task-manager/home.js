// ==========================================
// JAVASCRIPT CONSOLE TASK MANAGER
// ==========================================

// Global array to store all tasks
let tasks = [];
let taskCounter = 1; // Used to reliably generate unique IDs based on task count

// ------------------------------------------
// Function 1: addTask(title, priority)
// ------------------------------------------
// Think: What information should every task have?
// Think: Why should completed start as false?
// Think: Which method adds an item into an array?
function addTask(title, priority) {
    let newTask = {
        id: taskCounter++, // based on task count
        title: title,
        completed: false, // Default is always false for new tasks
        priority: priority
    };
    tasks.push(newTask);
    console.log(`Success: Task "${title}" added successfully.`);
}


// ------------------------------------------
// Function 2: viewTasks()
// ------------------------------------------
// Think: What should happen if there are no tasks?
// Think: Which loop can visit every task?
// Think: How can we print one task at a time?
function viewTasks() {
    if (tasks.length === 0) {
        console.log("No tasks available");
    } else {
        console.log("\n--- All Tasks ---");
        for (let i = 0; i < tasks.length; i++) {
            let t = tasks[i];
            console.log(`ID: ${t.id} | Title: ${t.title} | Completed: ${t.completed} | Priority: ${t.priority}`);
        }
    }
}


// ------------------------------------------
// Function 3: completeTask(id)
// ------------------------------------------
// Think: How do we find one task from many tasks?
// Think: Which property is used to identify the task?
// Think: What message should we show if the id is wrong?
function completeTask(id) {
    let isFound = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].completed = true;
            console.log(`Success: Task ${id} marked as completed.`);
            isFound = true;
            break; // Stop loop once found
        }
    }
    if (!isFound) {
        console.log("Task not found");
    }
}


// ------------------------------------------
// Function 4: deleteTask(id)
// ------------------------------------------
// Think: Are we deleting directly or creating a new array?
// Think: Which array method is useful for removing data?
// Think: How can length help us know if deletion happened?
function deleteTask(id) {
    let oldLength = tasks.length;
    // Keep all tasks EXCEPT the one matching the given id
    tasks = tasks.filter(task => task.id !== id);
    
    if (tasks.length < oldLength) {
        console.log(`Task deleted successfully`);
    } else {
        console.log("Task not found");
    }
}


// ------------------------------------------
// Function 5: viewPendingTasks()
// ------------------------------------------
// Think: What does pending mean?
// Think: Which value means the task is not completed?
// Think: Which array method helps us select only some tasks?
function viewPendingTasks() {
    let pendingTasks = tasks.filter(task => task.completed === false);
    
    if (pendingTasks.length === 0) {
        console.log("No pending tasks");
    } else {
        console.log("\n--- Pending Tasks ---");
        console.log(pendingTasks);
    }
}


// ------------------------------------------
// Function 6: viewCompletedTasks()
// ------------------------------------------
// Think: What does completed mean?
// Think: Which value confirms that work is finished?
// Think: Can filter create a new list?
function viewCompletedTasks() {
    let completedTasks = tasks.filter(task => task.completed === true);
    
    if (completedTasks.length === 0) {
        console.log("No completed tasks");
    } else {
        console.log("\n--- Completed Tasks ---");
        console.log(completedTasks);
    }
}


// ------------------------------------------
// Function 7: searchTask(keyword)
// ------------------------------------------
// Think: Why should we convert text to lowercase?
// Think: Which method checks whether text contains another text?
// Think: What should happen if the search result is empty?
function searchTask(keyword) {
    let lowerKeyword = keyword.toLowerCase();
    let matchingTasks = tasks.filter(task => task.title.toLowerCase().includes(lowerKeyword));
    
    if (matchingTasks.length === 0) {
        console.log("No matching task found");
    } else {
        console.log(`\n--- Search Results for "${keyword}" ---`);
        console.log(matchingTasks);
    }
}


// ------------------------------------------
// Function 8: updateTask(id, newTitle)
// ------------------------------------------
// Think: Which property should be changed?
// Think: Should we change id or title?
// Think: What if the given id does not exist?
function updateTask(id, newTitle) {
    let isFound = false;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            tasks[i].title = newTitle;
            console.log("Task updated successfully");
            isFound = true;
            break;
        }
    }
    if (!isFound) {
        console.log("Task not found");
    }
}


// ------------------------------------------
// Function 9: countTasks()
// ------------------------------------------
// Think: Which property gives array size?
// Think: Can filter help count specific tasks?
// Think: Why do we need separate counts?
function countTasks() {
    let totalTasks = tasks.length;
    let completedCount = tasks.filter(task => task.completed === true).length;
    let pendingCount = tasks.filter(task => task.completed === false).length;
    
    console.log("\n--- Task Counts ---");
    console.log(`Total Tasks: ${totalTasks}`);
    console.log(`Completed Tasks: ${completedCount}`);
    console.log(`Pending Tasks: ${pendingCount}`);
}


// ------------------------------------------
// Function 10: sortByPriority()
// ------------------------------------------
// Think: Why does high priority come first?
// Think: How can words be converted into order numbers?
// Think: Which array method arranges items?
function sortByPriority() {
    let priorityOrder = {
        "high": 1,
        "medium": 2,
        "low": 3
    };
    
    tasks.sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
    
    console.log("\n--- Tasks Sorted By Priority ---");
    console.log(tasks);
}


// ==========================================
// FINAL TESTING INSTRUCTIONS
// ==========================================
console.log("\n--- STARTING TESTS ---");

// 1. Add 5 tasks
addTask("Learn JavaScript Arrays", "high");
addTask("Buy groceries", "medium");
addTask("Clean the room", "low");
addTask("Finish coding assignment", "high");
addTask("Call mom", "medium");

// 2. View all tasks
viewTasks();

// 3. Complete 2 tasks
completeTask(1); // Learn JavaScript Arrays
completeTask(3); // Clean the room

// 4. View completed tasks
viewCompletedTasks();

// 5. View pending tasks
viewPendingTasks();

// 6. Search one task
searchTask("coding");

// 7. Update one task
updateTask(2, "Buy groceries for the week");

// 8. Delete one task
deleteTask(5); // Deleting "Call mom"

// 9. Count all tasks
countTasks();

// 10. Sort tasks by priority
sortByPriority();

















//Final Reflection Answers
//1. Which function was easiest?
//Answer: viewTasks() or addTask(). They require minimal logic—just pushing an object to an array or running a simple for loop to print data.

//2. Which function was hardest?
//Answer: sortByPriority(). It requires understanding how to map text strings ("high", "medium", "low") into numeric values using an object, and then passing a custom comparator function (a, b) => ... into the array .sort() method.

//3. Why did we use objects?
//Answer: Objects allow us to group related pieces of data together under one entity. A "task" isn't just a string; it has a title, a unique ID, a completion status, and a priority. Objects let us store all these key-value pairs together.

//4. Why did we use arrays?
//Answer: Arrays allow us to store a list of multiple objects. Without an array, we would have to create a separate variable for every single task, making it impossible to loop through them, filter them, or sort them dynamically.

//5. What is the role of functions in this project?
//Answer: Functions keep our code modular, reusable, and organized. Instead of writing the same for loops or filter methods repeatedly, we wrap that logic inside a named function so we can execute it with a single command whenever we need it.

//6. What mistake did you debug?
//Answer: (Sample answer) Realizing that if we delete a task, checking tasks.length for ID generation causes duplicate IDs in the future. We solved this by using a separate taskCounter variable, or by filtering array lengths strictly for deletion checks.

//7. What new JavaScript concept did you understand better?
//Answer: (Sample answer) Higher-order array methods like .filter() and .sort(). Using .filter() makes it incredibly easy to find completed tasks or delete a task without having to write a long, manual for loop with if statements inside it.