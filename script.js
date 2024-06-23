function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Retrieve stored user data from localStorage
    var storedUser = localStorage.getItem(username);

    if (storedUser) {
        var user = JSON.parse(storedUser);

        // Debugging: Log user details
        console.log('Retrieved user:', user);

        // Check if the input credentials match the stored credentials
        if (password === user.password) {
            alert('Welcome, ' + username + '!');

            // Debugging: Check the user role
            console.log('User role:', user.role);

            // Redirect based on user role
            if (user.role === 'admin') {
                console.log('Redirecting to admin.html');
                window.location.href = 'admin.html?user=' + encodeURIComponent(username);
            } else {
                console.log('Redirecting to user.html');
                window.location.href = 'user.html?user=' + encodeURIComponent(username);
            }
        } else {
            alert('Invalid password');
        }
    } else {
        alert('User not found. Please register first.');
    }
}
