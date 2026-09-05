// --- Transaction Helpers ---
function createTransaction(type, amount) {
    const tx = {
        transactionId: "TXN-" + Math.floor(10000 + Math.random() * 90000),
        accountId: currentUser.accountId,
        type: type,
        amount: Number(amount),
        date: new Date().toISOString()
    };
    allTransactions.unshift(tx); // Add to beginning of array
    saveData();
    
    // Refresh UI
    updateDashboardUI();
    renderTransactions();
    calculateSummaries();
    
    // Clear input
    document.getElementById('transaction-amount').value = '';
    clearErrors();
}

// --- Deposit Logic ---
document.getElementById('deposit-btn').addEventListener('click', () => {
    clearErrors();
    const amount = Number(document.getElementById('transaction-amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showError('transaction-amount', 'Enter a valid positive amount.');
        return;
    }

    currentUser.balance += amount;
    createTransaction('deposit', amount);
});

// --- Withdrawal Logic ---
document.getElementById('withdraw-btn').addEventListener('click', () => {
    clearErrors();
    const amount = Number(document.getElementById('transaction-amount').value);
    
    if (isNaN(amount) || amount <= 0) {
        showError('transaction-amount', 'Enter a valid positive amount.');
        return;
    }

    if (amount > currentUser.balance) {
        showError('transaction-amount', 'Insufficient funds.');
        return;
    }

    currentUser.balance -= amount;
    createTransaction('withdrawal', amount);
});

// --- History & Summaries ---
function renderTransactions() {
    const list = document.getElementById('transactions-list');
    list.innerHTML = '';

    const userTx = allTransactions.filter(tx => tx.accountId === currentUser.accountId);
    
    if (userTx.length === 0) {
        list.innerHTML = '<li>No transactions found.</li>';
        return;
    }

    const formatter = new Intl.DateTimeFormat('en-IN', {
        dateStyle: 'medium', timeStyle: 'short'
    });

    const htmlStr = userTx.map(tx => {
        const isDeposit = tx.type === 'deposit';
        const colorClass = isDeposit ? 'text-green' : 'text-red';
        const sign = isDeposit ? '+' : '-';
        
        return `
            <li>
                <span>${tx.type.toUpperCase()} <br><small style="color:gray;">${formatter.format(new Date(tx.date))}</small></span>
                <span class="${colorClass}">${sign}₹${tx.amount.toFixed(2)}</span>
            </li>
        `;
    }).join('');
    
    list.innerHTML = htmlStr;
}

function calculateSummaries() {
    const userTx = allTransactions.filter(tx => tx.accountId === currentUser.accountId);
    
    const deposited = userTx
        .filter(tx => tx.type === 'deposit')
        .reduce((sum, tx) => sum + tx.amount, 0);
        
    const withdrawn = userTx
        .filter(tx => tx.type === 'withdrawal')
        .reduce((sum, tx) => sum + tx.amount, 0);

    document.getElementById('summary-total-deposited').textContent = `₹${deposited.toFixed(2)}`;
    document.getElementById('summary-total-withdrawn').textContent = `₹${withdrawn.toFixed(2)}`;
}

// --- Live Currency Converter (Bonus) ---
async function fetchExchangeRates(baseCurrency = 'INR') {
    try {
        const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        currentExchangeRates = data.rates;
    } catch (error) {
        console.error('Failed to fetch rates, falling back to base currency:', error);
        currentExchangeRates = { INR: 1, USD: 0.012, EUR: 0.011, GBP: 0.0095 };
    }
}

function updateBalanceDisplayCurrency(selectedCurrency = 'INR') {
    if (!currentUser) return;

    const rate = currentExchangeRates[selectedCurrency] || 1;
    const convertedBalance = (currentUser.balance * rate).toFixed(2);

    const currencySymbols = {
        INR: '₹', USD: '$', EUR: '€', GBP: '£'
    };
    const symbol = currencySymbols[selectedCurrency] || '';
    
    document.getElementById('display-balance').textContent = `${symbol}${convertedBalance}`;
}

document.getElementById('currency-selector').addEventListener('change', (e) => {
    updateBalanceDisplayCurrency(e.target.value);
});