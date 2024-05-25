
        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;

            // Vulnerable hardcoded credentials
            var valid_username = 'admin';
            var valid_password = 'password';

            if (username === valid_username && password === valid_password) {
                alert('Welcome, ' + username + '!');
                // Redirect to a new page (vulnerable to open redirects)
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid username or password');
            }
        }
