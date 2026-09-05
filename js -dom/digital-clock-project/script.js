// Element Selection
const timeElement = document.getElementById("time");
const dateElement = document.getElementById("date");
const toggleBtn = document.getElementById("toggle-btn");

// State Variable (Defaults to 12-hour format)
let is24Hour = false;

// Function to calculate and update time & date
function updateTime() {
    const now = new Date();

    // Date Extraction & Formatting
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = now.getFullYear();
    
    dateElement.textContent = `${day}/${month}/${year}`;

    // Time Extraction
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    let formattedTime = "";

    if (is24Hour) {
        // 24-Hour Format
        const paddedHours = String(hours).padStart(2, "0");
        formattedTime = `${paddedHours}:${minutes}:${seconds}`;
    } else {
        // 12-Hour Format
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12; // Handle midnight (0 hours -> 12)
        const paddedHours = String(hours).padStart(2, "0");
        formattedTime = `${paddedHours}:${minutes}:${seconds} ${ampm}`;
    }

    // Render Time to DOM
    timeElement.textContent = formattedTime;
}

// Toggle Button Click Listener
toggleBtn.addEventListener("click", () => {
    is24Hour = !is24Hour;
    
    if (is24Hour) {
        toggleBtn.textContent = "Switch to 12-hour format";
    } else {
        toggleBtn.textContent = "Switch to 24-hour format";
    }

    // Refresh display immediately
    updateTime();
});

// Initial Call to prevent 1-second display lag
updateTime();

// Update Clock Every Second (1000 ms)
setInterval(updateTime, 1000);