function register() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation (vulnerable to various attacks)
    if (username.length < 5 || password.length < 5) {
        alert('Username and password must be at least 5 characters long.');
        return;
    }

    // Insecurely storing user data (example purpose only, don't do this in real apps)
    var user = {
        username: username,
        password: password
    };

    // Simulate storing user data
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');

    // Redirect to login page
    window.location.href = 'login.html';
}
