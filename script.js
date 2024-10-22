// Dummy User Data
const userData = {
  username: "user",
  password: "password123",
  balance: 10000,
  cardFrozen: false,
  transactions: [
    { date: "2024-10-01", description: "Grocery", amount: -50 },
    { date: "2024-10-15", description: "Salary", amount: 3000 },
    { date: "2024-10-18", description: "Netflix", amount: -15 },
  ],
};

// Login Functionality
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("login-error");

  if (username === userData.username && password === userData.password) {
    document.getElementById("user-name").textContent = username;
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("dashboard-screen").classList.remove("hidden");
  } else {
    errorDiv.textContent = "Invalid username or password!";
  }
}

// Logout Functionality
function logout() {
  document.getElementById("dashboard-screen").classList.add("hidden");
  document.getElementById("login-screen").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("login-error").textContent = "";
}

// View Transactions
function viewTransactions() {
  const transactionsList = document.getElementById("transactions-list");
  transactionsList.innerHTML = "";

  userData.transactions.forEach((txn) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${txn.date}: ${txn.description} - $${txn.amount}`;
    transactionsList.appendChild(listItem);
  });

  document.getElementById("dashboard-screen").classList.add("hidden");
  document.getElementById("transactions-screen").classList.remove("hidden");
}

// Freeze/Unfreeze Card
function toggleFreeze() {
  userData.cardFrozen = !userData.cardFrozen;
  const status = userData.cardFrozen ? "Frozen" : "Active";
  document.getElementById("freeze-status").textContent = `Status: Card ${status}`;
}

// Back to Dashboard
function backToDashboard() {
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.add("hidden");
  });
  document.getElementById("dashboard-screen").classList.remove("hidden");
}
