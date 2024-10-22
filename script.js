// JavaScript code for Login
const validUsername = "admin";
const validPassword = "password123";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === validUsername && password === validPassword) {
        // Login successful, show dashboard
        document.getElementById("login-screen").classList.add("hidden");
        document.getElementById("dashboard-screen").classList.remove("hidden");
    } else {
        // Show error message for invalid credentials
        document.getElementById("login-error").classList.remove("hidden");
    }
}

function logout() {
    // Log out and return to login screen
    document.getElementById("dashboard-screen").classList.add("hidden");
    document.getElementById("login-screen").classList.remove("hidden");
}
