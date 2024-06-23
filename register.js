function register() {
    var username = document.getElementById('reg-username').value;
    var password = document.getElementById('reg-password').value;
    var role = document.getElementById('reg-role').value; // Assuming a select input for role

    var user = {
        username: username,
        password: password,
        role: role
    };

    // Simulate storing user data
    localStorage.setItem('user', JSON.stringify(user));
    alert('User registered successfully!');

    // Redirect to login page
    window.location.href = 'index.html';
}
