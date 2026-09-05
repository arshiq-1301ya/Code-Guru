// --- View Management ---
function switchView(viewId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.classList.add('hidden');
    });
    
    // Show target section
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.remove('hidden');
        target.classList.add('active');
    }
    
    clearErrors(); // Reset UI state on view change
}

// --- Error Handling UI ---
function showError(elementId, message) {
    const targetElement = document.getElementById(elementId);
    if (!targetElement) return;

    // Check if error already exists next to it
    let existingError = targetElement.nextElementSibling;
    if (existingError && existingError.classList.contains('error-msg')) {
        existingError.textContent = message;
        return;
    }

    // Create new error element
    const errorSpan = document.createElement('span');
    errorSpan.className = 'error-msg';
    errorSpan.textContent = message;
    targetElement.parentNode.insertBefore(errorSpan, targetElement.nextSibling);
}

function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.remove());
}

// --- Dashboard UI Updater ---
function updateDashboardUI() {
    if (!currentUser) return;
    
    document.getElementById('display-name').textContent = currentUser.name;
    document.getElementById('display-email').textContent = currentUser.email;
    document.getElementById('display-account-id').textContent = currentUser.accountId;
    
    // Reset Currency Selector to INR on fresh load
    document.getElementById('currency-selector').value = 'INR';
    updateBalanceDisplayCurrency('INR'); 
}

// --- Dark Mode Toggle (Bonus) ---
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

document.getElementById('theme-toggle-btn').addEventListener('click', toggleTheme);