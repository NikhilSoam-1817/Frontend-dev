function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameRegex = /^.{5,}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if(!usernameRegex.test(username)) return alert("Username must be at least 5 characters");
    if(!passwordRegex.test(password)) return alert("Password must be at least 8 characters with uppercase, lowercase, number, and special char");
    alert("Login Successful!");
}
document.getElementById('loginForm').addEventListener('submit', validateLoginForm);