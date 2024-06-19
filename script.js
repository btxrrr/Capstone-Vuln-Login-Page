function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve stored user data
    var storedUser = localStorage.getItem('user');
    if (storedUser) {
        var user = JSON.parse(storedUser);
        
        // Check if the input credentials match the stored credentials
        if (username === user.username && password === user.password) {
            alert('Welcome, ' + username + '!');
            // Redirect to a new page
            window.location.href = 'welcome.html';
        } else {
            alert('Invalid username or password');
        }
    } else {
        alert('No registered users. Please register first.');
    }
}
