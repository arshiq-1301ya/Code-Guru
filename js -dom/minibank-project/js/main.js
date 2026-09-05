// --- Global State Variables ---
let allUsers = []; 
let allTransactions = [];
let currentUser = null; 
let currentExchangeRates = {}; 

// --- Data Persistence Helpers ---
function saveData() {
    localStorage.setItem('bank_users', JSON.stringify(allUsers));
    localStorage.setItem('bank_transactions', JSON.stringify(allTransactions));
    if (currentUser) {
        localStorage.setItem('bank_active_user', currentUser.accountId);
    } else {
        localStorage.removeItem('bank_active_user');
    }
}

function loadData() {
    const savedUsers = localStorage.getItem('bank_users');
    const savedTransactions = localStorage.getItem('bank_transactions');
    
    if (savedUsers) allUsers = JSON.parse(savedUsers);
    if (savedTransactions) allTransactions = JSON.parse(savedTransactions);
}

// --- App Initialization ---
document.addEventListener('DOMContentLoaded', async () => {
    // 1. Initialize Theme (Prevents FOUC)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // 2. Load Data from Storage
    loadData();

    // 3. Check for Active Session
    const activeAccountId = localStorage.getItem('bank_active_user');
    if (activeAccountId) {
        const foundUser = allUsers.find(u => u.accountId === activeAccountId);
        if (foundUser) {
            currentUser = foundUser;
            await fetchExchangeRates(); // Fetch Live API Data
            updateDashboardUI();
            renderTransactions();
            calculateSummaries();
            switchView('dashboard');
            return;
        }
    }
    
    // Default to login page if no active session
    switchView('login-page');
});