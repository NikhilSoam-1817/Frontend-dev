let user = { name: "John", email: "john@mail.com", age: 21 };
function updateUser(event) {
    event.preventDefault();
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.age = Number(document.getElementById('age').value);
    document.getElementById('userDetails').innerText = JSON.stringify(user, null, 2);
}
document.getElementById('userForm').addEventListener('submit', updateUser);