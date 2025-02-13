document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && email && password) {
        // Store data in localStorage (for demo purposes)
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Display a success message
        document.getElementById('message').textContent = 'Sign up successful!';

        // Reset the form
        document.getElementById('signupForm').reset();
    } else {
        document.getElementById('message').textContent = 'Please fill all fields!';
    }
});
