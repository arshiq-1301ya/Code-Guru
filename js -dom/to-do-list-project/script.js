// ==========================================
// STEP 1: DOM Elements Selection
// ==========================================
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const markAllBtn = document.getElementById("markAllBtn");

// ==========================================
// STEP 2 & 11: Application State & LocalStorage
// ==========================================
let tasks = [];
let currentFilter = "all";

// Load tasks from localStorage when the app starts
function loadTasks() {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
        tasks = JSON.parse(storedTasks);
    }
}

// Save current tasks array to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// ==========================================
// STEP 3 & 8: Add Task Logic & Enter Key Support
// ==========================================
function addTask() {
    const text = taskInput.value.trim();
    
    // Validate input is not empty
    if (text === "") return;

    const newTask = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value = ""; // Clear input field

    updateApp();
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});

// ==========================================
// STEP 4, 5 & 10: Render Function & Filtering
// ==========================================
function renderTasks() {
    taskList.innerHTML = ""; // Clear existing list container

    // Determine which tasks to display based on currentFilter
    let filteredTasks = tasks.filter(task => {
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true; // 'all' filter
    });

    // Dynamically build <li> elements for each task
    filteredTasks.forEach(task => {
        const li = document.createElement("li");
        if (task.completed) {
            li.classList.add("completed");
        }

        // Left side: Checkbox/Text toggle wrapper
        const span = document.createElement("span");
        span.textContent = task.text;
        span.style.cursor = "pointer";
        
        // STEP 6: Toggle Completion on click
        span.addEventListener("click", () => {
            toggleTaskCompletion(task.id);
        });

        // Delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        
        // STEP 7: Deletion logic
        deleteBtn.addEventListener("click", () => {
            deleteTask(task.id);
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);
        taskList.appendChild(li);
    });
}

// ==========================================
// STEP 6 & 7: Toggle Completion & Deletion Actions
// ==========================================
function toggleTaskCompletion(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });

    updateApp();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateApp();
}

// ==========================================
// STEP 9: Active Task Counter
// ==========================================
function updateTaskCount() {
    const activeTasks = tasks.filter(task => !task.completed);
    taskCount.textContent = `${activeTasks.length} task${activeTasks.length === 1 ? '' : 's'} left`;
}

// ==========================================
// Extra Controls: Clear Completed & Mark All
// ==========================================
clearCompletedBtn.addEventListener("click", () => {
    tasks = tasks.filter(task => !task.completed);
    updateApp();
});

markAllBtn.addEventListener("click", () => {
    const allCompleted = tasks.every(task => task.completed);
    tasks = tasks.map(task => ({ ...task, completed: !allCompleted }));
    updateApp();
});

// ==========================================
// Filter Buttons Event Listeners
// ==========================================
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove("active"));
        // Add active class to clicked button
        e.target.classList.add("active");

        currentFilter = e.target.getAttribute("data-filter");
        renderTasks();
    });
});

// ==========================================
// Centralized State Updater Function
// ==========================================
function updateApp() {
    saveTasks();
    renderTasks();
    updateTaskCount();
}

// Initialize application on page load
loadTasks();
updateApp();