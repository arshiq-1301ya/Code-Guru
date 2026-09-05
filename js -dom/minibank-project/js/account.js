// --- Sign Up Logic ---
document.getElementById('signup-form').addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const name = document.getElementById('signup-name').value.trim();
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Validations
    if (password !== confirmPassword) {
        showError('signup-confirm-password', 'Passwords do not match.');
        return;
    }

    const userExists = allUsers.find(u => u.email === email || u.username === username);
    if (userExists) {
        showError('signup-email', 'Username or Email already registered.');
        return;
    }

    // Create User
    const newUser = {
        accountId: "ACC-" + Math.floor(1000 + Math.random() * 9000),
        name,
        username,
        email,
        password, // In a real app, never store plain text passwords!
        balance: 0
    };

    allUsers.push(newUser);
    saveData();
    e.target.reset();
    switchView('login-page');
    alert("Account created successfully! Please login.");
});

// --- Login Logic ---
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    clearErrors();

    const identity = document.getElementById('login-identity').value.trim();
    const password = document.getElementById('login-password').value;

    const foundUser = allUsers.find(u => 
        (u.email === identity || u.username === identity) && u.password === password
    );

    if (foundUser) {
        currentUser = foundUser;
        saveData(); // Saves active session
        e.target.reset();
        
        await fetchExchangeRates();
        updateDashboardUI();
        renderTransactions();
        calculateSummaries();
        
        switchView('dashboard');
    } else {
        showError('login-password', 'Invalid credentials.');
    }
});

// --- Logout Logic ---
document.getElementById('close-account-btn').addEventListener('click', () => {
    currentUser = null;
    saveData(); // Clears active session in local storage
    switchView('login-page');
});