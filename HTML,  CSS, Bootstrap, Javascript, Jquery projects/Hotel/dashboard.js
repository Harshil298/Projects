// Retrieve the username from local storage
var username = localStorage.getItem('username');

// Display the username on the dashboard
document.getElementById('usernameDisplay').innerText = 'Hello, ' + username + '!';